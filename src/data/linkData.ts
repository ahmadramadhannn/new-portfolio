interface Links {
  id: number;
  name: string;
  accountName: string;
  href: string;
  background: string;
  icon: string;
}

const links: Links[] = [
  {
    id: 1,
    name: "Github",
    accountName: "ahmadRamadhan-dotcom",
    href: "https://github.com/ahmadRamadhan-dotcom",
    background: "github",
    icon: "bi-github",
  },
  {
    id: 2,
    name: "Telegram",
    accountName: "@ahmad_ramadhan2000",
    href: "https://t.me/ahmad_ramadhan2000",
    background: "telegram",
    icon: "bi-telegram",
  },
  {
    id: 3,
    name: "Linkedin",
    accountName: "Ahmad R",
    href: "https://www.linkedin.com/in/ahmad-r-777773202",
    background: "linkedin",
    icon: "bi-linkedin",
  },
  {
    id: 4,
    name: "Instagram",
    accountName: "@__ahmad_ramadhan",
    href: "https://www.instagram.com/__ahmad_ramadhan/",
    background: "instagram",
    icon: "bi-instagram",
  },
];

export default links;
