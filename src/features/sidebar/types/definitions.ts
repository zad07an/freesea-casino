export interface SidebarDataProps {
  id: string;
  name: string;
  icon: string;
  subItems: SidebarSubitemsDataProps[];
}

export interface SidebarSubitemsDataProps {
  id: string;
  name: string;
  icon: string;
  href: string;
  activeIcon: string;
}
