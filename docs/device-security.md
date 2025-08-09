## The Operating System: Your Digital Foundation

**Difficulty:** ★★

The **operating system (OS)** is the core software that runs your entire device (like Windows, macOS, or Linux). It's the foundation upon which all your applications and data rest. If your foundation is cracked, it doesn't matter how strong the house on top of it is. You cannot trust any privacy-focused software if it's running on a foundation you can't trust.

### Why a Closed-Source OS is a Privacy Risk

Using a closed-source OS like **Windows** or **macOS** is like living in a house built by a company that refuses to show you the blueprints. You have to trust that they didn't install hidden cameras or microphones. Because the code is secret, you have no way of verifying that the OS isn't:
-   **Spying on your activities** through telemetry and diagnostics.
-   **Sending your data** to third-party advertisers or government agencies.
-   **Undermining the security** of the privacy software you install on top of it.

For this reason, for any sensitive operations, it's best to use a secure, open-source operating system. **Linux is the most popular and well-supported choice.**

### Why is Linux More Secure?
-   **Open Source:** Its code can be reviewed by anyone, fostering transparency and trust.
-   **Permissions Model:** It has a stricter separation of privileges. It's much harder for a malicious program to gain control of the entire system.
-   **Less Targeted:** The vast majority of malware is designed to target Windows, which has a much larger market share.

### Recommended Linux Distributions

-   **Beginner:** [**Linux Mint**](https://linuxmint.com/) or [**Ubuntu**](https://ubuntu.com/). These are very user-friendly and have a familiar feel for Windows or Mac users.
-   **Intermediate:** Any distribution you are comfortable with.
-   **Advanced:** [**QubesOS**](https://www.qubes-os.org/) offers extreme security through compartmentalization. It runs different applications in separate, isolated virtual machines, so if one gets compromised, the rest of your system remains safe.
-   **Temporary System:** [**Tails**](https://tails.boum.org/) is a live OS that runs from a USB stick. It routes all traffic through Tor and erases everything when you shut it down, leaving no trace on the computer you used it on.

> ### Not Ready to Switch?
>
> You can try Linux without replacing your current OS!
> -   **Virtual Machine:** A program like [**VirtualBox**](https://www.virtualbox.org/) lets you run Linux in a window on your current desktop, just like any other app.
> -   **Dual Boot:** This installs Linux alongside your current OS, and you can choose which one to start when you turn on your computer.

---

## Hardening: Strengthening Your System

"Hardening" is the process of making your system more resistant to attacks. Think of it as reinforcing your house before a storm: you board up the windows, lock the doors, and remove anything from the yard that could be blown away.

### Windows Hardening

**Difficulty:** ★

Windows is not a private OS by default, but you can significantly improve it. The easiest way is with **[Privacy.sexy](https://privacy.sexy/)**. This website generates a **script** (a file with a list of commands) that automates dozens of hardening operations.

#### What does the script actually do?
-   **Disables Telemetry:** It stops Windows from sending diagnostic data and usage statistics back to Microsoft.
-   **Removes Bloatware:** It uninstalls pre-installed apps and advertising components that you don't need.
-   **Strengthens Security Settings:** It adjusts system policies to be more secure, for example, by disabling features that are commonly exploited by malware.

> **Warning:** Your browser or Windows might flag the script as a virus. This is a false positive. It happens because the script is designed to modify system settings, which security software can interpret as suspicious. The script is entirely open source and trustworthy.

**Remember to re-run this script every few months, as major Windows updates can revert these changes.**

### Linux Hardening

**Difficulty:** ★★★

For most users, hardening a Linux system is not strictly necessary. However, if you have a high-threat model:

-   **Easy Method:** I wrote a simple [**bash script**](https://github.com/Turtlecute33/Hardening-linux-script) to apply some basic hardening rules.
-   **Advanced Method:** The [**PrivSec blog**](https://privsec.dev/posts/linux/desktop-hardening-guide/) has an excellent, in-depth guide for locking down a Linux desktop.

---

## GrapheneOS: A Secure Mobile OS

**Difficulty:** ★★

**[GrapheneOS](https://grapheneos.org/)** is to Android phones what Linux is to PCs. It's a private, secure, open-source operating system that replaces the default, data-hungry Android OS that comes with your phone. It is the current "gold standard" for mobile security and privacy.

The easiest way to install it is via the **[Web Installer](https://grapheneos.org/install/web)**, which guides you through the process.

> If GrapheneOS isn't an option for you (it only supports Google Pixel phones), modern iPhones generally offer a higher level of security and privacy out of the box than standard Android phones.

### How GrapheneOS Protects You
-   **Hardened Kernel & Memory:** It includes advanced protections against memory corruption bugs, one of the most common types of security vulnerabilities.
-   **Sensor & Network Toggles:** You can instantly disable the camera, microphone, or network access with a single tap.
-   **"Kill Switch" PIN:** You can set up a secondary PIN that, when entered, instantly wipes all the data on the phone in an emergency.
-   **No Google Services:** By default, it has no Google apps or services, completely cutting off Google's data collection from the core of your device.
