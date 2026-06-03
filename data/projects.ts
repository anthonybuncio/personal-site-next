export interface Project {
  title: string;
  subtitle: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Street Lens - Cloud sharing dashcam video platform',
    subtitle: 'Cloud sharing dashcam video platform',
    link: 'https://www.streetlens.pro/',
    image: '/images/projects/dashcam.jpg',
    date: '2023-11-30',
    desc:
      'Stay protected and connected with our Dashcam cloud sharing platform that allows you to share your footage and critical accident information with ease. '
      + 'Our platform makes it simple to upload and share your dashcam footage and additional details about an accident, ensuring that you have a clear record of what happened. '
      + 'With our platform, you can feel confident knowing that youʼre prepared in case of an accident.',
  },
  {
    title: 'Reddit Rescuer',
    subtitle: 'Reddit media downloader',
    link: 'https://github.com/anthonybuncio/reddit-rescuer',
    image: '/images/projects/reddit.png',
    date: '2023-09-30',
    desc:
      'Reddit Rescuer is a media downloader for Reddit that allows users to easily download their saved image and video posts from the platform. This tool is designed to help you securely backup your favorite media content for offline viewing or archiving purposes.',
  },
  {
    title: 'Play-i AI Generated Playlist',
    subtitle: 'AI Generated Playlist',
    link: 'https://chatgpt-dj.vercel.app/',
    image: '/images/projects/gptplaylist.jpg',
    date: '2023-03-30',
    desc:
      'Elevate your music experience with our AI playlist generator that curates personalized playlists based on your preferred genre, year, mood, or activity. '
      + 'Our advanced algorithms analyze your music preferences and create playlists that perfectly match your current mood or activity. '
      + 'Whether youʼre working out, relaxing, or in need of a pick-me-up, our playlist generator has got you covered.',
  },
  {
    title: 'Ready, Set, STEM - 2022 NASA Hackathon',
    subtitle: '2022 NASA Hackathon Submission',
    link: 'https://jsc-hackathon.vercel.app/',
    image: '/images/projects/jsc.jpg',
    date: '2022-01-30',
    desc:
      'Explore the wonders of space and ignite a passion for STEM with our educational app, '
      + 'designed to teach children about NASA careers and aerospace engineering through engaging activities and challenges. '
      + 'Inspired to improve accessibility and inclusivity at NASA, '
      + 'our team created a three-step strategy that will increase the number of children entering into the STEM pipeline using subjective teaching methodologies.',
  },
  {
    title: 'Collab OS',
    subtitle: 'Github Collaboration iOS App for open source Github projects.',
    image: '/images/projects/collabos.jpg',
    date: '2021-08-24',
    desc:
      'Built to socialize open source repos. CollabOS is a tinder-like swiping app to find others '
      + 'who are looking to contribute to Github open source projects. I noticed how difficult it was to find '
      + 'smaller community projects, along with developers who share the same stack knowledge so I built CollabOS for '
      + 'developers of any level to gain collaboration experience.',
  },
  {
    title: 'Simply Hemp Wellness — eCommerce',
    subtitle: 'Elevate Your Wellness, Simply Hemp CBD Style!',
    link: 'https://www.simplyhempwellness.com/',
    image: '/images/projects/simplyhemp.jpg',
    date: '2020-06-24',
    desc:
      'Unwind, rejuvenate, and embrace a healthier lifestyle with our Stafford-based CBD wellness shop. '
      + 'Established in 2018, Simply Hemp has been providing the best CBD products for our customers. '
      + 'Your journey to well-being begins with a click as you explore our virtual shelves filled with premium '
      + 'CBD products. From stress-relieving gummies to restorative oils, our ecommerce website offers a seamless shopping experience. ',
  },
  {
    title: 'Electron NBA',
    subtitle: 'NBA Scoreboard App for your menu bar.',
    link: 'https://www.github.com/anthonybuncio/electron-nba',
    image: '/images/projects/fourthqtr.jpg',
    date: '2019-03-28',
    desc:
      'Stay up-to-date on NBA scores in real-time with our Electron JS app that displays live scores in your macOS menu bar, keeping you informed without interrupting your workflow.'
      + ' Scores are updated every 30 seconds and includes dark mode. Future updates include adding mutiple sports.',
  },
  {
    title: 'DevLink',
    subtitle: 'A social network for developers.',
    link: 'https://www.devlink-pro.herokuapp.com',
    image: '/images/projects/devlink.jpg',
    date: '2019-02-15',
    desc:
      'A social network platform specifically designed for software engineers and web developers to connect, collaborate and share ideas with each other. '
      + 'The platform features user authentication for security and allows users to send messages to one another. '
      + 'This personalized network will provide a space where users can interact with like-minded individuals and exchange valuable knowledge and insights within their field of expertise.',
  },
];

export default data;
