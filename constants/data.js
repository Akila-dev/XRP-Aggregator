import { icons, images } from "@/constants";

const menu_links = [
  {
    label: "About Us",
    url: "/#about-us",
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
  {
    label: "Contact",
    url: "/contact",
  },
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

export default {
  menu_links,
  about_us,
  contact_data,
  faq_data,
};
