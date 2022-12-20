interface Pages {
  id: number;
  icon: string;
  href: string;
}

const pages: Pages[] = [
  {
    id: 1,
    icon: "bi-house",
    href: "/",
  },
  {
    id: 2,
    icon: "bi-file-code",
    href: "/projects",
  },
  {
    id: 3,
    icon: "bi-link-45deg",
    href: "/links",
  },
  {
    id: 4,
    icon: "bi-files",
    href: "/snippets",
  },
  {
    id: 5,
    icon: "bi-file-earmark-person",
    href: "/about",
  },
];

export default pages;
