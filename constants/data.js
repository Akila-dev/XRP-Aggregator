import { icons, images } from "@/constants";

const menu_links = [
  {
    label: "About",
    url: "/#about",
  },
  {
    label: "Exchanges",
    url: "/#exchanges",
  },
  {
    label: "FAQ",
    url: "/#faq",
  },
  {
    label: "Terms of Use",
    url: "/terms-of-use",
  },
  // {
  //   label: "Contact",
  //   url: "/contact",
  // },
];

const about_us = [
  {
    p: "Ripple XRP Aggregator is a service that aggregates data from various cryptocurrency exchanges and provides real-time market data for Ripple (XRP). Our mission is to provide a one-stop-shop for cryptocurrency enthusiasts to stay up-to-date with the latest market trends and news.",
  },
  {
    h: "Our Services",
    p: "We offer the following services: Real-time market data, historical market data, and news updates on the latest cryptocurrency news.",
  },
  {
    h: "Historical Data and Insights",
    p: "We provide historical data and insights on the performance of Ripple (XRP) across various exchanges. This data can be used to make informed trading and investment decisions.",
  },
  {
    h: "User-Friendly Design",
    p: "Our design is user-friendly and easy to navigate. We aim to provide a seamless user experience for our users.",
  },
  {
    h: "Our Team",
    p: "Our team consists of experienced marketers, developers, and designers who are dedicated to providing the best possible service to our users.",
  },
  {
    h: "Our Vision",
    p: "Our vision is to become the leading provider of real-time market data for Ripple (XRP) and other cryptocurrencies in the future.",
  },
];

const contact_data = {
  name: "Ripple XRP Aggregator",
  email: "support@ripple.com",
  phone: "+1 (555) 555-5555",
  address: "123 Main St, Anytown USA",
  social_links: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ripple_xrp_agg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/ripple-xrp-aggregator",
    },
  ],
};

const faq_data = [
  {
    question: "What is Ripple XRP Aggregator?",
    answer:
      "Ripple XRP Aggregator is a service that aggregates data from various cryptocurrency exchanges and provides real-time market data for Ripple (XRP). Our mission is to provide a one-stop-shop for cryptocurrency enthusiasts to stay up-to-date with the latest market trends and news.",
  },
  {
    question: "How can I use Ripple XRP Aggregator?",
    answer:
      "To use Ripple XRP Aggregator, simply navigate to the website and click on the exchanges you want to track. You will then be able to view real-time market data and historical data for Ripple (XRP) across various exchanges.",
  },
  {
    question: "What is the difference between real-time and historical data?",
    answer:
      "Real-time data is updated in real-time and provides the latest market data. Historical data is a record of market data that is collected over a period of time. Historical data can be used to analyze trends and make informed trading and investment decisions.",
  },
  {
    question: "How can I get in touch with Ripple XRP Aggregator?",
    answer:
      "You can get in touch with us by emailing us at support@ripple.com or by submitting a support ticket on our website.",
  },
];

const terms_of_use_data = [
  {
    heading: "Introduction",
    content: [
      {
        title: "Welcome to Ripple XRP Aggregator",
        content:
          "Thank you for choosing Ripple XRP Aggregator. We are committed to providing you with the best possible service. By using our services, you agree to the following terms and conditions (“Terms”). Please read them carefully.",
      },
    ],
  },
  {
    heading: "Eligibility",
    content: [
      {
        title: "Eligibility",
        content:
          "You must be at least 18 years old to use Ripple XRP Aggregator. By using Ripple XRP Aggregator, you represent and warrant that you are of legal age to form a binding contract. If you are under 18 years old, you may only use Ripple XRP Aggregator with the consent of a parent or legal guardian.",
      },
    ],
  },
  {
    heading: "Privacy Policy",
    content: [
      {
        title: "Privacy Policy",
        content:
          "Ripple XRP Aggregator is committed to protecting your privacy. We do not collect any personal information from you except for the information you provide to us through the Ripple XRP Aggregator website. We use third-party services to provide our services, and these third-party services may collect personal information. We do not control the privacy policies of these third-party services, and we encourage you to review their privacy policies before providing personal information to them.",
      },
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    content: [
      {
        title: "Disclaimer of Warranties",
        content:
          "Ripple XRP Aggregator is provided “as is” and “as available” without any warranty of any kind, either express or implied. Ripple XRP Aggregator disclaims all implied warranties, including, without limitation, any warranty of merchantability, fitness for a particular purpose, or non-infringement. Ripple XRP Aggregator does not warrant that the functions contained in Ripple XRP Aggregator will be error-free, that defects will be corrected, or that Ripple XRP Aggregator will be free of viruses or other harmful components. Ripple XRP Aggregator does not warrant that any information or content provided by Ripple XRP Aggregator will be accurate, complete, or up-to-date. Ripple XRP Aggregator does not warrant that any errors or omissions in Ripple XRP Aggregator will be corrected. Ripple XRP Aggregator is not responsible for any damages or losses caused",
      },
    ],
  },
];

const partners_list = [
  icons.partner1,
  icons.partner2,
  icons.partner3,
  icons.partner4,
  icons.partner5,
  icons.partner6,
  icons.partner7,
  icons.partner8,
  icons.partner9,
  icons.partner10,
];

export default {
  menu_links,
  about_us,
  contact_data,
  faq_data,
  terms_of_use_data,
  partners_list,
};
