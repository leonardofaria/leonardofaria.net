import { useState, useEffect } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import type { WebMention } from 'lib/types';
import useWindowSize from 'lib/hooks/useWindowSize';
import { LARGE_SCREEN_BREAKPOINT } from 'lib/constants';

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
        <a className="no-underline ml-2" href={mention.data.author?.url}>
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
    <li className="flex mb-8 text-base">
      <a className="flex-shrink-0" href={mention.data.author.url}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="w-8 h-8 rounded-full mr-3"
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

export default function Webmentions({ url }: { url: string }) {
  const { width } = useWindowSize();
  const isDesktop = width >= LARGE_SCREEN_BREAKPOINT;

  const LIMIT_AVATARS = isDesktop ? 20 : 4;
  const [mentions, setMentions] = useState<WebMention[]>();
  const [showLikes, setShowLikes] = useState(false);
  const [showInteractions, setShowInteractions] = useState(false);
  let likesTotal = 0;
  const uniqueAuthorUrls: string[] = [];

  mentions?.forEach((mention) => {
    if (mention.activity.type === 'like') {
      likesTotal += 1;
    }
    const authorUrl = mention.data.author?.photo;
    if (authorUrl && !uniqueAuthorUrls.includes(authorUrl)) {
      uniqueAuthorUrls.push(authorUrl);
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

  return (
    <>
      <header className="flex items-center">
        <button
          className="flex items-center mr-6 p-3 bg-gray-100 hover:bg-white transition duration-300 ease-in-out rounded-md"
          type="button"
          onClick={() => setShowLikes(!showLikes)}
        >
          <FaHeart className="w-6 h-6 mr-2" />
          <span className="mr-1">{likesTotal}</span>
        </button>
        <button
          className="flex items-center mr-6 p-3 bg-gray-100 hover:bg-white transition duration-300 ease-in-out rounded-md"
          type="button"
          onClick={() => setShowInteractions(!showInteractions)}
        >
          <FaComment className="w-6 h-6 mr-2" />
          <span className="mr-1">{interactionsTotal}</span>
        </button>
        <div className="flex-grow">
          <div className="flex -space-x-2 overflow-hidden">
            {uniqueAuthorUrls.map((authorUrl, index) => {
              if (index === LIMIT_AVATARS) {
                return (
                  <span
                    className="flex items-center justify-center text-xs bg-black text-white font-bold h-8 w-8 rounded-full ring-2 ring-white"
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
                <img
                  alt=""
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  key={authorUrl}
                  src={authorUrl}
                />
              );
            })}
          </div>
        </div>
      </header>

      {showInteractions && (
        <>
          <h4>Replies & Shares</h4>

          <ul>
            {mentions?.map((mention) => {
              if (mention.activity.type === 'like') {
                return null;
              }
              return <Mention key={mention.id} originalMention={mention} />;
            })}
          </ul>
        </>
      )}

      {showLikes && (
        <>
          <h4>Likes</h4>

          <ul>
            {mentions?.map((mention) => {
              if (mention.activity.type !== 'like') {
                return null;
              }
              return <Mention key={mention.id} originalMention={mention} />;
            })}
          </ul>
        </>
      )}
    </>
  );
}
