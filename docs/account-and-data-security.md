## Passwords and 2FA

**Difficulty:** ★

To keep your accounts secure, you need strong passwords and a good system for managing them. This is especially important because many privacy-oriented services have **no password recovery**. If you forget your password, your account and its data are gone forever.

### How to Create Strong Passwords

For decades, we were taught to create passwords like `Tr0ub4dor&3`—short, complex, and hard to remember. This is outdated and bad advice. It's much more secure to create a **passphrase**.

-   **What is a passphrase?** A sequence of four or more random, common words, like `"correct horse battery staple"`.
-   **Why is it more secure?** The strength of a password against modern "brute-force" attacks (where a computer tries billions of combinations) depends almost entirely on its **length**. Adding symbols and numbers makes a password only slightly harder to guess, but adding more words makes it exponentially harder.
-   **Why is it better for you?** It's dramatically easier to remember.

> **The Golden Rule: Never reuse passwords.** Using the same password for multiple services is like using the same key for your house, your car, and your office. If a thief gets one key, they have access to everything. A data breach at one website could lead to all your accounts being compromised.

![A comic by xkcd that explains how password strength is calculated. It compares a hard to remember password like 'Tr0ub4dor&3' with a hard-to-guess but easy-to-remember one like 'correct horse battery staple'.](https://imgs.xkcd.com/comics/password_strength.png)

### Password Managers

It's impossible to remember a unique, strong passphrase for every account you have. The solution is a **password manager**. It's a secure, encrypted vault that stores all your passwords and can automatically generate new, strong ones for you. You only have to remember one strong master password to unlock the vault.

-   [**Bitwarden**](https://bitwarden.com/): An excellent, open-source password manager. It's secure, respects your privacy, and is easy to use across all your devices. You can even host it on your own server if you're technically inclined.
-   [**LessPass**](https://lesspass.com/): A "deterministic" password generator. It doesn't store your passwords at all. Instead, it mathematically generates the same password every time based on three pieces of information: the site, your username, and your one master password. This is an advanced option for those who don't want to store a vault anywhere.

### Two-Factor Authentication (2FA)

2FA is a critical extra layer of security. It's like needing both your key and a secret code to open a safe. Even if someone steals your password, they still can't get into your account without your 2FA code.

**Avoid using SMS for 2FA.** It's vulnerable to "SIM-swapping" attacks, where a scammer convinces your mobile provider to transfer your phone number to their SIM card. Instead, use a dedicated authenticator app or a hardware key.

-   **Authenticator Apps:** These apps generate a new, time-sensitive 6-digit code every 30 seconds.
    -   [**Aegis**](https://getaegis.app/) (Android): Perfect for maximum security, as it stores your 2FA keys offline on your device.
    -   [**Ente**](https://ente.io/auth) (iOS/Android): Offers the same quality as Aegis but includes an encrypted cloud backup so you don't lose your codes if you lose your phone.
-   **Hardware Keys:**
    -   [**Yubikey**](https://www.yubico.com/): A physical USB key you plug into your device to approve logins. This is the most secure form of 2FA currently available.

> You should enable 2FA on every sensitive account you have, especially email, financial accounts, and your password manager itself.

---

## Cloud Storage

**Difficulty:** ★

The cloud is convenient, but it means storing your data on someone else's computer. The only way to do this privately is to use **zero-knowledge, end-to-end encryption**. This means your files are encrypted on your device *before* they are uploaded, and only you have the key to decrypt them. The cloud provider cannot access your data.

1.  **Encrypt Manually:** Use a tool like [**Picocrypt**](https://picocrypt.org/) (a simple, open-source desktop tool) to encrypt your files before you drag them into a non-private cloud like Google Drive or Dropbox.
2.  **Automate with Cryptomator:** [**Cryptomator**](https://cryptomator.org/) is an open-source tool that creates an encrypted "vault" inside your cloud storage folder. Any files you put in the vault are automatically encrypted on the fly.
3.  **Use an Encrypted Cloud Provider:** Services like [**Proton Drive**](https://proton.me/drive) and [**Filen**](https://filen.io/) offer zero-knowledge, end-to-end encryption out of the box.

> You can also self-host your own cloud with [**Nextcloud**](https://nextcloud.com/), but this is a complex task not recommended for beginners.

---

## Note-Taking Applications

**Difficulty:** ★

Choosing a note-taking app is highly personal. The most important feature for privacy is **end-to-end encryption**, ensuring that not even the company that makes the app can read your notes.

-   [**Notesnook**](https://notesnook.com/): My favorite. It's freemium, cross-platform, and offers excellent features with free, end-to-end encrypted sync. (This guide was written in Notesnook).
-   [**Standard Notes**](https://standardnotes.com/): Another excellent, privacy-focused option with a focus on longevity and simplicity.
-   [**Notally**](https://notally.app/) (Android): A beautiful, simple, and clean offline note app for when you don't need cloud sync.

---

## Photos and Metadata

**Difficulty:** ★

Every photo you take contains hidden data called **metadata (or EXIF data)**. This includes:
-   The exact time and date the photo was taken.
-   The GPS location where it was taken (if location services are on).
-   The make, model, and serial number of your phone or camera.

This is a huge privacy risk. You probably don't want to share your home's exact GPS coordinates when you post a picture of your cat online.

-   **Mobile:** Use an app like [**Scrambled Exif**](https://play.google.com/store/apps/details?id=com.jarsilio.android.scrambledeggsif) on Android to remove this metadata *before* you share photos. On iOS, the built-in Photos app allows you to remove location data when sharing.
-   **Desktop:** If you're concerned about facial recognition, a tool called [**Fawkes**](https://sandlab.cs.uchicago.edu/fawkes/) can make subtle pixel-level changes to your photos (invisible to the human eye) that "cloak" your face and disrupt facial scanning tools.