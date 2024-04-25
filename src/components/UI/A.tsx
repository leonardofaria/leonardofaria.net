import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaYoutube, FaMeetup } from 'react-icons/fa';
import { BsFileEarmarkSlides } from 'react-icons/bs';
import { PiGoodreadsLogoFill } from 'react-icons/pi';
import { ImNpm } from 'react-icons/im';
import { SiNextdotjs, SiEslint, SiSubstack, SiWikipedia } from 'react-icons/si';

import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';

// const ICONS = [
//   {
//     domain: 'eslint.org',
//     component: SiEslint,
//     color: '#4B32C3',
//   },
//   {
//     domain: 'github.com',
//     component: AiOutlineGithub,
//     color: '#333333',
//   },
//   {
//     domain: 'goodreads.com',
//     component: PiGoodreadsLogoFill,
//     color: '#553b08',
//   },
//   {
//     domain: 'instagram.com',
//     component: AiFillInstagram,
//     color: '#c13584',
//   },
//   {
//     domain: 'icloud.com/keynote',
//     component: BsFileEarmarkSlides,
//     color: '#636466',
//   },
//   {
//     domain: 'meetup.com',
//     component: FaMeetup,
//     color: '#ed1c40',
//   },
//   {
//     domain: 'npmjs.com',
//     component: ImNpm,
//     color: '#cb3837',
//   },
//   {
//     domain: 'substack.com',
//     component: SiSubstack,
//     color: '#FF6719',
//   },
//   {
//     domain: 'youtube.com',
//     component: FaYoutube,
//     color: '#c4302b',
//   },
//   {
//     domain: 'youtu.be',
//     component: FaYoutube,
//     color: '#c4302b',
//   },
//   {
//     domain: 'twitter.com',
//     component: AiOutlineTwitter,
//     color: '#1da1f2',
//   },
//   {
//     domain: 'wikipedia.com',
//     component: SiWikipedia,
//     color: '#636466',
//   },
// ];

// TODO: this needs to be generated from the above but it is not working
// right now since the text-color classes are created dynamically
function getIcon(href: string) {
  const iconClasses = 'mx-1 mt-[-4px] inline-block';

  // eslint-disable-next-line no-restricted-syntax
  // for (const { domain, component: Component, color } of ICONS) {
  //   if (href.includes(domain)) {
  //     return (
  //       <Component
  //         // eslint-disable-next-line tailwindcss/no-custom-classname
  //         className={`${iconClasses} text-[${color}]`}
  //       />
  //     );
  //   }
  // }

  if (href.includes('eslint.org')) {
    return (
      <SiEslint
        className={`${iconClasses} text-[#4B32C3] hover:text-[#4B32C3]`}
      />
    );
  }

  if (href.includes('github.com')) {
    return (
      <AiOutlineGithub
        className={`${iconClasses} text-[#333333] hover:text-[#333333]`}
      />
    );
  }

  if (href.includes('goodreads.com')) {
    return (
      <PiGoodreadsLogoFill
        className={`${iconClasses} text-[#553b08] hover:text-[#553b08]`}
      />
    );
  }

  if (href.includes('icloud.com/keynote')) {
    return (
      <BsFileEarmarkSlides
        className={`${iconClasses} text-[#636466] hover:text-[#636466]`}
      />
    );
  }

  if (href.includes('instagram.com')) {
    return (
      <AiFillInstagram
        className={`${iconClasses} text-[#c13584] hover:text-[#c13584]`}
      />
    );
  }

  if (href.includes('meetup.com')) {
    return (
      <FaMeetup
        className={`${iconClasses} text-[#ed1c40] hover:text-[#ed1c40]`}
      />
    );
  }

  if (href.includes('nextjs.org')) {
    return (
      <SiNextdotjs
        className={`${iconClasses} text-[#333333] hover:text-[#333333]`}
      />
    );
  }

  if (href.includes('npmjs.com')) {
    return (
      <ImNpm className={`${iconClasses} text-[#cb3837] hover:text-[#cb3837]`} />
    );
  }

  if (href.includes('substack.com')) {
    return (
      <SiSubstack
        className={`${iconClasses} text-[#FF6719] hover:text-[#FF6719]`}
      />
    );
  }

  if (href.includes('youtube.com')) {
    return (
      <FaYoutube
        className={`${iconClasses} text-[#c4302b] hover:text-[#c4302b]`}
      />
    );
  }

  if (href.includes('youtu.be')) {
    return (
      <FaYoutube
        className={`${iconClasses} text-[#c4302b] hover:text-[#c4302b]`}
      />
    );
  }

  if (href.includes('twitter.com')) {
    return (
      <AiOutlineTwitter
        className={`${iconClasses} text-[#1da1f2] hover:text-[#1da1f2]`}
      />
    );
  }

  if (href.includes('wikipedia.org')) {
    return (
      <SiWikipedia
        className={`${iconClasses} text-[#636466] hover:text-[#636466]`}
      />
    );
  }

  return null;
}

export function A({
  children,
  className,
  href,
  ...rest
}: {
  children: string;
  className?: string;
  href: string;
}) {
  const classes = `inline ${CONTENT_STYLES.a} ${className ?? ''}`;

  return (
    <a className={classes} href={href} {...rest}>
      {getIcon(href)}
      <span>{children}</span>
    </a>
  );
}
