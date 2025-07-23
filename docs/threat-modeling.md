# Who Are You Defending Against? A Guide to Threat Modeling

**Difficulty:** ★

Before you can protect yourself, you must understand what you're protecting yourself from. This process is called **threat modeling**, and it is the essential first step on any privacy journey. It's a structured way of thinking about the unique risks to your digital life. When it comes to privacy and security, it is crucial to be clear about **who you need to defend yourself from** and **what you need to protect**.

Balancing security, privacy, and convenience is a difficult task. Everything is a trade-off: the more secure something is, the more inconvenient it generally becomes. Because it is impossible to protect yourself against every possible threat, you should focus your energy on the ones that are most probable and most dangerous to *you*. Your privacy needs are not the same as everyone else's. A generic approach to privacy is better than nothing, but a personalized one is far more effective.

## What is a Threat?

In the context of digital security, a threat is any event that could undermine your efforts to stay private and secure. A "threat actor" is anyone who might want to compromise your privacy or security. Here are some common examples:

* **Large Tech Corporations (e.g., Google, Meta):** Their business model often revolves around collecting your data to build detailed profiles for targeted advertising and engagement.
* **Data Brokers:** These companies buy and sell personal information, gathering data from public records, social media, and the apps you use.
* **Service Providers:** Beyond just "big tech," any service you use (from your email provider to your cloud storage) could potentially access your data.
* **Governments:** Depending on your location and activities, you may be subject to government surveillance for law enforcement or intelligence gathering.
* **Cybercriminals:** These actors aim to steal your money, identity, or sensitive data for financial gain through methods like ransomware or phishing attacks.
* **A Specific, Targeted Individual:** This could be a stalker, an abusive ex-partner, a malicious co-worker, or a business rival. This is often a highly dangerous threat actor because they are personally motivated to harm you.

## How to Define Your Personal Threat Model

To build a clear picture of your privacy and security needs, ask yourself these five fundamental questions:

### 1. What assets do I want to protect?

An "asset" is anything you value and want to protect. In the digital world, this is usually information. Examples include:

* Your personal emails and instant messages
* Your private photos and files
* Your location history and contact lists
* Your financial information
* The identity of your contacts
* Your Browse habits

*Action: Make a list of your data assets, where they are stored, who has access, and what currently prevents others from accessing them.*

### 2. Who do I want to protect it from?

An "adversary" is any person or entity that poses a threat to your assets. Refer to the list of threat actors above and be specific. Is your primary concern a global corporation, a government agency, or a specific person in your life? This will dramatically change your strategy. Your boss, a former partner, business competition, or a hacker on a public network are all potential adversaries.

::: tip ACTION
List your adversaries or those who might want to access your assets. This list might be something you choose to destroy after you're done.*
:::

### 3. How likely is it that I will need to protect it?

This question is about risk. Risk is the likelihood that a specific threat will actually occur. For example, while your mobile provider has the *capability* to access your data, the *risk* of them posting it online to harm you is very low. You need to distinguish between what *could* happen and how likely it *is* to happen.

::: tip ACTION
*Assess your personal risk level. Are you a high-profile journalist or activist, or are you an everyday user looking to improve your general privacy hygiene? Write down which threats you will take seriously and which are too rare or harmless to worry about.*
:::

### 4. How bad are the consequences if I fail?

What is the worst-case scenario if an adversary gains access to your assets? The motives of adversaries vary widely, and so do their tactics. A political opponent might want to access and leak your private messages, while a corporation simply wants to show you more effective ads.

The consequences can range from annoying targeted ads and financial loss to personal embarrassment, reputational damage, legal trouble, or even physical danger.

::: tip ACTION
Think about what your adversary might want to do with your data and how severe the impact would be on your life.*
:::

### 5. How much effort am I willing to put in?

There is no perfect security solution. Be honest with yourself. Are you willing to pay for services, change your habits, or learn new, more complex software? The most secure tool is useless if you find it too inconvenient to use. A lawyer representing a client in a national security case will go to greater lengths (like using complex encrypted email) than a parent emailing cat videos to their child.

::: tip ACTION
Write down the options available to you and be realistic about any financial, technical, or social constraints you may have.*
:::

### Example Scenarios

Here’s how different people might approach threat modeling:

