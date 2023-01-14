import { WEBSITE_DESCRIPTION, WEBSITE_SUBHEADING } from '../../lib/constants';

export default function Intro() {
  return (
    <div className="intro">
      <h1 className="relative">{WEBSITE_SUBHEADING}</h1>
      <p>{WEBSITE_DESCRIPTION}</p>
    </div>
  );
}
