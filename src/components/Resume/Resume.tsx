// Ready to print in Chrome Canary

import { EDUCATION, EXPERIENCE, OTHER, type SectionData } from './data';

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <h2 className="bg-white pr-3 text-xl text-gray-900">{title}</h2>
      </div>
    </div>
  );
}

function SectionDetails({ details }: { details: SectionData['details'] }) {
  if (typeof details === 'string') {
    return <>todo</>;
  }

  return (
    <div className="flex flex-col gap-3">
      {details.map((detail) => {
        return (
          <div key={detail.title}>
            <div className="mb-1 flex items-center justify-between">
              {detail.title !== '' ? (
                <b className="font-semibold">{detail.title}</b>
              ) : (
                 
                <>
                  {!Array.isArray(detail.description) && (
                    <p
                       
                      dangerouslySetInnerHTML={{ __html: detail.description }}
                    />
                  )}
                </>
              )}

              <small className="shrink-0">{detail.period}</small>
            </div>

            {Array.isArray(detail.description) ? (
              <ul>
                {detail.description.map((d) => (
                  <li
                    className="mb-1 before:mr-2 before:text-gray-500 before:content-['•']"
                    key={d}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{detail.title !== '' && detail.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Section({
  title,
  sectionData,
}: {
  title: string;
  sectionData: SectionData[];
}) {
  return (
    <section className="flex w-full flex-col gap-2 text-sm">
      <SectionTitle title={title} />

      {sectionData.map((section) => {
        return (
          <div key={section.name}>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-500">
                {section.name}
              </h3>
              <small>{section.location}</small>
            </div>

            <SectionDetails details={section.details} />
          </div>
        );
      })}
    </section>
  );
}

export default function Resume() {
  return (
    <main className="mx-auto my-8 flex max-w-[744px] flex-col gap-4 text-gray-700 print:my-0 print:max-w-full">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl text-gray-500">Leonardo Faria</h1>

        <nav className="text-sm">
          <ul className="list-none text-right">
            <li>
              <a
                className="text-blue-500 underline"
                href="mailto:leonardofaria@gmail.com"
              >
                leonardofaria@gmail.com
              </a>
            </li>
            <li>
              <a
                className="text-blue-500 underline"
                href="https://leonardofaria.net"
              >
                https://leonardofaria.net
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <p className="mb-3 text-base">
          Software engineer with broad experience designing, architecting, and
          developing websites and SaaS products. Growth-minded and passionate
          about building 0 to 1 products through thoughtful stakeholder
          engagements, deep technical expertise, and an eye for scaling
          processes and people.
        </p>

        <p className="mb-3 text-sm">
          <span className="font-semibold">Core competencies:</span> Front-end,
          technical leadership, architecture, mentorship, Continuous
          Integration, Design System, accessibility, Developer Experience
        </p>
      </section>

      <Section sectionData={EXPERIENCE} title="Experience" />

      <Section sectionData={EDUCATION} title="Education" />

      <Section sectionData={OTHER} title="Other" />

      <section className="flex w-full flex-col gap-3 text-sm">
        <SectionTitle title="Technical skills" />

        <ul>
          <li className="before:mr-2 before:text-gray-500 before:content-['•']">
            <span className="font-semibold text-gray-500">Front end:</span>{' '}
            React, TypeScript, Next.js, Chakra UI, Tailwind CSS, Ember.js,
            Storybook, axe, Jest, React Testing Library, ESLint
          </li>
          <li className="before:mr-2 before:text-gray-500 before:content-['•']">
            <span className="font-semibold text-gray-500">Back end:</span>{' '}
            Node.js, Ruby on Rails, PHP, Posgres, MySQL
          </li>
          <li className="before:mr-2 before:text-gray-500 before:content-['•']">
            <span className="font-semibold text-gray-500">
              Other Technologies:
            </span>{' '}
            Lighthouse, Supabase, graphQL, REST, WordPress
          </li>
          <li className="before:mr-2 before:text-gray-500 before:content-['•']">
            <span className="font-semibold text-gray-500">Tools:</span> Figma,
            GitHub, GitHub Actions, Circle CI, Datadog, Grafana
          </li>
          <li className="before:mr-2 before:text-gray-500 before:content-['•']">
            <span className="font-semibold text-gray-500">Infrastructure:</span>{' '}
            AWS, Vercel, Netlify, Fastly, Heroku
          </li>
        </ul>
      </section>
    </main>
  );
}
