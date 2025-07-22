import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: 'PrivacyActivistKit2',
  title: "Privacy Activist Kit",
  description: "A complete guide to digital self-defense for activists, journalists, and everyone else.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/project-mission' }
    ],
sidebar: [
  {
    text: 'About',
    items: [
      { text: 'Project Mission', link: '/project-mission' },
    ]
  },
  {
    text: 'Privacy',
    items: [
      { text: 'Introduction', link: '/introduction#introduction' },
      { text: 'Understanding Privacy', link: '/introduction#understanding-privacy-in-the-digital-age' },
      { text: 'Digital Minimalism', link: '/introduction#digital-minimalism' },
      { text: 'Open Source', link: '/introduction#open-source' }
    ]
  },
  {
    text: 'Threat Modeling',
    items: [
      { text: 'Who Are You Defending Against?', link: '/threat-modeling#who-are-you-defending-against-threat-actors' },
      { text: 'Define Your Personal Threat Model', link: '/threat-modeling#how-to-define-your-personal-threat-model' }
    ]
  },
  {
    text: 'Device Security',
    items: [
      { text: 'The Operating System', link: '/device-security#the-operating-system-your-digital-foundation' },
      { text: 'Hardening Your System', link: '/device-security#hardening-strengthening-your-system' },
      { text: 'GrapheneOS', link: '/device-security#grapheneos-a-secure-mobile-os' }
    ]
  },
  {
    text: 'Online Anonymity',
    items: [
      { text: 'VPN', link: '/online-anonymity#vpn-virtual-private-network' },
      { text: 'Tor', link: '/online-anonymity#tor-the-onion-router' },
      { text: 'DNS', link: '/online-anonymity#dns-domain-name-system' },
      { text: 'Browsers and Search Engines', link: '/online-anonymity#browsers-and-search-engines' }
    ]
  },
  {
    text: 'Secure Communication',
    items: [
      { text: 'Email', link: '/secure-communication#email-your-digital-mailbox' },
      { text: 'PGP and Cryptography', link: '/secure-communication#pgp-and-cryptography' },
      { text: 'Secure Messaging', link: '/secure-communication#secure-messaging' }
    ]
  },
  {
    text: 'Accounts & Data',
    items: [
      { text: 'Passwords and 2FA', link: '/account-and-data-security#passwords-and-2fa' },
      { text: 'Cloud Storage', link: '/account-and-data-security#cloud-storage' },
      { text: 'Note-Taking Apps', link: '/account-and-data-security#note-taking-applications' },
      { text: 'Photos and Metadata', link: '/account-and-data-security#photos-and-metadata' }
    ]
  },
  {
    text: 'Bitcoin',
    items: [
      { text: 'Use Bitcoin Privately', link: '/bitcoin#how-to-use-bitcoin-privately' }
    ]
  },
  {
    text: 'Bonus Section',
    items: [
      { text: 'Large Language Models', link: '/bonus#large-language-models-llms' },
      { text: 'VPS and Domains', link: '/bonus#vps-and-internet-domains' }
    ]
  }
],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
