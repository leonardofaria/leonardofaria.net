export default function Resume() {
  return (
    <div className="my-8 mx-auto max-w-[800px] text-gray-700 print:my-0 print:max-w-full">
      <header className="flex flex-wrap">
        <aside className="print:w-1/4 sm:w-1/4">
          <h1 className="m-0 text-4xl text-gray-500">Leonardo Faria</h1>
        </aside>

        <div className="pb-5 text-sm print:w-3/4 sm:w-3/4 sm:px-2">
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

          <p className="mb-3 text-lg">
            15+ years of experience in design, architecture, development, and
            delivery of SaaS products and websites
          </p>

          <p className="mb-3 text-base">
            Seeking engineering roles in a product-driven organization. With my
            work, I bring creative and customer-focused solutions with attention
            to detail and a pragmatic approach. Previously in a manager path, I
            have experience delivering work that matters for customers and
            growing products and people
          </p>

          <p className="text-sm">
            <span className="font-semibold">Interests:</span> Front-end,
            technical leadership, architecture, mentorship, Continuous
            Integration, Design System, Developer Experience
          </p>
        </div>
      </header>

      <div className="flex flex-wrap">
        <aside className="shrink-0 py-6 print:w-1/4 sm:w-1/4">
          <h2 className="text-2xl text-gray-500">Experience</h2>
        </aside>

        <section className="w-full border-t border-gray-400 py-6 text-sm print:w-3/4 sm:w-3/4">
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
                Led projects in a new 0 to 1 company initiative with TypeScript
                and React
              </li>
              <li>
                Improved testing by creating documentation, guidelines and
                building a CI tool to track test coverage across different teams
              </li>
              <li>Improved developer experience tools and documentation</li>
              <li>Advocated for accessibility by leveraging automated tests</li>
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

            <div className="mt-3 mb-2 flex items-center justify-between">
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

            <div className="mt-3 mb-2 flex items-center justify-between">
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

          <div className="my-6 sm:px-2">
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

          <div className="mt-6 sm:px-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-500">
                  Freelance
                </h3>
                <small>Brazil</small>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <b className="font-semibold">Full Stack Developer</b>
                <small className="shrink-0">2006 — 2015</small>
              </div>
            </div>

            <ul className="list-disc pl-3">
              <li>
                Built custom-made Ruby on Rails applications for B2B (fast
                fashion companies)
              </li>
              <li>
                Created WordPress websites for 10+ clients partnering with a
                designer and using PHP & jQuery
              </li>
              <li>
                Built &quot;Writing for IELTS and TOEFL&quot; (app for
                iOS/Android) using Ionic
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap">
        <aside className="shrink-0 py-6 print:w-1/4 sm:w-1/4">
          <h2 className="text-2xl text-gray-500">Education</h2>
        </aside>

        <section className="w-full border-t border-gray-400 py-6 text-sm print:w-3/4 sm:w-3/4">
          <div className="mb-6 hidden sm:px-2">
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
        <aside className="shrink-0 py-6 print:w-1/4 sm:w-1/4">
          <h2 className="text-2xl text-gray-500">Other</h2>
        </aside>

        <section className="w-full border-t border-gray-400 py-6 text-sm print:w-3/4 sm:w-3/4">
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
                  Instructed workshops including HTML & CSS for Beginners and
                  WordPress for Beginners as a volunteer
                </span>
                <small className="ml-3 shrink-0">2017 — 2019</small>
              </div>
            </div>
          </div>

          <div className="my-6 sm:px-2">
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
                <small className="shrink-0">2015 — 2019</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
