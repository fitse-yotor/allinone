/*
  English copy. Single source of truth for every string on the site.

  Copy rules, per brief:
    - No em dashes. Periods, commas, colons and parentheses only.
    - No buzzwords. tools/check-slop.mjs holds the banned list.
    - No claim that cannot be traced to the company's public service scope
      or to information the client supplied. No counts, no client names,
      no certifications, no founding year.
*/

export const en = {
  locale: 'en',
  localeName: 'English',
  otherLocale: 'am',
  otherLocaleName: 'አማርኛ',
  dir: 'ltr',

  company: {
    name: 'AllInOne Technology',
    shortName: 'AllInOne',
    descriptor: 'Technology systems integration and development',
    country: 'Ethiopia',
    phone: '+251912602101',
    phoneHref: 'tel:+251912602101',
  },

  nav: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    primary: 'Primary',
    items: [
      { label: 'Cybersecurity', path: '/cybersecurity/' },
      { label: 'Infrastructure', path: '/infrastructure/' },
      { label: 'Development', path: '/development/' },
      { label: 'Approach', path: '/approach/' },
      { label: 'Industries', path: '/industries/' },
      { label: 'About', path: '/about/' },
      { label: 'Contact', path: '/contact/' },
    ],
    langSwitchLabel: 'Language',
    langSwitchTo: 'Read this page in Amharic',
  },

  footer: {
    practicesLabel: 'Practices',
    companyLabel: 'Company',
    contactLabel: 'Contact',
    phoneLabel: 'Phone',
    statement:
      'AllInOne Technology designs, implements and supports secure technology environments for institutions in Ethiopia.',
    rights: 'All rights reserved.',
  },

  contactBand: {
    heading: 'Tell us what you need to build or secure.',
    body:
      'Send a short description of the environment and the requirement. We will tell you what we would assess first, and whether we are the right firm for the work.',
    action: 'Start a conversation',
    phoneLabel: 'Phone',
  },

  home: {
    title: 'AllInOne Technology: cybersecurity, infrastructure and development in Ethiopia',
    description:
      'AllInOne Technology is an Ethiopian technology systems integration and development firm working across cybersecurity, technology infrastructure and software development, from assessment through implementation and support.',

    hero: {
      heading:
        'We secure the foundation, build the infrastructure, and develop the systems organizations rely on.',
      body:
        'AllInOne Technology is a systems integration and development firm based in Ethiopia. We work across three connected practices, from the first assessment through design, implementation, integration and long term support.',
      actionPrimary: 'Start a conversation',
      actionSecondary: 'How we work',
      sceneLabel: 'Ethiopia, rendered as an extruded geometric form',
      sceneCaption: 'Ethiopia',
    },

    positioning: {
      label: 'The firm',
      statement:
        'AllInOne Technology is a technology systems integration and development firm providing cybersecurity, technology infrastructure, systems engineering, software development and consulting. We support clients across the complete technology lifecycle, from assessment and architecture through implementation, integration, deployment and ongoing support.',
      questionsLabel: 'What clients ask us',
      questions: [
        'How do we secure our technology?',
        'How do we build the infrastructure it runs on?',
        'How do we develop the software our organization needs?',
      ],
      questionsNote:
        'Most firms answer one of these. Answering all three is the reason this company is called AllInOne.',
    },

    practices: {
      label: 'Practices',
      heading: 'Three practices, one engineering team.',
      readMore: 'Read about this practice',
      capabilitiesLabel: 'Capabilities',
      items: [
        {
          num: '01',
          name: 'Cybersecurity',
          path: '/cybersecurity/',
          tagline: 'Designed in, not added on.',
          body:
            'Security belongs in the architecture, not in a product bought after handover. We identify where an organization is exposed, design controls that fit its real environment and budget, implement them, and verify that they work.',
          capabilities: [
            'Cybersecurity consulting',
            'Security architecture',
            'Security assessments',
            'Network security design',
            'Firewall design and implementation',
            'Secure network segmentation',
            'Identity and access management',
            'Endpoint protection',
            'Server and infrastructure hardening',
            'Vulnerability management',
            'Security monitoring',
            'Backup and recovery security',
            'Secure remote access',
            'Security policy and standards',
          ],
        },
        {
          num: '02',
          name: 'Technology Infrastructure',
          path: '/infrastructure/',
          tagline: 'From concept to operation.',
          body:
            'The broadest of the three practices, and the one that carries the rest. We design, implement and advise on the physical and logical infrastructure an organization depends on, including the systems that most software firms will not touch: surveillance, access control, telephony, fire detection and industrial control.',
          capabilities: [
            'Data center assessment and design',
            'Server, storage and backup infrastructure',
            'Power and environmental planning',
            'LAN, WAN and wireless networks',
            'Routing, switching and fibre infrastructure',
            'Network monitoring',
            'CCTV and video surveillance',
            'Access control and monitoring rooms',
            'Telecommunication line and systems design',
            'PBX and intercom systems',
            'Fire detection and warning systems',
            'Industrial wiring and control systems',
          ],
        },
        {
          num: '03',
          name: 'Development',
          path: '/development/',
          tagline: 'Software shaped to the organization.',
          body:
            'We build the systems an organization runs on day to day, connect the systems it already has, and replace the manual steps and spreadsheets that slow the work down. Because we also build and secure infrastructure, we can deploy what we develop into an environment we understand.',
          capabilities: [
            'Enterprise web applications',
            'Internal operational systems',
            'Workflow automation',
            'Management information systems',
            'Mobile applications',
            'Dashboards and reporting platforms',
            'API development',
            'System integration',
            'Legacy system modernization',
            'Authentication and authorization',
            'Customer and staff portals',
            'Database applications',
          ],
        },
      ],
    },

    coverage: {
      label: 'Coverage',
      heading: 'One team across the technology stack.',
      body:
        'The usual arrangement is three suppliers: one for the network, one for security, one for the software. Each does its part correctly, and the gaps between them become the client’s problem. This is what changes when one firm holds all three.',
      table: {
        caption: 'Scope of work by type of supplier',
        head: ['Who you would normally engage', 'What they deliver', 'What is left to you'],
        rows: [
          [
            'A software development firm',
            'The application',
            'The network, servers, security and physical systems it depends on',
          ],
          [
            'A network integrator',
            'Cabling, switching, servers and racks',
            'Security architecture, and the software that has to run on it',
          ],
          [
            'A security vendor',
            'Firewalls, endpoint software, cameras',
            'The infrastructure design underneath, and the systems above',
          ],
          [
            'AllInOne Technology',
            'The infrastructure, the security design, and the software on top of it',
            'Vendor coordination, because one team is accountable for all three',
          ],
        ],
      },
      note:
        'Infrastructure builds the environment. Security protects it. Development builds what operates inside it.',
    },

    lifecycle: {
      label: 'Business model',
      heading: 'How an engagement runs.',
      body:
        'Every engagement follows the same sequence, whether it covers one floor or a national branch network.',
      steps: ['Consult', 'Design', 'Implement', 'Integrate', 'Secure', 'Support'],
      action: 'The full process, step by step',
    },

    example: {
      label: 'Worked example',
      heading: 'A bank opening a new branch.',
      body:
        'A branch needs a working technology environment on opening day: network, servers, cameras, door control, telephones, fire detection, the branch software, and the security around all of it. This is the sequence we would run, under one contract.',
      steps: [
        {
          n: '01',
          title: 'Assess the requirement',
          text: 'Staff numbers, transaction volumes, the existing links to head office, and what the bank already runs centrally.',
        },
        {
          n: '02',
          title: 'Design the network architecture',
          text: 'Addressing, routing, switching, wireless coverage, and the connection back to head office with its fallback path.',
        },
        {
          n: '03',
          title: 'Design the security',
          text: 'Segmentation between banking operations, staff devices and public wireless. Firewall policy, administrative access, and how head office reaches the branch.',
        },
        {
          n: '04',
          title: 'Install the network',
          text: 'Structured cabling, switches, routers and access points, tested, labelled and documented.',
        },
        {
          n: '05',
          title: 'Install CCTV and access control',
          text: 'Camera positions and coverage, recording and retention, door control at the entrance, strong room and staff areas, and the monitoring position inside the branch.',
        },
        {
          n: '06',
          title: 'Deploy servers and storage',
          text: 'Local servers where the branch needs them, backup, power protection, and the environmental conditions they require.',
        },
        {
          n: '07',
          title: 'Integrate communication systems',
          text: 'PBX and intercom, extensions for each position, and the link into the existing head office telephone system.',
        },
        {
          n: '08',
          title: 'Fit safety and control systems',
          text: 'Fire detection and warning, with the electrical and control work those systems depend on.',
        },
        {
          n: '09',
          title: 'Implement the software',
          text: 'The branch application, its integration with central systems, and user accounts mapped to real roles.',
        },
        {
          n: '10',
          title: 'Configure cybersecurity',
          text: 'Hardening, endpoint protection, logging, monitoring, and a restore test that proves the backup works.',
        },
        {
          n: '11',
          title: 'Validate',
          text: 'Network throughput and failover, camera coverage, door control, call routing, software function, and each security control tested against its design.',
        },
        {
          n: '12',
          title: 'Document and hand over',
          text: 'As built drawings, configuration records, credential transfer, and training for branch staff and the bank’s IT team.',
        },
        {
          n: '13',
          title: 'Support',
          text: 'An agreed response arrangement, held by the team that built the environment.',
        },
      ],
      close:
        'Thirteen stages, one contract, one team accountable for the result. Split across three suppliers, the interfaces between them become the bank’s problem to manage.',
    },

    supply: {
      label: 'Supply',
      heading: 'Technology supply and integration.',
      body:
        'We import and supply computing, communication, network, cybersecurity and physical security equipment, and act as agent for domestic and foreign manufacturers. Equipment is specified against a design, not sold from a catalogue.',
      items: [
        'Equipment specification against the design',
        'Vendor coordination',
        'Procurement and import',
        'Configuration',
        'Installation',
        'Integration with existing systems',
        'Testing and commissioning',
        'Ongoing support',
      ],
    },
  },

  practicePage: {
    capabilitiesLabel: 'What we do',
    deliveryLabel: 'How we deliver it',
    engagementsLabel: 'Typical engagements',
    relatedLabel: 'The other two practices',
    backToPractices: 'All practices',
  },

  cybersecurity: {
    title: 'Cybersecurity',
    description:
      'Cybersecurity consulting, security architecture, assessments, network security, identity and access management, hardening, monitoring and recovery, for institutions in Ethiopia.',
    label: 'Practice 01',
    heading: 'Cybersecurity',
    lede:
      'We help organizations find where they are exposed, design security that fits their real environment, implement it, and prove that it works.',
    intro: [
      'Security is a design decision. When it arrives at the end of a project as a product purchase, it protects whatever the architecture happened to allow, and the gaps are structural rather than fixable by configuration.',
      'We work the other way round. Security requirements enter at the architecture stage, alongside the network design and the application design, because we are usually responsible for those too.',
    ],
    groups: [
      {
        name: 'Assessment and consulting',
        items: [
          'Cybersecurity assessments',
          'Risk and exposure review',
          'Security architecture review',
          'Data center risk assessment',
          'Security policy and standards',
          'Consulting on security products and services',
        ],
      },
      {
        name: 'Network and perimeter',
        items: [
          'Network security architecture',
          'Firewall design and implementation',
          'Secure network segmentation',
          'Secure remote access',
          'Network security equipment deployment',
        ],
      },
      {
        name: 'Systems and identity',
        items: [
          'Identity and access management',
          'Privileged access control',
          'Endpoint protection',
          'Server and infrastructure hardening',
          'Patch and vulnerability management',
        ],
      },
      {
        name: 'Operations and recovery',
        items: [
          'Security monitoring and logging',
          'Backup and recovery security',
          'Restore validation',
          'Incident response preparation',
          'Physical and digital security integration',
        ],
      },
    ],
    delivery:
      'Security work follows the same lifecycle as the rest of our engagements. We assess the environment as it is, advise on what matters most, design the controls, implement them, integrate them with what is already running, validate each one against its design, and hand over documentation that the client’s own team can work from.',
    engagements: [
      'A security assessment of an existing environment, with a prioritised remediation plan.',
      'Security architecture for a new data center, network or application, designed alongside the infrastructure.',
      'Firewall and segmentation design and implementation for an organization whose network grew without a plan.',
      'Identity and access management for an institution that has outgrown shared accounts.',
      'Integration of physical security and network security so that door control, cameras and systems access are governed together.',
    ],
  },

  infrastructure: {
    title: 'Technology Infrastructure',
    description:
      'Data center, enterprise network, physical security, communication and safety system design, implementation and consulting, for institutions in Ethiopia.',
    label: 'Practice 02',
    heading: 'Technology Infrastructure',
    lede: 'From concept to operation.',
    intro: [
      'This is the broadest of the three practices, and the one the other two stand on. It covers the physical and logical infrastructure an organization runs on, and it extends into systems that most technology firms will not take responsibility for: surveillance, access control, telephony, fire detection and industrial control.',
      'We work in three modes, and clients engage us in any of them. We consult on infrastructure other parties will build. We design infrastructure to be tendered. And we implement infrastructure, including the one we designed.',
    ],
    modesLabel: 'Three ways to engage us',
    modes: [
      {
        name: 'Design',
        text: 'Architecture, specifications and drawings that a client can build from or put out to tender, with the equipment schedule and acceptance criteria written to be verifiable.',
      },
      {
        name: 'Implementation',
        text: 'Supply, installation, configuration, integration, testing and commissioning, with as built documentation and a handover the client’s team can operate from.',
      },
      {
        name: 'Consulting',
        text: 'Independent assessment and advice on an existing or proposed environment, including review of another party’s design, capacity planning, and prioritising what to fix first.',
      },
    ],
    groups: [
      {
        name: 'Data center infrastructure',
        items: [
          'Data center risk assessment',
          'Data center architecture and design',
          'Server environments',
          'Storage infrastructure',
          'Backup infrastructure',
          'Power and environmental planning',
          'Implementation and migration',
          'Capacity review and optimization',
        ],
      },
      {
        name: 'Enterprise networks',
        items: [
          'LAN and WAN design',
          'Routing and switching',
          'Wireless networks',
          'Fibre and structured cabling',
          'Secure connectivity between sites',
          'Network segmentation',
          'Network monitoring',
        ],
      },
      {
        name: 'Physical security',
        items: [
          'CCTV and video surveillance',
          'Camera coverage design',
          'Access control',
          'Monitoring and control rooms',
          'Physical security infrastructure',
          'Integration with network security',
        ],
      },
      {
        name: 'Communication systems',
        items: [
          'Telecommunication line and systems design',
          'PBX systems',
          'Intercom systems',
          'Enterprise communication systems',
          'Structured communication networks',
        ],
      },
      {
        name: 'Safety and control systems',
        items: [
          'Fire detection systems',
          'Fire warning systems',
          'Industrial wiring',
          'Industrial control systems',
          'Electrical and control installation',
        ],
      },
    ],
    delivery:
      'Infrastructure work is sequenced so that each stage can be checked before the next one depends on it. Assessment establishes what exists. Design fixes the architecture and the equipment schedule. Implementation follows the design, with deviations recorded rather than absorbed. Validation tests against the acceptance criteria written during design, and handover includes the drawings and configuration records the client will need years later.',
    engagements: [
      'A data center assessment for an institution that has outgrown its server room, with options at different budgets.',
      'Network architecture and implementation for a new head office or a branch rollout.',
      'CCTV and access control for a facility where the two currently run as unrelated systems.',
      'PBX and intercom for an organization consolidating several inherited telephone systems.',
      'Fire detection and the associated control wiring for a new or refitted building.',
    ],
  },

  development: {
    title: 'Development',
    description:
      'Custom software development in Ethiopia: enterprise web applications, internal operational systems, workflow automation, integration, dashboards and APIs.',
    label: 'Practice 03',
    heading: 'Development',
    lede: 'Software shaped to the organization, not the other way round.',
    intro: [
      'Most institutions do not need new software for its own sake. They need a process that currently runs on paper, spreadsheets and repeated phone calls to run reliably, with a record of what happened and who approved it.',
      'That is the work: operational systems, the integrations that connect systems already in place, and the reporting that lets management see the same numbers as the people entering them. Because we also build and secure infrastructure, we can deploy what we develop into an environment we designed and understand.',
    ],
    groups: [
      {
        name: 'Applications',
        items: [
          'Enterprise web applications',
          'Internal operational systems',
          'Management information systems',
          'Mobile applications',
          'Customer and staff portals',
          'Database applications',
        ],
      },
      {
        name: 'Process and data',
        items: [
          'Workflow automation',
          'Approval and audit trails',
          'Dashboards',
          'Reporting platforms',
          'Data consolidation',
        ],
      },
      {
        name: 'Integration',
        items: [
          'API development',
          'System integration',
          'Legacy system modernization',
          'Authentication and authorization',
          'Integration with infrastructure and security systems',
        ],
      },
    ],
    delivery:
      'We start by watching how the work is done now, including the steps people have invented to get around the current system. Design covers the data model, the roles and the integrations before any interface is built. Development runs in stages that the client can see and correct. Deployment, hardening, backup and handover are part of the work, not a separate phase someone else owns.',
    engagements: [
      'An internal operational system replacing a process that currently runs on spreadsheets and email.',
      'Integration between systems that hold the same data separately and disagree about it.',
      'A management dashboard built on data the organization already collects but cannot see together.',
      'Modernization of an application that still works but can no longer be maintained or secured.',
      'An application deployed onto infrastructure we designed, secured and continue to support.',
    ],
    crossPractice:
      'AllInOne can build the infrastructure, secure it, and develop the application that operates on top of it. When those three are held by one team, the questions that usually fall between suppliers have an owner.',
  },

  approach: {
    title: 'How we work',
    description:
      'The AllInOne engagement process: assess, advise, design, implement, integrate, validate, hand over and support.',
    label: 'Process',
    heading: 'Assess first. Recommend second. Build third.',
    lede:
      'We are an engineering consultancy that also implements what it designs. That order matters, and it is why clients can engage us for advice without buying equipment.',
    intro: [
      'A firm that only sells equipment will recommend equipment. We would rather be the firm a client can ask what they actually need, including when the answer is smaller than they expected.',
      'Every engagement runs through the same eight stages. Clients join at whichever stage fits, and can stop at the end of any of them.',
    ],
    steps: [
      { n: '01', name: 'Assess', text: 'Understand the existing environment as it is, not as the documentation describes it. Inventory, configuration, capacity, condition and exposure.' },
      { n: '02', name: 'Advise', text: 'Set out the risks, gaps and opportunities, ordered by what matters most, with what each one costs to address.' },
      { n: '03', name: 'Design', text: 'Produce the architecture, specifications, equipment schedule, implementation plan and the acceptance criteria the result will be tested against.' },
      { n: '04', name: 'Implement', text: 'Supply and deploy hardware, software and systems to the design, recording any deviation rather than absorbing it quietly.' },
      { n: '05', name: 'Integrate', text: 'Make the parts work as one environment, including the systems that were already there and are staying.' },
      { n: '06', name: 'Validate', text: 'Test function, performance and security against the design. A control that was not tested has not been implemented.' },
      { n: '07', name: 'Hand over', text: 'As built documentation, configuration records, credential transfer and training, so the client’s own team can operate and extend the environment.' },
      { n: '08', name: 'Support', text: 'Maintain, monitor and improve, with the team that built it and knows why each decision was made.' },
    ],
    consultingNote: {
      heading: 'Engaging us for advice only',
      body:
        'Assessment, advisory and design can be bought on their own. Some clients take our design to tender and award the implementation elsewhere. We would rather write a design that can be tendered honestly than one only we can build.',
    },
  },

  industries: {
    title: 'Industries',
    description:
      'AllInOne Technology works with government, financial services, telecommunication, enterprise, critical infrastructure, education, healthcare and international organizations in Ethiopia.',
    label: 'Clients',
    heading: 'Who we build for.',
    lede:
      'Our work suits organizations where technology failure has consequences beyond inconvenience, and where the environment has to be documented, secured and auditable.',
    note:
      'We do not publish client names. Institutional clients in these sectors generally require that, and we would rather hold to it than decorate a website.',
    groups: [
      { name: 'Government', items: ['Ministries', 'Authorities', 'Agencies', 'Municipalities', 'Public enterprises'] },
      { name: 'Financial services', items: ['Banks', 'Microfinance institutions', 'Insurance companies', 'Fintech organizations'] },
      { name: 'Telecommunication', items: ['Telecom operators', 'Internet service providers', 'Communication providers'] },
      { name: 'Large enterprises', items: ['Manufacturing', 'Logistics', 'Retail', 'Real estate', 'Hospitality'] },
      { name: 'Critical infrastructure', items: ['Utilities', 'Transport', 'Industrial facilities', 'Large campuses'] },
      { name: 'Education', items: ['Universities', 'Colleges', 'Large schools'] },
      { name: 'Healthcare', items: ['Hospitals', 'Medical institutions'] },
      { name: 'International organizations', items: ['Non governmental organizations', 'Development organizations', 'Embassies', 'International institutions'] },
    ],
  },

  about: {
    title: 'About',
    description:
      'AllInOne Technology is an Ethiopian technology engineering and systems integration firm working across cybersecurity, technology infrastructure and software development.',
    label: 'About',
    heading: 'An engineering firm, across three practices.',
    intro: [
      'AllInOne Technology is an Ethiopian technology engineering and systems integration firm focused on cybersecurity, technology infrastructure and software development.',
      'We work with organizations from initial assessment and consulting through architecture, implementation, integration and operational support. Our capabilities span secure networks, data center infrastructure, physical security, enterprise communication systems and custom software platforms.',
      'By bringing infrastructure, security and development together, we help clients build technology environments that are secure, reliable and practical to operate.',
    ],
    missionLabel: 'Mission',
    mission:
      'To help organizations build secure, reliable and practical technology environments through strong engineering, responsible implementation and long term technical partnership.',
    visionLabel: 'Vision',
    vision:
      'To become one of Ethiopia’s most trusted technology engineering and cybersecurity partners for mission critical organizations.',
    valuesLabel: 'Values',
    valuesNote: 'Six commitments that describe how the work is actually done.',
    values: [
      { name: 'Engineering discipline', text: 'Every design decision has a technical justification that we can explain.' },
      { name: 'Security by design', text: 'Security belongs in the architecture, not in a purchase made after handover.' },
      { name: 'Accountability', text: 'We take responsibility from planning through deployment, including for the parts that are inconvenient.' },
      { name: 'Practicality', text: 'A design has to work in the client’s real environment, with the power, space, staff and budget that exist.' },
      { name: 'Reliability', text: 'Systems should keep working after the implementation team has left the site.' },
      { name: 'Partnership', text: 'We would rather hold a long relationship than close a one time equipment sale.' },
    ],
  },

  contact: {
    title: 'Contact',
    description:
      'Contact AllInOne Technology about cybersecurity, technology infrastructure or software development work in Ethiopia.',
    label: 'Contact',
    heading: 'Start with the requirement.',
    lede:
      'Describe the environment and what needs to happen. We will tell you what we would assess first, and whether we are the right firm for the work.',
    phoneLabel: 'Phone',
    // TODO: calling hours, once confirmed. Left empty so nothing unverified ships.
    phoneNote: '',
    formLabel: 'Send a message',
    form: {
      name: 'Name',
      organization: 'Organization',
      email: 'Email',
      phone: 'Phone',
      sector: 'Sector',
      sectorOptions: [
        'Select a sector',
        'Government',
        'Financial services',
        'Telecommunication',
        'Enterprise',
        'Critical infrastructure',
        'Education',
        'Healthcare',
        'International organization',
        'Other',
      ],
      interest: 'What is this about',
      interestOptions: [
        'Select an area',
        'Cybersecurity',
        'Technology infrastructure',
        'Software development',
        'More than one of these',
        'Something else',
      ],
      message: 'The requirement',
      messagePlaceholder:
        'The environment as it is now, what needs to change, and any deadline you are working to.',
      optional: 'optional',
      required: 'required',
      submit: 'Send message',
      fallbackHeading: 'If the form does not send',
      fallbackBody: 'Call the number above. It reaches the same team.',
    },
  },

  notFound: {
    title: 'Page not found',
    description: 'That page does not exist on this site.',
    label: 'Error 404',
    heading: 'That page is not here.',
    body: 'The address may be mistyped, or the page may have been moved. The three practices are the best place to start.',
    action: 'Go to the home page',
  },
};

export type Copy = typeof en;
