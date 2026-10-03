/**
 * ============================================================
 *  PROJECTS — edit, add or remove projects here
 * ============================================================
 *  Each object renders one <ProjectCard />. To add a project:
 *    1. Put a screenshot in src/assets/images/projects/
 *       (jpg, png, webp or svg — 16:10 ratio looks best)
 *    2. Import it below
 *    3. Add a new object to the `projects` array
 *
 *  liveUrl / githubUrl / docUrl: set to '' (or leave out) to hide that button.
 *  badge: optional small label above the title (e.g. 'Capstone Project').
 */
import guidanceImg from '../assets/images/projects/guidance-system.svg'
import portfolioImg from '../assets/images/projects/portfolio.svg'
import hotelImg from '../assets/images/projects/hotel-system.svg'
import smartCatchImg from '../assets/images/projects/smart-catch.svg'

export const projects = [
  {
    id: 'guidance-referral-system',
    title: 'Guidance & Referral Management System',
    badge: 'Capstone Project · Team',
    description:
      'A guidance system for Calapan City public high schools with digital referral forms, online counseling appointments with email alerts, and case analytics.',
    image: guidanceImg,
    tags: ['PHP', 'MySQL', 'JavaScript', 'Chart.js'],
    liveUrl: '',
    githubUrl: 'https://github.com/Renieeer/guidance_reconselation',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description:
      'This website — a responsive portfolio with smooth section navigation, subtle animations and a built-in certificate viewer.',
    image: portfolioImg,
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveUrl: 'https://sham-ii.github.io/my-portfolio/',
    githubUrl: 'https://github.com/sham-ii/my-portfolio',
  },
  {
    id: 'checkinn-hotel-management',
    title: 'CheckInn: Hotel Management System',
    badge: 'Finals Project · School',
    description:
      'Guests book rooms online while admins manage rooms, bookings and guests from a dashboard, with statuses updating automatically on check-in and check-out.',
    image: hotelImg,
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    liveUrl: '',
    githubUrl: 'https://github.com/sham-ii/sapeda-trishamaeangel_final-webapp',
  },
  {
    id: 'smart-catch-math-game',
    title: 'Smart Catch: Math Game',
    badge: 'Educational Game',
    description:
      'A 2D game where players move a catcher to grab the right answer to falling math questions, with scoring, a leaderboard and sound effects.',
    image: smartCatchImg,
    tags: ['Visual Basic', 'Visual Studio', 'Database', '2D Game'],
    liveUrl: '',
    githubUrl: '',
    // Game Design Document, served from public/docs/
    docUrl: `${import.meta.env.BASE_URL}docs/smart-catch-gdd.pdf`,
  },
]
