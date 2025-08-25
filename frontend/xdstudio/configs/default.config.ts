import { TypeConfigDefault } from "@type/config.type";
const config: TypeConfigDefault = {
  branner: "XD.TECH",
  navbar: [
    {
      title: "Home",
      href: "/",
      description: "Back to the homepage",
      children: [],
    },
    // {
    //   title: "Services",
    //   href: "/services",
    //   description: "Explore what we can do for you",
    //   children: [
    //     {
    //       title: "Web Development",
    //       href: "/services/web-development",
    //       description: "Custom websites, web apps and platforms",
    //     },
    //     {
    //       title: "Mobile Apps",
    //       href: "/services/mobile-apps",
    //       description: "iOS and Android native or cross-platform apps",
    //       children: [],
    //     },
    //   ],
    // },
    // {
    //   title: "About Us",
    //   href: "/about",
    //   description: "Learn more about our team and mission",
    //   children: [],
    // },

    {
      title: "Products",
      href: "/products",
      description: "Browse our digital and physical products",
      children: [
        {
          title: "Fivem Scripts",
          href: "/products/digital",
          description: "fivem scripts and custom scripts",
          children: [
            {
              title: "MYSHOP SCRIPTS",
              href: "/products/fivem/scripts",
              description: "Fivem product scripts",
              children: [],
            },
            {
              title: "CUSTOM SCRIPTS",
              href: "/products/fivem/custom-scripts",
              description: "Fivem custom scripts",
              children: [],
            },
          ],
        },
        {
          title: "WEBSITE",
          href: "/products/website/custom",
          description: "packages for custom website development",
          children: [],
        },
      ],
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch with us",
      children: [],
    },
  ],
};
export default config;
