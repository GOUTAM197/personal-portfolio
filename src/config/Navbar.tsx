export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.jpg',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Blogs',
      href: '/#',
      disabled: true,
    },
    {
      label: 'Projects',
      href: '/#',
      disabled: true,
    },
  ] as NavItem[],
};
