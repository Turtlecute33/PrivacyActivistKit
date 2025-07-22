## Email: Your Digital Mailbox

**Difficulty:** ★

To function online, you need an email address. However, standard email (like Gmail) is not private. Google scans your emails to build a profile on you for advertising. For true privacy, you should use different types of email for different purposes.

### 1. Your Main Private Email

This is your trusted, reliable email for important and personal correspondence. It should be protected with **end-to-end encryption**, meaning only you and the person you're communicating with can read the content.

-   **What to look for:** A provider with a strong reputation, end-to-end encryption, a no-logs policy, and minimal data collection.
-   **Recommendations:**
    -   [**Proton.me**](https://proton.me/): The gold standard for easy-to-use, private, and secure email, based in Switzerland.
    -   [**Riseup.net**](https://riseup.net/): Excellent privacy, focused on activists, but requires an invitation to join.
    -   [**Autistici.org**](https://www.autistici.org/): Similar to Riseup, run by a volunteer collective.

### 2. Disposable Email

You often need an email to sign up for newsletters, a one-time purchase, or a service you don't fully trust. Using your main email for this is a bad idea, as it will likely end up in a data leak and be flooded with spam. For these situations, use a **disposable email address**.

-   **Recommendation:** [**cock.li**](http://cock.li/) is a provider that works over Tor and lets you create an account in seconds. It's perfect for these one-off situations.

### 3. Email Aliases

An alias is a "forwarding" address. It's a unique, fake email that forwards messages to your real inbox. This is the perfect tool for managing your online identity and compartmentalizing your digital life.

-   **How it works:** Imagine you want to sign up for Twitter, Facebook, and Instagram without them knowing they all belong to the same person. You can create three different aliases (`alias1@domain.com`, `alias2@domain.com`, `alias3@domain.com`) that all forward to your single, private inbox. If one alias starts getting spammed, you can just delete it.
-   **Recommendations:**
    -   [**SimpleLogin**](https://simplelogin.io/) (now owned by Proton)
    -   [**AnonDaddy**](https://anondaddy.com/)
    -   [**Firefox Relay**](https://relay.firefox.com/)

---

## PGP and Cryptography

**Difficulty:** ★★★

**Cryptography** is the art of sending messages in such a way that only the intended recipient can read them. **PGP (Pretty Good Privacy)** is a powerful and widely used method for encrypting email and files.

### How PGP Works: The Mailbox Analogy

Imagine you have a special mailbox with two keys:
1.  A **Public Key (the mailbox slot):** This is a long string of text you can give to anyone. People use it to encrypt messages to you. Anyone can drop a letter in the slot.
2.  A **Private Key (the mailbox key):** Only you have this key, and you must keep it secret. It's the only thing that can open the mailbox and decrypt the messages inside.

This is **asymmetric cryptography**. You can share your public key freely, and people can use it to encrypt messages that only *you* can decrypt with your private key.

### Why Use PGP?

-   **Securely send sensitive information:** Encrypting an email with PGP is the digital equivalent of sealing it in a tamper-proof safe.
-   **Verify software and communications:** Developers can "sign" their software with their private key. You can then use their public key to verify that the software is authentic and hasn't been tampered with. You can do the same with messages.

### Tools for PGP:

-   **Desktop:** [**Kleopatra**](https://www.openpgp.org/software/kleopatra/) is a great graphical tool for managing PGP keys on Windows and Linux.
-   **Android:** [**OpenKeyChain**](https://www.openkeychain.org/) is an excellent open-source client.

---

## Secure Messaging

**Difficulty:** ★

You probably use messaging apps like WhatsApp or Telegram every day. While they claim to be secure because they use **"end-to-end encryption,"** this is often not enough.

**End-to-end encryption (E2EE)** means the message is locked before it leaves your phone and can only be unlocked by the recipient. This is great, but a truly secure messenger should also be:

-   **Open Source:** So the community can verify its security claims.
-   **Minimal on Data Collection:** It shouldn't require your phone number or access to your contacts.
-   **Protective of Metadata:** Metadata is the "data about your data." Even if the content of your message is encrypted, a service might still know *who* you talked to, *when* you talked to them, and for *how long*.

### Recommended Messaging Apps:

-   [**Signal**](https://signal.org/): The easiest to use for most people. It has excellent E2EE, is developed by a non-profit, and is the industry standard. Its main drawback is that it requires your phone number to register.
-   [**XMPP**](https://xmpp.org/): A decentralized protocol, not a single app. It's the foundation upon which services like WhatsApp were built. It doesn't require personal data and is extremely stable, but it's less user-friendly than Signal.
-   [**Simplex**](https://simplex.chat/): A modern messenger that provides the best metadata protection. It requires no personal data at all—not even a phone number. It's still a bit new, but very promising for those with a high threat model.

