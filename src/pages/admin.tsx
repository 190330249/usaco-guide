import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useEffect, useState } from 'react';

const RawMarkdownRenderer = React.lazy(() =>
  import('../components/AdminMarkdownRenderer')
);

export default function AdminPage(props: PageProps) {
  const [markdown, setMarkdown] = useState('');

  return (
    <Layout>
      <SEO title="Admin Page" />

      <div className="h-screen flex">
        <div className="flex-1">
          <textarea
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
            className="w-full border border-gray-200 h-screen overflow-y-auto"
            style={{ resize: 'none' }}
          />
        </div>
        <div className="flex-1 p-4 h-screen overflow-y-auto">
          {typeof window !== 'undefined' && (
            <React.Suspense fallback={'Loading'}>
              <RawMarkdownRenderer markdown={markdown} />
            </React.Suspense>
          )}
        </div>
      </div>
    </Layout>
  );
}
