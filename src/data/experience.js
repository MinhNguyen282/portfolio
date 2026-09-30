// Full-time start date (Vietnam time). The card shows "Upcoming Role" before this date
// and switches to "Current Role" on its own afterwards, with no redeploy needed.
const AXON_SWE1_START = new Date('2026-10-05T00:00:00+07:00');
export const hasStartedSwe1 = Date.now() >= AXON_SWE1_START.getTime();

export const experience = [
  {
    id: 4,
    jobTitle: 'Software Engineer I',
    company: 'Axon',
    companyLogo: '/axon-logo.jpeg',
    companyUrl: 'https://www.axon.com',
    location: 'Ho Chi Minh City, Vietnam',
    duration: 'Oct 5, 2026 - Present',
    isCurrent: hasStartedSwe1,
    isUpcoming: !hasStartedSwe1,
    description: 'Returning to Axon full-time as a Software Engineer after completing the internship.',
    technologies: [],
    details: [],
  },
  {
    id: 3,
    jobTitle: 'Software Engineer Intern',
    company: 'Axon',
    companyLogo: '/axon-logo.jpeg',
    companyUrl: 'https://www.axon.com',
    location: 'Ho Chi Minh City, Vietnam',
    duration: 'May 11, 2026 - Aug 7, 2026 (13 weeks)',
    isCurrent: false,
    isUpcoming: false,
    description: 'Built OpsPilot, a Slack chatbot that helps developers reduce on-call effort by investigating alerts and generating comprehensive incident reports.',
    technologies: ['Slack', 'Splunk', 'Grafana', 'Feature Flags'],
    details: [
      'Implemented OpsPilot to read alert information, retrieve related runbooks, handbooks, and product knowledge, query Splunk logs, inspect Grafana dashboards, and summarize findings for developers.',
      'Handled feature flag rollout tickets for new features across Axon Body Camera models.',
    ],
  },
  {
    id: 2,
    jobTitle: 'Software Engineer Intern',
    company: 'ZALORA Group',
    companyLogo: '/zalora.png',
    companyUrl: 'https://www.zalora.com',
    location: 'Ho Chi Minh City, Vietnam',
    duration: 'Aug 2025 - Feb 2026',
    isCurrent: false,
    description: 'Contributed to the development and optimization of e-commerce infrastructure, focusing on CI/CD automation, code quality improvements, and system monitoring enhancements.',
    technologies: ['PHP', 'Golang', 'GitHub Actions', 'RabbitMQ', 'Prometheus', 'n8n'],
    details: [
      'Spearheaded CI/CD migration from Jenkins/CircleCI to GitHub Actions, reducing build time and cost while streamlining deployment workflow.',
      'Elevated code quality by enforcing PHPStan Level 1 standards and increasing Integration Test coverage to 34%.',
      'Architected and maintained RabbitMQ infrastructure for high-availability asynchronous microservices communication.',
      'Revamped monitoring stack by migrating from Graphite to Prometheus, enabling granular metrics and accurate alerting.',
      'Standardized payment log storage across all payment methods, reducing payment issue investigation time by 70%.',
      'Designed automated workflows with n8n for Customer Service team, reducing manual workload and response times.',
      'Conducted R&D on FrankenPHP as a replacement for PHP-FPM, delivering a Proof of Concept and benchmarks that demonstrated significant performance improvements.'
    ]
  },
];
