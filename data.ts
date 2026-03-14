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

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

export const stats = [
    { label: 'Internship Experience', value: '4 Months' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies Learned', value: '15+' },
    { label: 'Bootcamp Progress', value: 'Ongoing' },
];

export const highlights = [
    {
        icon: MapPin,
        text: 'Based in West Bandung Regency, West Java, Indonesia',
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
        value: 'hello@johndoe.dev',
        href: 'mailto:hello@johndoe.dev',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+1 (555) 123-4567',
        href: 'tel:+15551234567',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'San Francisco, CA',
        href: '#',
    },
];

export const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
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
        title: 'E-Commerce Platform',
        description:
            'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
        image: '/images/p1.jpg',
        techStack: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'Task Management App',
        description:
            'Collaborative project management tool with real-time updates, Kanban boards, and team analytics.',
        image: '/images/p2.jpg',
        techStack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'AI Content Generator',
        description:
            'GPT-powered content creation platform for marketers with templates and workflow automation.',
        image: '/images/p3.jpg',
        techStack: ['React', 'Python', 'OpenAI', 'FastAPI'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'Real Estate Platform',
        description:
            'Property listing platform with virtual tours, mortgage calculator, and agent booking system.',
        image: '/images/p4.jpg',
        techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Maps API'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'Fitness Tracker',
        description:
            'Cross-platform mobile app for workout tracking, nutrition logging, and progress analytics.',
        image: '/images/p5.jpg',
        techStack: ['React Native', 'Firebase', 'Node.js', 'Charts'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'Learning Management System',
        description:
            'Educational platform with video streaming, quizzes, progress tracking, and certificates.',
        image: '/images/p6.jpg',
        techStack: ['Next.js', 'Prisma', 'AWS S3', 'Stripe'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
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
