type Detail = {
  title: string;
  period: string;
  description: string[] | string;
};

export type SectionData = {
  name: string;
  location: string;
  details: string | Detail[];
};

export const EXPERIENCE: SectionData[] = [
  {
    name: 'Pistachio',
    location: 'San Francisco / Remote',
    details: [
      {
        title: 'Founding Software Engineer',
        period: 'May 2024 — Present',
        description: [
          'As the first hire, worked with the CEO and customers to build a Point of Sale for furniture stores from 0 to 1, processing $20M+ in GMV',
          'Worked on every part of the software: back end (TypeScript), front end (Next.js), database (PostgreSQL), infrastructure (CI/CD, observability), integrations (taxes, payment processing, and others)',
          'Partnered with the University of San Francisco to mentor and work with their students in AI-related projects',
          'Onboarded customers analyzing their data migration needs and ensuring a smooth transition to the product',
        ],
      },
    ],
  },
  {
    name: 'Lattice',
    location: 'San Francisco / Remote',
    details: [
      {
        title: 'Staff Software Engineer',
        period: 'Apr 2022 — Feb 2024',
        description: [
          'Worked on different 0 to 1 projects from a new company initiative with TypeScript and React, iterating and adapting the product according to requirements/customer needs',
          'Improved testing by creating documentation, guidelines and building a CI tool to track test coverage across different teams',
          'Enhanced developer experience tools and documentation, making engineers more productive',
          'Advocated for accessibility by leveraging automated tests to create a product usable for all customers',
        ],
      },
    ],
  },
  {
    name: 'Thinkific',
    location: 'Vancouver',
    details: [
      {
        title: 'Staff Software Engineer',
        period: 'Sep 2020 — Mar 2022',
        description: [
          'Improved Front-end performance by: introducing Lighthouse testing in CI; refactoring the product to support webp and working on different projects to improve page load and user experience',
          'Worked closely with teams to demonstrate the feasibility of technical solutions in upcoming projects, bridging product and engineering',
          'Partnered with the Chief Architect defining technical vision and technical strategy',
          'Supported the Design System solution (used by different React and Ruby on Rails applications), especially in CI and accessibility tasks',
        ],
      },
      {
        title: 'Engineering Manager',
        period: 'Oct 2017 — Sep 2020',
        description: [
          'Led a team of up to 7 back-end/front-end engineers working on projects for different customer personas (course creators/students)',
          'Provided mentorship, collected and delivered feedback; set goals for engineer reports and conducted performance reviews',
          'Owned projects end-to-end, including the redesign of the product, React adoption, and the creation of the Thinkific Design System (2018 - present)',
          'Grew the team by proactively sourcing ICs. Successfully recruited 4 engineers by partnering with the HR department and working on creative ways to find talent',
          'Led different initiatives in R&D (All-hands, onboarding of new members, hackathons) while the company scaled from 50 to 300 employees',
        ],
      },
      {
        title: 'Senior Software Engineer',
        period: 'Nov 2016 — Oct 2017',
        description:
          'Worked on different customer-facing projects mostly focusing on front-end and using Ruby on Rails and Ember.js',
      },
    ],
  },
  {
    name: 'Dynamic Leap Technology',
    location: 'Vancouver',
    details: [
      {
        title: 'Full Stack Developer (contract work)',
        period: 'Feb 2016 — Nov 2016',
        description: [
          'Developed websites using WordPress for Dynamic Leap and its clients',
          'Built MVPs for clients using Ember.js and Ruby on Rails APIs',
        ],
      },
    ],
  },
  {
    name: '604media',
    location: 'Vancouver',
    details: [
      {
        title: 'Full Stack Developer (contract work)',
        period: 'Oct 2015 — Jan 2016',
        description: [
          'Maintained Intranet applications (PHP/Laravel) and WordPress websites for agency clients',
          'Maintained iOS/Android apps built with Phonegap',
        ],
      },
    ],
  },
  {
    name: 'Ministry of Social Security',
    location: 'Brasilia, Brazil',
    details: [
      {
        title: 'Full Stack Developer',
        period: 'Sep 2011 — Aug 2015',
        description: [
          'Developed and maintained new and legacy Intranet applications used by thousands of civil servants in Brazil between 2011 - 2018',
          'Developed the Ministry of Social Security website using WordPress (still in use by millions of citizens)',
          'Created one of the first iOS and Android apps in the public sector using Cordova',
        ],
      },
    ],
  },
];

export const EDUCATION: SectionData[] = [
  {
    name: 'Deque University',
    location: 'Online',
    details: [
      {
        title: '',
        period: '2020',
        description: 'Web Accessibility Curriculum 2.0',
      },
    ],
  },
  {
    name: 'Langara College',
    location: 'Vancouver',
    details: [
      {
        title: '',
        period: '2015 — 2016',
        description: 'Web and Mobile App Development / Post-Degree Diploma',
      },
    ],
  },
  {
    name: 'Pitagoras University',
    location: 'Brazil',
    details: [
      {
        title: '',
        period: '2006 — 2011',
        description: 'Bachelor of Information Systems',
      },
    ],
  },
];

export const OTHER: SectionData[] = [
  {
    name: 'Ladies Learning Code',
    location: 'Vancouver',
    details: [
      {
        title: '',
        period: '2017 — 2019',
        description:
          'Instructed HTML & CSS for Beginners and WordPress for Beginners as a volunteer',
      },
    ],
  },
  {
    name: 'Speaker',
    location: 'Vancouver',
    details: [
      {
        title: '',
        period: '2015 — Present',
        description: `
          <span>
            Spoke in different meetups and conferences. Slides in{' '}
            <a
              className="text-blue-500 underline"
              href="https://leonardofaria.net/talks"
            >
              https://leonardofaria.net/talks
            </a>
          </span>
        `,
      },
    ],
  },
  {
    name: 'Open-source contributor',
    location: 'Vancouver',
    details: [
      {
        title: '',
        period: '2015 — Present',
        description:
          'Open-sourced NPM packages, WordPress, Hugo and Next.js themes',
      },
    ],
  },
];
