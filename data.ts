import {
    Briefcase,
    Cloud,
    Code2,
    Coffee,
    Cpu,
    Database,
    GitBranch,
    Globe,
    GraduationCap,
    Layers,
    Layout,
    Mail,
    MapPin,
    Palette,
    Phone,
    Server,
    Smartphone,
    Terminal,
} from 'lucide-react';

import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

export const stats = [
    { label: 'Internship Experience', value: '4 Months' },
    { label: 'Projects Completed', value: '30+' },
    { label: 'Technologies Learned', value: '10+' },
    { label: 'Average Score Bootcamp', value: '95+' },
];

export const highlights = [
    {
        icon: MapPin,
        text: 'Based in Kabupaten Bandung Barat, Jawa Barat, Indonesia',
    },
    {
        icon: Briefcase,
        text: 'Open to Junior Web Developer opportunities',
    },
    {
        icon: GraduationCap,
        text: "Bachelor's Degree in Computer and Informatics Engineering – Politeknik Negeri Bandung",
    },
    {
        icon: Coffee,
        text: 'Passionate about continuous learning and building web applications',
    },
];

export const userReviewData = [
    {
        id: 1,
        name: 'John Doe',
        profession: 'Real Estate Agent',
        userImage: '/images/u1.jpg',
        review: 'A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame',
    },
    {
        id: 2,
        name: 'Mike Smith',
        profession: 'Business Owner',
        userImage: '/images/u2.jpg',
        review: 'Great selection of properties and seamless process. Highly recommended for anyone looking to invest.',
    },
    {
        id: 3,
        name: 'Alex Johnson',
        profession: 'Web developer',
        userImage: '/images/u3.jpg',
        review: 'The website helped me find my dream home quickly and hassle-free. Exceptional service!',
    },
    {
        id: 4,
        name: 'Emily Clark',
        profession: 'Interior Designer',
        userImage: '/images/u4.jpg',
        review: 'Fantastic range of properties with clear details. The best platform for home and design inspiration!',
    },
];

export const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'egi.satriadyw@gmail.com',
        href: 'mailto:egi.satriadyw@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+62 831-4454-4243',
        href: 'tel:+6283144544243',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Kabupaten Bandung Barat, Jawa Barat, Indonesia',
        href: '#',
    },
];

export const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/egisatriaa', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/egi-satria-dyw', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/egidyw_/', label: 'Instagram' },
];

export const experiences = [
    {
        type: 'education',
        title: 'Full Stack Web Development Bootcamp',
        company: 'dibimbing.id',
        period: 'Aug 2025 – Present',
        description:
            'Participating in an intensive full-stack web development bootcamp focused on building modern web applications using Laravel, React.js, HTML, CSS, Tailwind CSS, JavaScript, and Git through hands-on projects.',
        technologies: ['Laravel','React.js','HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Git'],
    },
    {
        type: 'education',
        title: 'Fundamental Penetration Testing',
        company: 'Coding Studio',
        period: 'Sep 2025',
        description:
            'Learned practical vulnerability assessment techniques including XSS, SQL Injection, CSRF, and security testing using tools such as Burp Suite, OWASP ZAP, and Nmap.',
        technologies: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Web Security'],
    },
    {
        type: 'education',
        title: 'Fundamental Linux Command',
        company: 'Coding Studio',
        period: 'Sep 2025',
        description:
            'Learned Linux terminal operations, file system navigation, process management, and shell scripting fundamentals for server and development environments.',
        technologies: ['Linux', 'Shell', 'Terminal'],
    },
    {
        type: 'education',
        title: 'Bachelor of Computer and Informatics Engineering',
        company: 'Politeknik Negeri Bandung',
        period: 'Aug 2021 – Aug 2025',
        description:
            'Graduated with an Applied Bachelor’s Degree specializing in software engineering, databases, DevOps practices, blockchain development, and web application development.',
        technologies: [
            'Software Engineering',
            'Database Systems',
            'Machine Learning',
            'DevOps',
            'Computer Vision',
            'Blockchain',
        ],
    },
    {
        type: 'work',
        title: 'Fullstack Developer Intern',
        company: 'PT Kharisma Indotech Pratama',
        period: 'Jun 2024 – Oct 2024',
        description:
            'Developed features for a Time Tracker web application including automated time logging and task monitoring while integrating frontend and backend systems and optimizing database performance.',
        technologies: ['JavaScript', 'Ruby', 'MySQL'],
    },
];

