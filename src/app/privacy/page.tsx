import Page from 'src/components/CMS/Page';
import { PRIVACY_PARAGRAPHS } from 'src/lib/agentic';
import { BASE_URL, WEBSITE_TITLE } from 'src/lib/constants';
import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Privacy · ${WEBSITE_TITLE}`,
  description:
    'Privacy information for leonardofaria.net, including analytics, error reporting, third-party content, and email contact.',
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
  openGraph: {
    title: `Privacy · ${WEBSITE_TITLE}`,
    description: 'How leonardofaria.net handles data and third-party services.',
    url: `${BASE_URL}/privacy`,
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <Page
      headline1="How this personal website handles"
      headline2="analytics, technical data, and correspondence"
      permalink="/privacy"
      title="Privacy"
    >
      <div className="space-y-6 text-lg">
        <p>
          <strong>Effective date:</strong> August 29, 2026
        </p>

        {PRIVACY_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <p>
          Questions about this notice can be sent to{' '}
          <a className={CONTENT_STYLES.a} href="mailto:leonardofaria@gmail.com">
            leonardofaria@gmail.com
          </a>
          .
        </p>
      </div>
    </Page>
  );
}
