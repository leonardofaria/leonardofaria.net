// Ready to print in Chrome Canary

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

export default function Resume() {
  return (
    <main className="mx-auto my-8 flex max-w-[744px] flex-col gap-4 text-gray-700 print:my-0 print:max-w-full">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl text-gray-500">Leonardo Faria</h1>

        <nav className="text-sm">
          <ul className="list-none">
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

      <section className="flex w-full flex-col gap-3 text-sm">
        <SectionTitle title="Experience" />

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-500">Lattice</h3>
            <small>San Francisco / Remote</small>
          </div>

          <div className="flex items-center justify-between">
            <b className="font-semibold">Staff Software Engineer</b>
            <small className="shrink-0">Apr 2022 — Present</small>
          </div>

          <ul className="list-none">
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Worked on different 0 to 1 projects from a new company initiative
              with TypeScript and React, iterating and adapting the product
              according to requirements/customer needs
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Improved testing by creating documentation, guidelines and
              building a CI tool to track test coverage across different teams
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Enhanced developer experience tools and documentation, making
              engineers more productive
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Advocated for accessibility by leveraging automated tests to
              create a product usable for all customers
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-500">Thinkific</h3>
            <small>Vancouver</small>
          </div>

          <div className="flex items-center justify-between">
            <b className="font-semibold">Technical Architect - Front-end</b>
            <small className="shrink-0">Sep 2020 — Mar 2022</small>
          </div>

          <ul className="list-none">
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Improved Front-end performance by: introducing Lighthouse testing
              in CI; refactoring the product to support webp and working on
              different projects to improve page load and user experience
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Worked closely with teams to demonstrate the feasibility of
              technical solutions in upcoming projects, bridging product and
              engineering
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Partnered with the Chief Architect defining technical vision and
              technical strategy
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Supported the Design System solution (used by different React and
              Ruby on Rails applications), especially in CI and accessibility
              tasks
            </li>
          </ul>

          <div className="mt-2 flex items-center justify-between">
            <b className="font-semibold">Engineering Team Lead</b>
            <small className="shrink-0">Oct 2017 — Sep 2020</small>
          </div>

          <ul className="list-none">
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Led a team of up to 7 back-end/front-end engineers working on
              projects for different customer personas (course
              creators/students)
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Provided mentorship, collected and delivered feedback; set goals
              for engineer reports and conducted performance reviews
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Owned projects end-to-end, including the redesign of the product,
              React adoption, and the creation of the Thinkific Design System
              (2018 - present)
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Grew the team by proactively sourcing ICs. Successfully recruited
              4 engineers by partnering with the HR department and working on
              creative ways to find talent
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Led different initiatives in R&D (All-hands, onboarding of new
              members, hackathons) while the company scaled from 50 to 300
              employees
            </li>
          </ul>

          <div className="mt-2 flex items-center justify-between">
            <b className="font-semibold">Senior Software Engineer</b>
            <small className="shrink-0">Nov 2016 — Oct 2017</small>
          </div>

          <p>
            Worked on different customer-facing projects mostly focusing on
            front-end and using Ruby on Rails and Ember.js
          </p>
        </div>

        <div className="print:mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-500">
              Dynamic Leap Technology
            </h3>
            <small>Vancouver</small>
          </div>

          <div className="flex items-center justify-between">
            <b className="font-semibold">
              Full Stack Developer (contract work)
            </b>
            <small className="shrink-0">Feb 2016 — Nov 2016</small>
          </div>

          <ul className="list-none">
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Developed websites using WordPress for Dynamic Leap and its
              clients
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Built MVPs for clients using Ember.js and Ruby on Rails APIs.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-500">604media</h3>
            <small>Vancouver</small>
          </div>

          <div className="flex items-center justify-between">
            <b className="font-semibold">
              Full Stack Developer (contract work)
            </b>
            <small className="shrink-0">Oct 2015 — Jan 2016</small>
          </div>

          <ul className="list-none">
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Maintained Intranet applications (PHP/Laravel) and WordPress
              websites for agency clients
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Maintained iOS/Android apps built with Phonegap
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-500">
              Ministry of Social Security
            </h3>
            <small>Brasilia, Brazil</small>
          </div>
          <div className="flex items-center justify-between">
            <b className="font-semibold">Full Stack Developer</b>
            <small className="shrink-0">Sep 2011 — Aug 2015</small>
          </div>

          <ul className="list-none">
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Developed and maintained new and legacy Intranet applications used
              by thousands of civil servants in Brazil between 2011 - 2018
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Developed the Ministry of Social Security website using WordPress
              (still in use by millions of citizens)
            </li>
            <li className="before:mr-2 before:text-gray-500 before:content-['•']">
              Created one of the first iOS and Android apps in the public sector
              using Cordova
            </li>
          </ul>
        </div>
      </section>

      <section className="flex w-full flex-col gap-3 text-sm">
        <SectionTitle title="Education" />

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

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-500">
              Langara College
            </h3>
            <small className="shrink-0">Vancouver</small>
          </div>

          <div className="flex items-center justify-between">
            <span>Web and Mobile App Development / Post-Degree Diploma</span>
            <small className="shrink-0">2015 — 2016</small>
          </div>
        </div>

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
      </section>

      <section className="flex w-full flex-col gap-3 text-sm">
        <SectionTitle title="Other" />

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-500">
              Ladies Learning Code
            </h3>
            <small>Vancouver</small>
          </div>

          <div className="flex items-center justify-between">
            <span>
              Instructed HTML & CSS for Beginners and WordPress for Beginners as
              a volunteer
            </span>
            <small className="ml-3 shrink-0">2017 — 2019</small>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-500">Speaker</h3>
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

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-500">
              Open-source contributor
            </h3>
            <small>Vancouver</small>
          </div>

          <div className="flex items-center justify-between">
            <span>
              Open-sourced NPM packages, WordPress, Hugo and Next.js themes
            </span>
            <small className="shrink-0">2015 — Present</small>
          </div>
        </div>
      </section>

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
