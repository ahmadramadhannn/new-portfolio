interface Pages {
  id: number;
  name: string;
  icon: string;
  href?: string;
}

const pages: Pages[] = [
  {
    id: 1,
    name: "Home",
    icon: "bi-house",
    href: "/",
  },
  {
    id: 2,
    name: "Projects",
    icon: "bi-file-code",
    href: "/projects",
  },
  {
    id: 3,
    name: "Links",
    icon: "bi-link-45deg",
    href: "/links",
  },
  {
    id: 4,
    name: "Snippets",
    icon: "bi-files",
    href: "/snippets",
  },
  {
    id: 5,
    name: "About",
    icon: "bi-file-earmark-person",
    href: "/about",
  },
];

export default pages;
