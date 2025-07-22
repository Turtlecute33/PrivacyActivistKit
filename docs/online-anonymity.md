## VPN (Virtual Private Network)

**Difficulty:** ★

A VPN is one of the most fundamental tools for online privacy.

### What is a VPN and Why Do You Need One?

When you browse the internet, your device connects through your **Internet Service Provider (ISP)** (e.g., Comcast, Verizon, AT&T). Your ISP can see every website you visit, how long you stay there, and the type of content you access. They can use this to build a detailed profile about you and sell it to advertisers.

A VPN creates a **secure, encrypted tunnel** between your device and a server operated by the VPN company. It's like sending your mail through a private, armored courier instead of the public postal service.

1.  Your internet traffic is **encrypted** (scrambled) on your device.
2.  It travels through the encrypted tunnel to the VPN server.
3.  The VPN server decrypts your traffic and sends it to its final destination (the website you want to visit).

The result: Your ISP can only see that you're connected to a VPN server, but they can't see *what* you're doing. The websites you visit see the IP address of the VPN server, not your real IP address.

### What a VPN Does and Doesn't Do

| A VPN **DOES**...                                       | A VPN **DOES NOT**...                                     |
| ------------------------------------------------------- | --------------------------------------------------------- |
| ✅ Hide your IP address from websites.                  | ❌ Make you 100% anonymous.                               |
| ✅ Hide your browsing activity from your ISP.           | ❌ Protect you from malware or viruses.                   |
| ✅ Encrypt your connection on public Wi-Fi.             | ❌ Stop websites like Google or Facebook from tracking you once you log in. |
| ✅ Bypass geographic censorship.                        | ❌ Replace the need for good security habits.             |

### Choosing a VPN: The Importance of "No-Logs"

Since all your traffic is going through the VPN's servers, you are shifting your trust from your ISP to the VPN provider. It is **critical** that you choose a provider that respects your privacy. The most important factor is a strict **"no-logs" policy**, which means they do not keep any records of your activity.

The best providers go a step further and subject themselves to **independent, third-party audits** to publicly prove that they are sticking to their claims.

Here are three of the most reliable and trustworthy services:

-   [**Mullvad**](https://mullvad.net/): Based in Sweden. Excellent privacy, accepts anonymous payments.
-   [**IVPN**](https://www.ivpn.net/): Based in Gibraltar. Strong ethics and transparency.
-   [**Proton VPN**](https://protonvpn.com/): Based in Switzerland, with a great free tier.

> **Warning:** Be very careful when choosing a provider. Many highly advertised VPNs have questionable privacy policies or a history of data issues. Avoid "free" VPNs, as you are almost certainly paying with your data.

---

## Tor (The Onion Router)

**Difficulty:** ★

**Tor** provides the highest level of online anonymity available to the public. Think of it like a VPN on steroids.

### How Tor Works: The Onion Analogy

Tor works by routing your connection through at least three different volunteer-run servers around the world, wrapping your data in multiple layers of encryption, like the layers of an onion.

1.  **Entry Node:** Knows who you are (your IP address) but not where you're going.
2.  **Middle Node:** Knows only that traffic is coming from the entry node and going to the exit node. This breaks the chain of traceability.
3.  **Exit Node:** Knows your destination website but has no idea who you are.

This layered approach ensures that no single point in the chain knows both your identity and your destination, making it extremely difficult to trace the traffic back to you.

The main drawback is that it's **much slower** than a VPN. To use it, download the **[Tor Browser](https://www.torproject.org/download/)**.

> **Pro Tip:** Use Tor for your most sensitive activities: researching sensitive topics, communicating with anonymous sources, or accessing services on `.onion` websites (a special part of the internet only accessible through Tor).

---

## DNS (Domain Name System)

**Difficulty:** ★

> **Note:** If you use a trustworthy VPN, you can skip this section. Your VPN already handles your DNS requests privately.

Think of the DNS as the **phone book of the internet**. When you type a website address like `google.com`, your computer asks a DNS server to look up the corresponding IP address. By default, you use your ISP's DNS servers, which means they can log every site you visit, even if the content is encrypted.

By switching to a privacy-focused DNS provider, you can prevent this.

Some recommended DNS providers:

-   [**AdGuard DNS**](https://adguard-dns.io/): Also blocks ads and trackers.
-   [**Mullvad DNS**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/): From the trusted VPN provider.
-   [**Quad9**](https://www.quad9.net/): Focuses on blocking malicious domains.

---

## Browsers and Search Engines

**Difficulty:** ★

### Private Browsers & Fingerprinting

Your web browser knows a lot about you, and it can give you away even if you're using a VPN. Websites can identify you through a technique called **"browser fingerprinting."** This combines dozens of data points about your device (your screen resolution, installed fonts, browser version, plugins) to create a unique "fingerprint."

A standard browser like Google Chrome does nothing to prevent this. A privacy-focused browser makes you look more generic and harder to single out from the crowd.

-   **Desktop:** [**Brave**](https://brave.com/) has strong, built-in anti-fingerprinting and ad-blocking features. [**Librewolf**](https://librewolf.net/) is a privacy-hardened version of Firefox.
-   **Mobile:** **Brave** is also great on mobile. If you use GrapheneOS, **Vanadium** is the best choice.

### Private Search Engines

Google's business model is to track your searches to sell ads. To avoid this, use a private search engine that doesn't log your activity.

-   [**Brave Search**](https://search.brave.com/): Does not track you or your queries.
-   [**DuckDuckGo**](https://duckduckgo.com/): The most well-known private search engine.
-   [**Kagi**](https://kagi.com/): A premium, ad-free search engine funded entirely by its users (requires a subscription).
-   [**4Get**](https://4get.turtlecute.org/): An open-source "meta-search engine" that anonymizes your query and gets results from other engines without revealing who you are.