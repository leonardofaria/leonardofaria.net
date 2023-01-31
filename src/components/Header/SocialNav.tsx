import {
  FaMastodon,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRss,
} from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../lib/constants';

function Icon({ name }: { name: string }) {
  const classes = 'fill-current w-5 h-5';

  switch (name) {
    case 'Mastodon':
      return <FaMastodon className={classes} />;
    case 'Twitter':
      return <FaTwitter className={classes} />;
    case 'GitHub':
      return <FaGithub className={classes} />;
    case 'Linkedin':
      return <FaLinkedin className={classes} />;
    case 'Email':
      return <FaEnvelope className={classes} />;
    case 'RSS':
      return <FaRss className={classes} />;
    default:
      return null;
  }
}

export default function SocialNav() {
  return (
    <ul className="flex list-none justify-end lg:justify-start">
      {/* Hack to get all the classes otherwise we don't get them generated */}
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <span className="hidden hover:text-github hover:text-linkedin hover:text-email hover:text-rss hover:text-mastodon hover:text-twitter" />
      {SOCIAL_LINKS.map((social) => {
        const className = `block p-2 transition duration-300 ease-in-out text-gray-600 hover:text-${social.name.toLowerCase()}`;
        return (
          <li className="" key={social.name}>
            <a
              className={className}
              href={social.url}
              // rel="me" is used for IndieWeb sign-in
              rel={social.name === 'GitHub' ? 'me' : undefined}
              title={social.name}
            >
              <Icon name={social.name} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
