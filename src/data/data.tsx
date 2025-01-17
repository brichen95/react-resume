import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
// import heroImage from '../images/header-background-old.webp';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Welcome!',
  description: "Brian Chen's site",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  nameReal: `Hey! I'm Brian Chen`,
  nameTroll: `Howdy! It's Brian Chen`,
  descriptionReal: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a NYC based <strong className="text-stone-100">Production Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Two Sigma</strong> supporting trading systems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training <strong className="text-stone-100">Muay Thai</strong>, fiddling
        in my <strong className="text-stone-100">homelab</strong>, jamming on my{' '}
        <strong className="text-stone-100">guitar</strong>, or binging tons of{' '}
        <strong className="text-stone-100">anime</strong>. I also have a <strong className="text-stone-100">cat</strong>
        .
      </p>
    </>
  ),
  descriptionTroll: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a NYC based <strong className="text-stone-100">mega weeb</strong>, currently wondering which anime or show
        to <strong className="text-stone-100">binge</strong> next.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training <strong className="text-stone-100">Muay Thai</strong>, fiddling
        in my <strong className="text-stone-100">homelab</strong>, jamming on my{' '}
        <strong className="text-stone-100">guitar</strong>, or chugging tons of{' '}
        <strong className="text-stone-100">beer</strong>. I also have a <strong className="text-stone-100">cat</strong>.
        His name is <strong className="text-stone-100">Smokey</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `...to my little corner of the internet!`,
  aboutItems: [
    {label: 'Location', text: 'New York NY', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Anime, Muay Thai, Guitar, Homelab', Icon: SparklesIcon},
    {label: 'Study', text: 'Stony Brook University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Two Sigma Securities', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 1,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2013 - May 2017',
    location: 'Stony Brook, NY',
    title: 'Stony Brook University',
    content: <p className="text-sm">B.E. Computer Engineering. Minor Business. GPA: 3.59/4.00</p>,
  },
  {
    date: 'September 2007 - June 2013',
    location: 'New York, NY',
    title: 'Hunter College High School',
    content: <p className="text-sm">GPA: 92.90/100</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2023 – Present',
    location: 'Two Sigma Securities',
    title: 'Production Engineer',
    content: (
      <p className="text-sm">
        At TSS, I support, maintain, and create automations/monitoring for automated trading systems.
      </p>
    ),
  },
  {
    date: 'May 2021 – October 2022',
    location: 'NYDIG',
    title: 'Infrastructure Engineer',
    content: (
      <p className="text-sm">
        At NYDIG, I created and deployed scripts and applications to automate various back office functions.
      </p>
    ),
  },
  {
    date: 'October 2019 – May 2021',
    location: 'D. E. Shaw & Co., L.P.',
    title: 'Systems Administrator',
    content: (
      <p className="text-sm">
        At D.E. Shaw, I created various automations and provided front-line technical support for a global user base in
        Windows and Linux.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  real: [
    {
      name: 'Coworker',
      text: "Excellent teammate, I don't think I've seen him miss a deadline.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Former manager',
      text: 'Two years later we still use the scripts he wrote.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Current manager',
      text: 'It is impressive how he works across such a breadth of technologies.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
  troll: [
    {
      name: 'Coworker',
      text: 'I was sober for 7 years until I met this man.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Former manager',
      text: 'His code was so bad it actually decreased team productivity for over two quarters.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Current manager',
      text: 'Honestly I am not sure how or why we hired him.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Maybe you think I can do things. Maybe you realized the konami code does things on this website. Maybe you just want to a new friend. Hit me up!',
  items: [
    {
      type: ContactType.Email,
      text: 'brichen95@gmail.com',
      href: 'mailto:brichen95@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'New York, NY',
      href: 'https://goo.gl/maps/97xdeg2uY5h8QgY48',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@hunterboybrian',
    //   href: 'https://www.instagram.com/hunterboybrian/',
    // },
    {
      type: ContactType.Github,
      text: 'brichen95',
      href: 'https://github.com/brichen95',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/brichen95'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/brichen/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
