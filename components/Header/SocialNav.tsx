import { SOCIAL_LINKS } from 'lib/constants';
import {
  FaMastodon,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRss,
} from 'react-icons/fa';

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
    case 'E-mail':
      return <FaEnvelope className={classes} />;
    case 'RSS':
      return <FaRss className={classes} />;
    default:
      return null;
  }
}

export default function SocialNav() {
  return (
    <ul className="flex justify-end">
      {SOCIAL_LINKS.map((social) => (
        <li key={social.name}>
          <a
            className="block p-2 opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
            href={social.url}
            // rel="me" is used for IndieWeb sign-in
            rel={social.name === 'GitHub' ? 'me' : undefined}
            title={social.name}
          >
            <Icon name={social.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}
