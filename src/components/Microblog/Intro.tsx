import { MICROBLOG_INTRO } from '../../lib/constants';
import { Badge } from '../UI/Badge';

export default function Intro() {
  return (
    <section className="mx-auto my-6 flex justify-center" role="alert">
      <div className="flex items-center bg-indigo-800 p-2 leading-none text-indigo-100 lg:inline-flex lg:rounded-full">
        <Badge variation="primary">New</Badge>
        <span className="mx-2 text-left font-semibold">{MICROBLOG_INTRO}</span>
      </div>
    </section>
  );
}
