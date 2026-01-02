export const experience = [
  {
    id: 2,
    jobTitle: 'Software Engineer',
    company: 'ZALORA Group',
    duration: 'Aug-2025 to Feb-2026',
    description: 'Contributed to the development and optimization of e-commerce infrastructure, focusing on CI/CD automation, code quality improvements, and system monitoring enhancements.',
    details: [
      'Spearheaded the migration of CI/CD pipelines from legacy systems (Jenkins/CircleCI) to GitHub Actions, reducing build time, cost and streamlining the deployment workflow.',
      'Elevated code quality and stability by enforcing PHPStan Level 1 standards and increasing Integration Test coverage, making code coverage to 34%.',
      'Architected and maintained RabbitMQ infrastructure, ensuring high availability and stable connectivity for asynchronous microservices communication.',
      'Streamlined internal operations by designing automated workflows with n8n to support the Customer Service team, reducing manual workload and response times.',
      'Revamped the system monitoring stack by migrating from Graphite to Prometheus, enabling granular metrics collection and more accurate alerting mechanisms.',
      'Standardized and unified payment log storage across all payment methods in the BOB platform, designing a centralized schema and logging interface that reduced payment issue investigation time by up to 70% and improved operational efficiency for both engineering and operations teams.'
    ]
  },
  {
    id: 1,
    jobTitle: 'Game Back-end Developer',
    company: 'GihOt Studio',
    duration: 'Jun-16-2025 to Aug-8-2025',
    description: 'Designed and implemented the entire game–server stack for a real-time multiplayer title that blends MOBA, RTS and minion-control mechanics.',
    details: [
      'Built RESTful micro-services with Java 17 / Spring Boot for user authentication, matchmaking and room/lobby management; persisted player and game data in MongoDB.',
      'Developed a low-latency Netty-powered WebSocket gateway; created a custom TLV (type-length-value) binary protocol to stream gameplay events between client and server.',
      'Optimized thread-pool usage, I/O pipelines, message serialization and message sending mechanics.'
    ]
  },
];