export const footerSocialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export const projects = [
    {
        title: 'Nova Vault',
        description:
            'E-wallet-based Financial Technology (FinTech) application focused on transaction integrity, security, and ACID compliance. The backend is built using Laravel 12.x with an architectural design that ensures the security of user balances and meets professional financial application standards.',
        image: '/images/Nova.png',
        techStack: ['Laravel','React.js', 'MySQL','Tailwind CSS'],
        demoUrl: 'https://nova-vault-fintech-website.vercel.app/',
        githubUrl: 'https://github.com/egisatriaa/Nova-Vault_Fintech_Website',
    },
    {
        title: 'The Sanctuary Bali Resort',
        description:
            'Website for The Sanctuary Bali Resort, a luxury resort located in Bali, Indonesia. The website is built using React and Next.js with Tailwind CSS for styling and PostgreSQL for the database.',
        image: '/images/resort.png',
        techStack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
        demoUrl: 'https://resorts-website.vercel.app/',
        githubUrl: 'https://github.com/egisatriaa/resorts-website',
    },
    {
        title: 'Maison Naytes Atelier',
        description:
            'Website parfume Maison Naytes Atelier, a luxury brand perfume located in Bali, Indonesia. The website is built using React and Next.js with Tailwind CSS for styling and PostgreSQL for the database.',
        image: '/images/Parfum.png',
        techStack: ['React', 'Tailwind CSS', 'JavaScript'],
        demoUrl: 'https://maison-naytes-atelier.vercel.app/',
        githubUrl: 'https://github.com/egisatriaa/Maison-Naytes-Atelier',
    },
    {
        title: 'Retaily Website',
        description:
            'Website Retaily, a company that sells some products located in Bandung, Indonesia. The website is built using React and Next.js with Tailwind CSS for styling, Laravel for backend and MySQL for the database.',
        image: '/images/pos.png',
        techStack: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
        demoUrl: 'https://fp-point-of-sales-front-end.vercel.app/',
        githubUrl: 'https://github.com/egisatriaa/FP_Point-of-Sales_FrontEnd',
    },
    {
        title: 'DiStreaming',
        description:
            'Streaming platform for movies and tv shows. The website is built using React and Next.js with Tailwind CSS for styling, Laravel for backend and MySQL for the database.',
        image: '/images/distreaming.png',
        techStack: ['React.js', 'Tailwind CSS','Laravel', 'MySQL'],
        demoUrl: 'https://fe-di-streaming-next.vercel.app/',
        githubUrl: 'https://github.com/egisatriaa/FE_DiStreaming_Next',
    },
    {
        title: 'My Market',
        description:
            'My Market is a web-based application for buying and selling products. The application is built using HTML, CSS, and JavaScript.',
        image: '/images/mymarket.png',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        demoUrl: 'https://mymarkett.netlify.app/',
        githubUrl: 'https://github.com/egisatriaa/My-Market',
    },
];

export const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'JavaScript', icon: Code2 },
            { name: 'TypeScript', icon: Terminal },
            { name: 'React.js', icon: Globe },
            { name: 'Next.js', icon: Layout },
            { name: 'Tailwind CSS', icon: Palette },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Laravel', icon: Layers },
            { name: 'Ruby on Rails', icon: Server },
            { name: 'REST API', icon: Cloud },
            { name: 'MySQL', icon: Database },
            { name: 'PostgreSQL', icon: Database },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', icon: GitBranch },
            { name: 'Docker', icon: Server },
            { name: 'Linux', icon: Terminal },
            { name: 'CI/CD', icon: Cpu },
            { name: 'Figma', icon: Palette },
        ],
    },
];
