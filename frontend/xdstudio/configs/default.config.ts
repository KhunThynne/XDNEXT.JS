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
      // children: [
      //   {
      //     title: "Digital",
      //     href: "/products/digital",
      //     description: "Downloadable content like eBooks and courses",
      //     children: [
      //       {
      //         title: "eBooks",
      //         href: "/products/digital/ebooks",
      //         description: "Knowledge-packed digital books",
      //         children: [],
      //       },
      //       {
      //         title: "Courses",
      //         href: "/products/digital/courses",
      //         description: "Online learning to boost your skills",
      //         children: [],
      //       },
      //     ],
      //   },
      //   {
      //     title: "Physical",
      //     href: "/products/physical",
      //     description: "Tangible products shipped to your door",
      //     children: [],
      //   },
      // ],
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
