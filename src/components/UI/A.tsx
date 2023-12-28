import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { PiGoodreadsLogoFill } from 'react-icons/pi';
import { ImNpm } from 'react-icons/im';
import { SiEslint, SiSubstack, SiWikipedia } from 'react-icons/si';

import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';

function getIcon(href: string) {
  // TODO: maybe use favicon instead
  const iconClasses = 'mx-1 mt-[-4px] inline-block';

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

  if (href.includes('instagram.com')) {
    return (
      <AiFillInstagram
        className={`${iconClasses} text-[#c13584] hover:text-[#c13584]`}
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
