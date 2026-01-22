export const experience = [
  {
    id: 2,
    jobTitle: 'Software Engineer Intern',
    company: 'ZALORA Group',
    companyLogo: '/zalora.png',
    companyUrl: 'https://www.zalora.com',
    location: 'Ho Chi Minh City, Vietnam',
    duration: 'Aug 2025 - Feb 2026',
    isCurrent: true,
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
  {
    id: 1,
    jobTitle: 'Game Back-End Developer Intern',
    company: 'GihOt Studio',
    companyLogo: '/gihot.png',
    location: 'Ho Chi Minh City, Vietnam',
    duration: 'Jun 2025 - Aug 2025',
    isCurrent: false,
    description: 'Designed and implemented the entire game-server stack for a real-time multiplayer title blending MOBA, RTS and minion-control mechanics.',
    technologies: ['Java 17', 'Spring Boot', 'MongoDB', 'Netty', 'WebSocket'],
    details: [
      'Built RESTful microservices with Spring Boot for authentication, matchmaking, and room/lobby management; persisted data in MongoDB.',
      'Developed a low-latency Netty-powered WebSocket gateway with custom TLV binary protocol for streaming gameplay events.',
      'Implemented game logic including position synchronization, combat mechanics, and skill-casting systems for scalable server-side processing.',
      'Deployed and maintained game services on VPS infrastructure with monitoring, achieving 99% uptime.'
    ]
  },
];
