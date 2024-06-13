import { useState, useEffect } from 'react';

interface MenuLink {
  link: string;
  icon: string;
  info: string;
}

const useMenuLink = (): MenuLink[] => {
  const [menus, setMenus] = useState<MenuLink[]>([]);

  const links: MenuLink[] = [
    {
      link: `#experience`,
      icon: `🏠`,
      info: `Experiences`
    },
    {
      link: '#project',
      icon: `📂`,
      info: `Projects`
    },
    {
      link: '#stack',
      icon: `🛠`,
      info: `Stacks`
    },
    {
      link: '#about',
      icon: `👨‍🚀`,
      info: 'About'
    },
  ];

  useEffect(() => {
    setMenus(links);
  }, []);

  return menus;
}

export default useMenuLink;
