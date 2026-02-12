/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Hibernate from '@/components/technologies/Hibernate';
import Java from '@/components/technologies/Java';
import JavaScript from '@/components/technologies/JavaScript';
import Microservices from '@/components/technologies/Microservices';
import MongoDB from '@/components/technologies/MongoDB';
import MySql from '@/components/technologies/MySql';
import Prisma from '@/components/technologies/Prisma';

import SpringBoot from '@/components/technologies/SpringBoot';
import Tomcat from '@/components/technologies/Tomcate';
// Technology Components


// Component mapping for skills
export const skillComponents = {
  Java: Java,
  SpringBoot: SpringBoot,
  Hibernate: Hibernate,
  Tomcat: Tomcat,
  MySql: MySql,
  JavaScript: JavaScript,
  Microservices: Microservices,
  MongoDB: MongoDB,
  Prisma: Prisma,
};

export const heroConfig = {
  // Personal Information
  name: 'G_Warrior',
  title: 'A Java Spring Boot Developer.',
  avatar: '/assets/logo.jpg',

  // Skills Configuration
  skills: [
    {
      name: 'Java',
      href: 'https://www.oracle.com/java/',
      component: 'Java',
    },
    {
      name: 'SpringBoot',
      href: 'https://spring.io/projects/spring-boot',
      component: 'SpringBoot',
    },
    {
      name: 'Hibernate',
      href: 'https://hibernate.org/',
      component: 'Hibernate',
    },
    {
      name: 'Tomcat',
      href: 'https://tomcat.apache.org/',
      component: 'Tomcat',
    },
    {
      name: 'MySql',
      href: 'https://www.mysql.com/',
      component: 'MySql',
    },
    {
      name: 'Microservices',
      href: 'https://microservices.io/',
      component: 'Microservices',
    },
    {
      name: 'JavaScript',
      href: 'https://www.javascript.com/',
      component: 'JavaScript',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build Enterprises web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3},  {skills:4}, {skills:5} and {skills:6}. Enthusiastic about <b>Open AI ,Genrative AI </b> . I enjoy crafting efficient, scalable solutions and am passionate about learning new technologies.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/GoutamDadhich',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: '',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/GOUTAM197',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:goutamdadhich197@gmail.com',
    icon: <Mail />,
  },
];
