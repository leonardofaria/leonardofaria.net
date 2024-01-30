// Ready to print in Chrome Canary
export default function Resume() {
  return (
    <div className="mx-auto my-8 max-w-[800px] text-gray-700 print:my-0 print:max-w-full">
      <header className="flex flex-wrap">
        <aside className="print:w-2/12 sm:w-2/12">
          <h1 className="m-0 text-3xl text-gray-500">Leonardo Faria</h1>
        </aside>

        <div className="pb-5 text-sm print:w-10/12 sm:w-10/12 sm:px-2">
          <p className="mb-5 text-right">
            <a
              className="text-blue-500 underline"
              href="mailto:leonardo@leonardofaria.net"
            >
              <small>leonardo@leonardofaria.net</small>
            </a>{' '}
            —{' '}
            <a
              className="text-blue-500 underline"
              href="https://leonardofaria.net"
            >
              <small>https://leonardofaria.net</small>
            </a>
          </p>

          <p className="mb-3 text-base">
            Software engineer with broad experience designing, architecturing,
            and developing websites and SaaS products. Growth-minded
            technologist passionate about building 0 to 1 products through
            thoughtful stakeholder engagements, deep technical expertise, and an
            eye for scaling processes and people.
          </p>

          <p className="mb-3 text-sm">
            <span className="font-semibold">Core competencies:</span> Front-end,
            technical leadership, architecture, mentorship, Continuous
            Integration, Design System, accessibility, Developer Experience
          </p>
        </div>
      </header>

      <div className="flex flex-wrap">
        <aside className="shrink-0 py-6 print:w-2/12 sm:w-2/12">
          <h2 className="text-xl text-gray-500">Experience</h2>
        </aside>

        <section className="w-full border-t border-gray-400 py-6 text-sm print:w-10/12 sm:w-10/12">
          <div className="mb-6 sm:px-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-500">Lattice</h3>
              <small>San Francisco / Remote</small>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <b className="font-semibold">Staff Software Engineer</b>
              <small className="shrink-0">Apr 2022 — Present</small>
            </div>

            <ul className="mt-2 list-disc pl-3">
              <li>
                Worked on different 0 to 1 projects from a new company
                initiative with TypeScript and React, iterating and adapting the
                product according to requirements/customer needs
              </li>
              <li>
                Improved testing by creating documentation, guidelines and
                building a CI tool to track test coverage across different teams
              </li>
              <li>
                Enhanced developer experience tools and documentation, making
                engineers more productive
              </li>
              <li>
                Advocated for accessibility by leveraging automated tests to
                create a product usable for all customers
              </li>
            </ul>
          </div>

          <div className="my-6 sm:px-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-500">
                  Thinkific
                </h3>
                <small>Vancouver</small>
              </div>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <b className="font-semibold">Technical Architect - Front-end</b>
              <small className="shrink-0">Sep 2020 — Mar 2022</small>
            </div>

            <ul className="mt-2 list-disc pl-3">
              <li>
                Improved Front-end performance by: introducing Lighthouse
                testing in CI; refactoring the product to support webp and
                working on different projects to improve page load and user
                experience
              </li>
              <li>
                Worked closely with teams to demonstrate the feasibility of
                technical solutions in upcoming projects, bridging product and
                engineering
              </li>
              <li>
                Partnered with the Chief Architect defining technical vision and
                technical strategy
              </li>
              <li>
                Supported the Design System solution (used by different React
                and Ruby on Rails applications), especially in CI and
                accessibility tasks
              </li>
            </ul>

            <div className="mb-2 mt-3 flex items-center justify-between">
              <b className="font-semibold">Engineering Team Lead</b>
              <small className="shrink-0">Oct 2017 — Sep 2020</small>
            </div>

            <ul className="mt-2 list-disc pl-3">
              <li>
                Led a team of up to 7 back-end/front-end engineers working on
                projects for different customer personas (course
                creators/students)
              </li>
              <li>
                Provided mentorship, collected and delivered feedback; set goals
                for engineer reports and conducted performance reviews
              </li>
              <li>
                Owned projects end-to-end, including the redesign of the
                product, React adoption, and the creation of the Thinkific
                Design System (2018 — present)
              </li>
              <li>
                Grew the team by proactively sourcing ICs. Successfully
                recruited 4 engineers by partnering with the HR department and
                working on creative ways to find talent
              </li>
              <li>
                Led different initiatives in R&D (All-hands, onboarding of new
                members, hackathons) while the company scaled from 50 to 300
                employees
              </li>
            </ul>

            <div className="mb-2 mt-3 flex items-center justify-between">
              <b className="font-semibold">Senior Software Engineer</b>
              <small className="shrink-0">Nov 2016 — Oct 2017</small>
            </div>

            <p>
              Worked on different customer-facing projects mostly focusing on
              front-end and using Ruby on Rails and Ember.js
            </p>
          </div>

          <div className="my-6 sm:px-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-500">
                Dynamic Leap Technology
              </h3>
              <small>Vancouver</small>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <b className="font-semibold">
                Full Stack Developer (contract work)
              </b>
              <small className="shrink-0">Feb 2016 — Nov 2016</small>
            </div>

            <ul className="list-disc pl-3">
              <li>
                Developed websites using WordPress for Dynamic Leap and its
                clients
              </li>
              <li>
                Built MVPs for clients using Ember.js and Ruby on Rails APIs.
              </li>
            </ul>
          </div>

          <div className="my-6 sm:px-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-500">
                  604media
                </h3>
                <small>Vancouver</small>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <b className="font-semibold">
                  Full Stack Developer (contract work)
                </b>
                <small className="shrink-0">Oct 2015 — Jan 2016</small>
              </div>
            </div>

            <ul className="list-disc pl-3">
              <li>
                Maintained Intranet applications (PHP/Laravel) and WordPress
                websites for agency clients
              </li>
              <li>Maintained iOS/Android apps built with Phonegap</li>
            </ul>
          </div>

          <div className="mt-6 sm:px-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-500">
                  Ministry of Social Security
                </h3>
                <small>Brasilia, Brazil</small>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <b className="font-semibold">Full Stack Developer</b>
                <small className="shrink-0">Sep 2011 — Aug 2015</small>
              </div>
            </div>

            <ul className="list-disc pl-3">
              <li>
                Developed and maintained new and legacy Intranet applications
                used by thousands of civil servants in Brazil between 2011 -
                2018
              </li>
              <li>
                Developed the Ministry of Social Security website using
                WordPress (still in use by millions of citizens)
              </li>
              <li>
                Created one of the first iOS and Android apps in the public
                sector using Cordova
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap">
        <aside className="shrink-0 py-6 print:w-2/12 sm:w-2/12">
          <h2 className="text-xl text-gray-500">Education</h2>
        </aside>

        <section className="w-full border-t border-gray-400 py-6 text-sm print:w-10/12 sm:w-10/12">
          <div className="mb-6 sm:px-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-500">
                  Deque University
                </h3>
                <small className="shrink-0">Online</small>
              </div>
              <div className="flex items-center justify-between">
                <span>Web Accessibility Curriculum 2.0</span>
                <small className="shrink-0">2020</small>
              </div>
            </div>
          </div>

          <div className="mb-6 sm:px-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-500">
                  Langara College
                </h3>
                <small className="shrink-0">Vancouver</small>
              </div>
              <div className="flex items-center justify-between">
                <span>
                  Web and Mobile App Development / Post-Degree Diploma
                </span>
                <small className="shrink-0">2015 — 2016</small>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:px-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-500">
                  Pitagoras University
                </h3>
                <small className="shrink-0">Brazil</small>
              </div>
              <div className="flex items-center justify-between">
                <span>Bachelor of Information Systems</span>
                <small className="shrink-0">2006 — 2011</small>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap">
        <aside className="shrink-0 py-6 print:w-2/12 sm:w-2/12">
          <h2 className="text-xl text-gray-500">Other</h2>
        </aside>

        <section className="w-full border-t border-gray-400 py-6 text-sm print:w-10/12 sm:w-10/12">
          <div className="mb-6 sm:px-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-500">
                  Ladies Learning Code
                </h3>
                <small>Vancouver</small>
              </div>
              <div className="flex items-center justify-between">
                <span>
                  Instructed HTML & CSS for Beginners and WordPress for
                  Beginners as a volunteer
                </span>
                <small className="ml-3 shrink-0">2017 — 2019</small>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:px-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-500">
                  Speaker
                </h3>
                <small>Vancouver</small>
              </div>
              <div className="flex items-center justify-between">
                <span>
                  Spoke in different meetups and conferences. Slides in{' '}
                  <a
                    className="text-blue-500 underline"
                    href="https://leonardofaria.net/talks"
                  >
                    https://leonardofaria.net/talks
                  </a>
                </span>
                <small className="shrink-0">2015 — Present</small>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap">
        <aside className="shrink-0 py-6 print:w-2/12 sm:w-2/12">
          <h2 className="text-xl text-gray-500">Technical Skills</h2>
        </aside>

        <section className="w-full border-t border-gray-400 py-6 text-sm print:w-10/12 sm:w-10/12">
          <div className="mb-6 sm:px-2">
            <ul className="list-disc pl-3">
              <li>
                <span className="font-semibold text-gray-500">Front end:</span>{' '}
                React, TypeScript, Next.js, Chakra UI, Tailwind CSS, Ember.js,
                Storybook, axe, Jest
              </li>
              <li>
                <span className="font-semibold text-gray-500">Back end:</span>{' '}
                Node.js, Ruby on Rails, PHP, Posgres, MySQL
              </li>
              <li>
                <span className="font-semibold text-gray-500">
                  Other Technologies:
                </span>{' '}
                Lighthouse, Supabase, graphQL, REST, WordPress
              </li>
              <li>
                <span className="font-semibold text-gray-500">Tools:</span>{' '}
                Figma, GitHub, GitHub Actions, Circle CI, Datadog, Grafana
              </li>
              <li>
                <span className="font-semibold text-gray-500">
                  Infrastructure:
                </span>{' '}
                AWS, Vercel, Netlify, Fastly
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
