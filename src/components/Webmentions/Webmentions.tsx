import { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaCopy } from 'react-icons/fa';
import Link from 'next/link';
import { SiBuymeacoffee } from 'react-icons/si';
import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';
import useCopyToClipboard from 'src/lib/hooks/useCopyToClipboard';
import type { WebMention } from '../../lib/types';
import useWindowSize from '../../lib/hooks/useWindowSize';
import { LARGE_SCREEN_BREAKPOINT } from '../../lib/constants';

/* eslint-disable @next/next/no-img-element, react/no-danger */

// user-circle icon from heroicons.com encoded by https://yoksel.github.io/url-encoder/
const ANON_AVATAR =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"%3E%3Cpath fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" /%3E%3C/svg%3E';

const getUrlPermutations = (url: string) => {
  const urls = [url];

  urls.push(url.replace('https://', 'http://'));

  if (url.endsWith('/')) {
    const noSlash = url.substr(0, url.length - 1);
    urls.push(noSlash);
    urls.push(noSlash.replace('https://', 'http://'));
  } else {
    const withSlash = `${url}/`;
    urls.push(withSlash);
    urls.push(withSlash.replace('https://', 'http://'));
  }

  return urls;
};

function Share({ url, title }: { url: string; title: string }) {
  const [_value, copy] = useCopyToClipboard();
  const [copyBgColor, setCopyBgColor] = useState('bg-gray-600');
  const iconClasses = 'h-4 w-4 fill-current';
  const buttonClasses = `flex gap-2 items-center rounded-md px-3 py-2 text-xs font-bold text-white no-underline hover:opacity-75 transition`;

  return (
    <div className="mt-4 mb-2 flex flex-wrap items-center gap-3">
      <span>Like this content? </span>

      <a
        className={`${buttonClasses} bg-buymeacoffee !text-black`}
        href="https://buymeacoffee.com/leonardofaria"
      >
        <SiBuymeacoffee className={iconClasses} />
        Buy me a coffee
      </a>

      <span>or share around: </span>

      <button
        className={`${buttonClasses} ${copyBgColor}`}
        type="button"
        onClick={() => {
          copy(url);
          setCopyBgColor('bg-teal-600');
          setTimeout(() => {
            setCopyBgColor('bg-gray-600');
          }, 2000);
        }}
      >
        <FaCopy className={iconClasses} />
        <span className="hidden lg:flex">Share URL</span>
      </button>

      <a
        className={`${buttonClasses} bg-twitter`}
        href={`https://twitter.com/intent/tweet?url=${url}&amp;text=${title}`}
      >
        <FaTwitter className={iconClasses} />
        <span className="hidden lg:flex">Twitter</span>
      </a>

      <a
        className={`${buttonClasses} bg-linkedin`}
        href={`https://twitter.com/intent/tweet?url=${url}&amp;text=${title}`}
      >
        <FaLinkedin className={iconClasses} />
        <span className="hidden lg:flex">Linkedin</span>
      </a>
    </div>
  );
}

function Mention({ originalMention }: { originalMention: WebMention }) {
  const mention = originalMention;

  if (!mention.data.author) {
    const domain = new URL(mention.source).origin;
    // TODO: avoid Google, try options from:
    // https://dev.to/derlin/get-favicons-from-any-website-using-a-hidden-google-api-3p1e
    const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

    mention.data.author = {
      url: mention.source,
      name: 'External link',
      photo: favicon || ANON_AVATAR,
    };
  }

  function renderDate() {
    return (
      <small>
        <a className="ml-2 underline" href={mention.data.author?.url}>
          {new Date(mention.verified_date).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </a>
      </small>
    );
  }

  return (
    <li className="mb-8 flex text-base">
      <a className="shrink-0" href={mention.data.author.url}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="mr-3 h-8 w-8 rounded-full"
          src={mention.data.author.photo}
        />
      </a>
      <div>
        {mention.activity.type !== 'like' ? (
          <div>
            <strong>
              <a className="no-underline" href={mention.data.author.url}>
                {mention.data.author.name}
              </a>
            </strong>
            {renderDate()}
          </div>
        ) : null}

        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: mention.activity.sentence_html.replace(/\\"/g, ''),
            }}
          />
          {mention.activity.type === 'like' && renderDate()}
        </div>
      </div>
    </li>
  );
}

export default function Webmentions({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const { width } = useWindowSize();
  const isDesktop = width >= LARGE_SCREEN_BREAKPOINT;

  const LIMIT_AVATARS = isDesktop ? 20 : 4;
  const [mentions, setMentions] = useState<WebMention[]>();

  let likesTotal = 0;
  const uniqueAuthorUrls: string[] = [];

  mentions?.forEach((mention) => {
    if (mention.activity.type === 'like') {
      likesTotal += 1;

      const authorUrl = mention.data.author?.photo;
      if (authorUrl && !uniqueAuthorUrls.includes(authorUrl)) {
        uniqueAuthorUrls.push(authorUrl);
      }
    }
  });

  const interactionsTotal = (mentions?.length || 0) - likesTotal;

  useEffect(() => {
    const targets = getUrlPermutations(url);

    let webmentionUrl = 'https://webmention.io/api/mentions?perPage=500';
    targets.forEach((targetUrl) => {
      webmentionUrl += `&target[]=${encodeURIComponent(targetUrl)}`;
    });
    webmentionUrl += `&_=${Math.random()}`;

    fetch(webmentionUrl)
      .then((response) => response.json())
      .then((result) => {
        setMentions(result.links);
      });
  }, [url]);

  if (mentions?.length === 0) {
    return <Share title={title || ''} url={url} />;
  }

  return (
    <>
      <Share title={title || ''} url={url} />

      <div className="flex items-center">
        <h4 className={`${CONTENT_STYLES.h4} mr-3`}>
          {likesTotal} {likesTotal > 1 ? 'Likes' : 'Like'}
        </h4>

        <div className="grow">
          <div className="flex -space-x-2 overflow-hidden">
            {mentions?.map((mention, index) => {
              if (index === LIMIT_AVATARS) {
                return (
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white ring-2 ring-white"
                    key="more"
                  >
                    +{(mentions?.length || 0) - LIMIT_AVATARS}
                  </span>
                );
              }

              if (index > LIMIT_AVATARS) {
                return null;
              }

              return (
                <Link
                  href={mention.data.url}
                  key={mention.id}
                  title={mention.activity.sentence}
                >
                  <img
                    alt=""
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={mention.data.author?.photo}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <h4 className={CONTENT_STYLES.h4}>
        {interactionsTotal}{' '}
        {interactionsTotal > 1 ? 'Replies & Shares' : 'Reply & Share'}
      </h4>

      <ul>
        {mentions?.map((mention) => {
          if (mention.activity.type === 'like') {
            return null;
          }
          return <Mention key={mention.id} originalMention={mention} />;
        })}
      </ul>
    </>
  );
}