* <span style="color:#9b59b6;"><strong>Scenario 1:</strong></span> The Everyday User  
    * **Assets:** Browse history, shopping habits, emails.  
    * **Threat Actor:** Tech companies and advertisers.  
    * **Consequences of Failure:** Annoying targeted ads, manipulation of purchasing decisions.  
    * **Strategy:** Use a private browser, a good ad-blocker, and a privacy-focused email service. This is a low-effort, high-reward strategy.

* <span style="color:#9b59b6;"><strong>Scenario 2:</strong></span> The Political Activist  
    * **Assets:** Personal identity, location, and communications with other activists.  
    * **Threat Actor:** Government agencies, political opponents.  
    * **Consequences of Failure:** Legal trouble, physical harm, or compromising the safety of others.  
    * **Strategy:** Use end-to-end encrypted communication tools like Signal, anonymizing networks like Tor, and secure operating systems like Tails. This is a high-effort, critical-need strategy.

* <span style="color:#9b59b6;"><strong>Scenario 3:</strong></span> The Survivor of Domestic Abuse  
    * **Assets:** Physical location, new address, private online information.  
    * **Threat Actor:** An abusive ex-partner (a stalker).  
    * **Consequences of Failure:** Physical danger and harassment.  
    * **Strategy:** The focus is less on corporate surveillance and more on operational security. This includes locking down all social media, ensuring location services are disabled, and being extremely wary of phishing attempts from the abuser.


## Putting Your Threat Model into Practice: Deeper Concepts

Once you have a model, you can choose the right tools and strategies. Here are some key concepts to consider.

### Protection from Malware and Hackers

Privacy is impossible without security. Using private tools is pointless if an attacker can easily exploit your device and access your data.

* **Compartmentalization:** To minimize the damage a malicious app can do, you should use security by compartmentalization. This can mean using different computers or virtual machines for different tasks (e.g., one for banking, one for general Browse).
* **Secure Operating Systems:** Mobile operating systems like Android and iOS are generally more secure than desktop operating systems because their apps are sandboxed, meaning they are isolated from the core system and each other. On desktop, operating systems like Qubes OS are designed with a strong focus on security through virtualization.
* **Physical Security:** If you are concerned about physical attacks, use an operating system with secure verified boot (like iOS, Android, or macOS) and always enable full-disk encryption.

### Privacy from Service Providers

A primary threat for most people is the service provider itself. Your "private" messages, emails, and files are typically stored on a server, where the company can access them.

* **End-to-End Encryption (E2EE):** This is the technical solution. E2EE ensures that your data is encrypted on your device *before* it is sent to the server, and can only be decrypted by the intended recipient. The service provider only sees scrambled, encrypted data.
* **Native Apps vs. Web Apps:** When using an E2EE service, native applications (software installed directly on your computer or phone) are generally more trustworthy than web-based clients. A malicious server could secretly send different code to a web browser to steal your keys, an attack which is much harder to detect than a backdoored native app.
* **Metadata:** Even with E2EE, service providers can still see metadata: who you talk to, when, and how often. If this is part of your threat model, look for services that are specifically designed to minimize metadata collection.

### Limiting Your Public and Trackable Information

* **The Best Defense:** The most effective way to keep data private is to not put it out there in the first place. Regularly search for yourself online and request to have your information taken down where possible.
* **Segregate Identities:** Avoid cross-site tracking by using different browsers, pseudonyms, and email addresses for different areas of your life (e.g., work, personal, hobbies).
* **Check Privacy Settings:** On any account where you share information, check the privacy settings and lock them down. If a "private mode" is available, enable it to prevent your profile from being indexed by search engines.

## Common Bad Practices to Avoid

As you begin your privacy journey, be wary of these common pitfalls:

* **Solely focusing on advertising networks:** The threat is broader than just ads. It’s about data collection by *any* service provider.
* **Heavy reliance on privacy policies:** A policy is a promise, not a technical safeguard. Companies can change their policies, get acquired, or suffer a data breach.
* **Blindly shifting trust:** Don't just switch from a "big tech" provider to a "small tech" provider without understanding the underlying technology. If the new provider has the same access to your data, you haven't solved the root problem.
* **Blindly trusting open-source software:** While transparency is good, open-source does not automatically mean secure or private. Evaluate software based on its security properties and history, not just its license.

By spending a few minutes thinking through your threat model, you can move beyond generic advice and focus your energy on the solutions that provide the most protection for *your* specific situation.