/**
 * Portfolio Projects and Case Studies Data for Working Dots
 */

import apexPreview from '../assets/images/apex_logistics_preview.jpg';
import velocePreview from '../assets/images/veloce_pulse_preview.jpg';
import kromaPreview from '../assets/images/kroma_studio_preview.jpg';
import omniflowPreview from '../assets/images/omniflow_preview.jpg';

import apexDeepdive from '../assets/images/apex_logistics_deepdive.jpg';
import veloceDeepdive from '../assets/images/veloce_pulse_deepdive.jpg';
import kromaDeepdive from '../assets/images/kroma_studio_deepdive.jpg';
import omniflowDeepdive from '../assets/images/omniflow_deepdive.jpg';

export const PROJECTS_DATA = [
  {
    id: 'apex-logistics',
    category: 'AI Automations',
    tag: 'AI Workflows & Cloud Logistics',
    title: 'Apex Global Logistics — Autonomous Dispatch Pipeline',
    client: 'Apex Global Freight Network',
    timeline: '2 Weeks Delivery',
    metric: '42 hrs/week saved',
    metricSecondary: '100% Invoice Accuracy',
    image: apexPreview,
    deepdiveImage: apexDeepdive,
    problem: 'Manual driver dispatching, shipment status updates, and paper invoice reconciliation consumed 6+ hours daily with recurring 8% billing error rates.',
    solution: 'Engineered an autonomous n8n + OpenAI workflow syncing WhatsApp driver check-ins directly with PostgreSQL and automated Stripe invoicing.',
    architecture: 'WhatsApp Business Webhook → n8n Orchestrator → GPT-4o Intent Parser → PostgreSQL Database → Automated Stripe Invoice PDF Generation → Email/SMS Dispatch.',
    tech: ['n8n', 'Python', 'PostgreSQL', 'WhatsApp API', 'OpenAI GPT-4o', 'Stripe API'],
    results: [
      '100% automated invoice reconciliation without human touchpoints',
      'Driver response and dispatch turnaround dropped from 35 mins to 15 seconds',
      'Zero manual data entry errors across 12,000+ monthly shipments',
      'Operating cost reduction of $4,200 / month in administrative overhead',
    ],
    fullDetails: {
      overview: 'Apex Global Freight operates a multi-region trucking and cargo dispatch network. Prior to our intervention, dispatchers spent 70% of their workday fielding phone calls and manually cross-referencing trip manifests with spreadsheets.',
      deliverables: [
        'Deterministic WhatsApp dispatch conversational bot',
        'Real-time driver location and delivery verification logger',
        'Automated bill-of-lading (BOL) extraction with document AI',
        'Instant multi-currency Stripe invoicing engine',
      ],
      testimonial: {
        quote: 'Working Dots built a rock-solid automation pipeline that literally saved our operations team 40+ hours every single week. Outstanding engineering.',
        author: 'Marcus Vance',
        title: 'VP of Operations, Apex Global Freight',
      },
    },
  },
  {
    id: 'veloce-pulse',
    category: 'Mobile Apps',
    tag: 'Mobile & HealthTech',
    title: 'Veloce Pulse — Precision Fitness & Nutrition Coach',
    client: 'Veloce Health Technologies Inc.',
    timeline: '3 Weeks Delivery',
    metric: '4.9★ App Store Rating',
    metricSecondary: '24,000+ Active Users',
    image: velocePreview,
    deepdiveImage: veloceDeepdive,
    problem: 'Clients frequently abandoned their fitness tracking due to laggy hybrid app interfaces, lack of offline gym logging, and complex calorie estimation.',
    solution: 'Built a 60fps React Native application with offline-first SQLite synchronization, AI-powered meal vision estimation, and seamless Apple HealthKit integration.',
    architecture: 'React Native (iOS/Android) ↔ Local SQLite Cache ↔ Node.js / FastAPI Microservices ↔ Apple HealthKit / Google Fit ↔ Supabase Edge Auth.',
    tech: ['React Native', 'TypeScript', 'Node.js', 'FastAPI', 'SQLite', 'Apple HealthKit', 'RevenueCat'],
    results: [
      'Over 24,000+ active monthly subscribers within 90 days of launch',
      '94% 30-day workout completion and app retention rate',
      'Under 45ms UI interaction latency and offline data sync',
      'Featured in App Store "Health & Fitness New Apps We Love"',
    ],
    fullDetails: {
      overview: 'Veloce Pulse wanted to bring personal coaching into the pocket of every athlete. We designed and coded the entire mobile client and cloud backend from scratch in 3 weeks.',
      deliverables: [
        'Native iOS and Android mobile app build',
        'Computer vision meal calorie estimator',
        'Custom biometric charts and heart rate analytics',
        'EAS build pipeline and automated App Store submission',
      ],
      testimonial: {
        quote: 'The app feels faster than Apple native apps. Working Dots executed our designs with incredible precision and zero compromise on performance.',
        author: 'Elena Rostova',
        title: 'Co-Founder & CEO, Veloce Health',
      },
    },
  },
  {
    id: 'kroma-studio',
    category: 'Web Development',
    tag: 'Web & SaaS Platform',
    title: 'Kroma Studio — Modern Creator Collaboration Suite',
    client: 'Kroma Digital Collective',
    timeline: '10 Days Turnaround',
    metric: '100/100 Lighthouse Score',
    metricSecondary: '3.1x Conversion Boost',
    image: kromaPreview,
    deepdiveImage: kromaDeepdive,
    problem: 'Slow legacy WordPress architecture caused 4.2-second page load times, 60% mobile bounce rate, and frequent server crashes during product drop events.',
    solution: 'Engineered a bespoke Next.js web application with edge-rendered assets, real-time collaboration canvas, and automated Stripe recurring billing.',
    architecture: 'Next.js 15 App Router → Vercel Edge Network → Supabase PostgreSQL → Stripe Webhooks → Cloudflare Global CDN.',
    tech: ['Next.js', 'React', 'Modern CSS', 'Supabase', 'Stripe', 'Vercel Edge', 'PostgreSQL'],
    results: [
      'Global page load times dropped from 4.2s to 380ms',
      '3.1x increase in paid digital asset subscription conversions',
      'Zero server crashes during a 50,000 concurrent visitor flash launch',
      '100/100 perfect Google Lighthouse Performance and SEO score',
    ],
    fullDetails: {
      overview: 'Kroma Studio is a high-traffic creative asset marketplace and collaborative workflow platform for 3D designers and motion artists worldwide.',
      deliverables: [
        'Sub-second edge-rendered SaaS storefront',
        'Live multi-user asset preview canvas',
        'Stripe customer portal with tiered access control',
        'Headless content management system for daily drops',
      ],
      testimonial: {
        quote: 'Our conversion rate tripled within two weeks of deploying the new platform. Working Dots delivers engineering at a level you rarely see in agencies.',
        author: 'David Chen',
        title: 'Founder, Kroma Digital',
      },
    },
  },
  {
    id: 'omniflow',
    category: 'AI Automations',
    tag: 'AI Workflow & Enterprise Systems',
    title: 'OmniFlow — Enterprise Knowledge Bot & Ticket Automator',
    client: 'OmniCloud Systems LLC',
    timeline: '12 Days Deployment',
    metric: '72% Support Automated',
    metricSecondary: '99.99% System Uptime',
    image: omniflowPreview,
    deepdiveImage: omniflowDeepdive,
    problem: 'Customer support teams were overwhelmed with repetitive technical tickets, causing 4-hour first response times and engineer distraction.',
    solution: 'Built an enterprise AI copilot trained on company technical documentation with intelligent Slack triage and Zendesk automatic resolution routing.',
    architecture: 'Zendesk & Slack Webhook → Vector Embeddings Search (Qdrant) → GPT-4o Reasoning Agent → Auto Ticket Response / Engineer Escalation.',
    tech: ['Python', 'FastAPI', 'Slack API', 'Vector Embeddings', 'Make.com', 'Zendesk API'],
    results: [
      '72% of all Tier-1 inbound support tickets resolved instantly without human intervention',
      'Average first response time dropped from 4.1 hours to 8 seconds',
      'Engineers receive clean, pre-diagnosed bug reports directly in Slack',
      'Customer satisfaction CSAT increased from 78% to 96%',
    ],
    fullDetails: {
      overview: 'OmniCloud needed an enterprise-grade internal copilot that could understand complex cloud infrastructure concepts and resolve customer setup blockers in real time.',
      deliverables: [
        'Secure RAG vector pipeline indexing 5,000+ API docs',
        'Custom Slackbot triage bot for DevOps engineers',
        'Automatic Zendesk response generator with guardrails',
        'Live executive analytics dashboard tracking resolved tickets',
      ],
      testimonial: {
        quote: 'The ROI on OmniFlow was immediate. Our engineers got their time back, and our customers get immediate answers 24/7.',
        author: 'Sarah Jenkins',
        title: 'Head of Customer Experience, OmniCloud',
      },
    },
  },
];
