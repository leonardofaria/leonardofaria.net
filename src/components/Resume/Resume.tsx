export default function Resume() {
  return (
    <div className="my-[.5in] mx-auto max-w-[7.1in] text-gray-700">
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
            </a>
            <a
              className="ml-3 text-blue-500 underline"
              href="https://leonardofaria.net"
            >
              <small>https://leonardofaria.net</small>
            </a>
          </p>

          <p className="mb-3 text-lg">
            Software Developer for the past 15 years with experience in design,
            architecture, development, and delivery of custom websites and
            applications.
          </p>

          <p className="text-sm">
            Focus on front-end technologies.
            <br />
            Extensive hands-on experience in Ruby on Rails and JavaScript.
            <br />
            Experience in a leadership position leading up to six developers.
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
              <small className="shrink-0">Apr 2022 - Present</small>
            </div>

            <p>
              Responsible for projects in the Compensation domain. Duties
              include:
            </p>

            <ul className="mt-2 list-disc pl-[18px]">
              <li>
                Owning projects end-to-end with the collaboration of PMs and
                designers
              </li>
              <li>
                Finding technical areas for improvement and influencing multiple
                teams
              </li>
              <li>
                Mentoring developers and setting best practices for the team
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
              <small className="shrink-0">Sep 2020 - Mar 2022</small>
            </div>

            <p>
              Responsible for defining the technical vision of front-end
              technologies. Duties include:
            </p>

            <ul className="mt-2 list-disc pl-[18px]">
              <li>
                Providing technical leadership and feedback on solutions created
                by product teams
              </li>
              <li>
                Creating prototypes of implementations that demonstrate the
                feasibility of technical solutions
              </li>
              <li>
                Working closely with the Design System team to assist in
                developing the component library
              </li>
              <li>
                Mentoring developers in fostering a comprehensive understanding
                of the existing architecture
              </li>
            </ul>

            <div className="mt-3 mb-2 flex items-center justify-between">
              <b className="font-semibold">Engineering Team Lead</b>
              <small className="shrink-0">Oct 2017 - Sep 2020</small>
            </div>

            <p>
              Responsible for timely software delivery and the professional
              development of team members. Duties include:
            </p>

            <ul className="mt-2 list-disc pl-[18px]">
              <li>
                Owning projects end-to-end, including the redesign of part of
                the Thinkific platform and the creation of Thinkific Design
                System
              </li>
              <li>Facilitating 1-1s and completing performance reviews</li>
              <li>Mentoring developers</li>
              <li>Assisting in recruiting and hiring of engineers</li>
            </ul>

            <div className="mt-3 mb-2 flex items-center justify-between">
              <b className="font-semibold">Software Engineer</b>
              <small className="shrink-0">Nov 2016 - Oct 2017</small>
            </div>

            <p>
              Working in software development using Ruby on Rails, Ember.js and
              React to deliver value to the Thinkific product
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
              <b className="font-semibold">Full Stack Developer</b>
              <small className="shrink-0">Feb 2016 - Nov 2016</small>
            </div>

            <p>
              Developing websites using WordPress and Single Page Applications
              with Ember for clients of Dynamic Lead Technology
            </p>
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
                <b className="font-semibold">Full Stack Developer</b>
                <small className="shrink-0">Oct 2015 - Jan 2016</small>
              </div>
            </div>

            <p>
              Working in the development of Intranet applications using PHP
              (Laravel and WordPress) and iOS/Android apps with Phonegap
            </p>
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
                <small className="shrink-0">Sep 2011 - Aug 2015</small>
              </div>
            </div>

            <ul className="list-disc pl-[18px]">
              <li>
                Developing and maintaining new and legacy Intranet applications
                used by thousands of civil servants in Brazil
              </li>
              <li>
                Developing of new central Ministry of Social Security website
                using WordPress (still in use by millions of citizens)
              </li>
              <li>
                Creating iOS and Android apps using Phonegap - one of the first
                mobile apps of the public sector
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
                <small className="shrink-0">2006 - 2015</small>
              </div>
            </div>

            <ul className="list-disc pl-[18px]">
              <li>
                Development of applications/websites using several languages
                including Ruby, PHP, and Flash
              </li>
              <li>
                Mobile development (iOS and Android) using Ionic (Writing for
                IELTS and TOEFL)
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
                  Web and Mobile App Development
                  <br />
                  Post-Degree Diploma
                </span>
                <small className="shrink-0">2015 - 2016</small>
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
                <small className="shrink-0">2006 - 2011</small>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="hidden flex-wrap">
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
                  Instructing workshops including HTML & CSS for Beginners and
                  WordPress for Beginners as a volunteer
                </span>
                <small className="shrink-0">2017 - 2019</small>
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
                  Speaker in different meetups in town. Slides in{' '}
                  <a
                    className="text-blue-500 underline"
                    href="https://leonardofaria.net/talks"
                  >
                    https://leonardofaria.net/talks
                  </a>
                </span>
                <small className="shrink-0">2015 - 2019</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
