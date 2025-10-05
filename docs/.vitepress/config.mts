import { defineConfig } from 'vitepress'
import checkbox from 'markdown-it-checkbox'

// https://vitepress.dev/reference/site-config
export default defineConfig({
      head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preload', href: '/assets/inter-italic-latin-ext.CN1xVJS-.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }],
    ['link', { rel: 'preload', href: '/assets/inter-roman-latin-ext.4ZJIpNVo.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }],
    // SEO
    ['link', { rel: 'canonical', href: 'https://privacyactivistkit.org' }],
    // Open Graph
    ['meta', { property: 'og:title', content: 'Privacy Activist Kit' }],
    ['meta', { property: 'og:description', content: 'A complete guide to digital self-defense for activists, journalists, and everyone else.' }],
    ['meta', { property: 'og:image', content: 'https://privacyactivistkit.org/pak.jpg' }],
    ['meta', { property: 'og:url', content: 'https://privacyactivistkit.org' }],
    ['meta', { property: 'og:type', content: 'website' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Privacy Activist Kit' }],
    ['meta', { name: 'twitter:description', content: 'A complete guide to digital self-defense for activists, journalists, and everyone else.' }],
    ['meta', { name: 'twitter:image', content: 'https://privacyactivistkit.org/pak.jpg' }]
  ],
  title: "Privacy Activist Kit",
  description: "A complete guide to digital self-defense for activists, journalists, and everyone else.",
  sitemap: {
    hostname: 'https://privacyactivistkit.org'
},
  markdown: {
    config(md) {
      md.use(checkbox, {
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_'
      })
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/project-mission' }
    ],
cleanUrls: true,
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
      { text: 'Bitcoin Privacy', link: '/bitcoin#bitcoin-privacy' },
      { text: 'UTXOs and Transactions', link: '/bitcoin#utxos-fees-and-transactions' },
      { text: 'Full Node', link: '/bitcoin#the-full-node' },
      { text: 'Chain Analysis', link: '/bitcoin#chain-analysis' },
      { text: 'Wallets and Security', link: '/bitcoin#wallets-security-and-seed' },
      { text: 'Acquiring Bitcoin', link: '/bitcoin#acquiring-bitcoin' },
      { text: 'Defense Strategies', link: '/bitcoin#how-to-defend-yourself' },
      { text: 'CoinJoin', link: '/bitcoin#coinjoin' }
    ]
  },
  {
    text: 'Security Checklist',
    items: [
      { text: 'Intro', link: '/activist-checklists.html#activist-digital-security-checklists' },
      { text: 'Travel & Flight Security', link: '/activist-checklists.html#%E2%9C%88%EF%B8%8F-travel-flight-security' },
      { text: 'Digital Security', link: '/activist-checklists.html#%F0%9F%8F%9B%EF%B8%8F-digital-security-for-federal-workers' },
      { text: 'Signal Security Checklist', link: '/activist-checklists.html#%F0%9F%93%B1-signal-security-checklist' },
      { text: 'Digital Security for Direct Action Organizing', link: '/activist-checklists.html#%F0%9F%93%A2-digital-security-for-direct-action-organizing' },
      { text: 'Action Research & Scouting', link: '/activist-checklists.html#%F0%9F%94%8D-action-research-scouting' },
      { text: 'Prepare for a Protest', link: '/activist-checklists.html#%E2%9C%8A-prepare-for-a-protest' },
      { text: 'Security Essentials', link: '/activist-checklists.html#%F0%9F%94%90-security-essentials' },
      { text: 'Additional Resources', link: '/activist-checklists.html#%F0%9F%93%9A-additional-resources' }
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
      { icon: 'github', link: 'https://github.com/Turtlecute33/PrivacyActivistKit' }
    ]
  }
})
