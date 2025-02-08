// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Don't Die Community",
  tagline:
    "NOT OFFICIAL. Community-created documentation and learnings from the Don't Die Community.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://dontdie.art",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dholliday", // Usually your GitHub org/user name.
  projectName: "dd_community_docs", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [require.resolve("docusaurus-lunr-search")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/dholliday/dd_community_docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/dholliday/dd_community_docs/tree/main/blog",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: "img/dd.png",
      navbar: {
        title: "Don't Die Community",
        logo: {
          alt: "Don't Die Community",
          src: "img/dd.png",
        },
        items: [
          { to: "docs/mind/intro", label: "MIND", position: "left" },
          { to: "docs/body/intro", label: "BODY", position: "left" },
          { to: "docs/sleep/intro", label: "SLEEP", position: "left" },
          { to: "docs/eat/intro", label: "EAT", position: "left" },
          {
            href: "https://dontdieapp.com",
            label: "DD App",
            position: "right",
          },
          {
            href: "https://github.com/dholliday/dd_community_docs",
            label: "Contribute to Content",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "ABOUT",
            items: [
              {
                html: "Bryan Johnson is history's most measured human; has the best comprehensive biomarkers in the world, and doesn't take himself too seriously.",
              },
              {
                label: "DD MOVEMENT",
                href: "https://citizenship.dontdie.com/",
              },
              {
                label: "DOCUMENTARY",
                href: "https://www.netflix.com/title/81757532",
              },
            ],
          },
          {
            title: "FOLLOW",
            items: [
              {
                label: "INSTAGRAM",
                href: "https://www.instagram.com/bryanjohnson_/",
              },
              {
                label: "X",
                href: "https://www.x.com/bryan_johnson",
              },
              {
                label: "YOUTUBE",
                href: "https://www.youtube.com/@BryanJohnson",
              },
            ],
          },
          {
            title: "JOIN THE MOVEMENT",
            items: [
              {
                label: "CITIZENSHIP",
                href: "https://dontdie.com/#",
              },
              {
                label: "SUMMIT",
                href: "https://dontdiesummit.com/",
              },
              {
                label: "DON'T DIE APP",
                href: "https://dontdieapp.com/",
              },
              {
                label: "PROTOCOL",
                href: "https://blueprint.bryanjohnson.com/",
              },
            ],
          },
        ],
        copyright: `No Copyright. Open Source. Community-Driven. Don't Die.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
