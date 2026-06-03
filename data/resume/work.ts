export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights: string[];
}

const work: Position[] = [
  {
    name: 'Lottery.com',
    position: 'Software Engineer (Data & Analytics)',
    url: 'http://lottery.com',
    startDate: '2022-04-01',
    highlights: [
      'Collaborated with the VP of Data & Insights to design and execute tracking and reporting strategies across all products.',
      'Led integration and implementation efforts, providing expert guidance on cross-platform metrics, reporting, and logging systems\' architecture.',
      'Orchestrated data integrations and ETL pipelines into multiple BI tools, including Google Analytics, BigQuery, and Mixpanel.',
      'Worked with the product team to establish appropriate metrics and tracking plans, documenting all work and drafting comprehensive technical specifications.',
      'Ensured compliance with industry-leading analytics and logging best practices, consistently setting high standards for the team.',
    ],
  },
  {
    name: 'Eybl Digital',
    position: 'Founder',
    url: 'http://eybldigital.com',
    startDate: '2022-02-01',
    highlights: [
      'Developed and maintained full-stack web applications for clients using Node.js, TypeScript, React and other relevant technologies.',
      'Collaborated with clients to gather requirements and create technical specifications for web projects, ensuring a thorough understanding of their needs and goals.',
      'Designed and implemented complex APIs and web services, including integrations with third-party services and databases.',
      'Maintained and updated existing web applications, implementing new features and improvements to meet evolving business needs.',
    ],
  },
  {
    name: 'Simply Hemp Wellness',
    position: 'Lead Web Developer/IT Systems Administrator',
    url: 'https://simplyhempwellness.com',
    startDate: '2019-01-01',
    endDate: '2022-04-01',
    highlights: [
      'Designed and developed e-commerce website using the latest web technologies and frameworks.',
      'Managed and maintained product catalog, ensuring accurate and up-to-date product information, pricing, and availability.',
      'Implemented advanced analytics and tracking solutions, providing insights into website traffic, user behavior, and other key metrics.',
      'Executed digital marketing campaigns, including email marketing, search engine optimization, and pay-per- click advertising, to drive traffic, generate leads, and increase online sales.',
      'Managed and maintained the IT infrastructure, including desktops, laptops, servers, and network equipment.',
    ],
  },
  {
    name: 'Focus Brands',
    position: 'Manager / Lead Supervisor',
    url: '',
    startDate: '2008-06-01',
    endDate: '2018-12-01',
    highlights: [
      'Oversaw the day-to-day operations of the customer service team, managing and directing all aspects of the customer service experience, including POS transactions.',
      'Created and maintained employee schedules, providing optimal coverage during peak hours and balancing staff needs with business demands.',
      'Analyzed and reported on key POS-related metrics, such as sales volume, refunds, and inventory levels, identifying areas for improvement.',
      'Completed administrative tasks related to customer service and POS transactions, such as record-keeping, budgeting, and forecasting, ensuring accuracy and timely completion.',
    ],
  },
];

export default work;
