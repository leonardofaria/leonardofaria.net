import { MICROBLOG_INTRO } from '../../lib/constants';
import { Badge } from '../UI/Badge';

export default function Intro() {
  return (
    <section
      className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <Badge variation="primary">New</Badge>
      <span className="font-semibold mx-2 text-left">{MICROBLOG_INTRO}</span>
    </section>
  );
}
