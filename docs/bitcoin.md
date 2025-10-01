# How to Use Bitcoin Privately

**Difficulty:** ★★★

Welcome to this comprehensive guide on Bitcoin privacy!

Bitcoin privacy is a complex topic, full of nuances, and requires time to be truly understood. In these pages, you'll discover the basics of how Bitcoin works so you can use it privately without fear of making mistakes. You'll learn to recognize the patterns that Chainalysis and other surveillance companies use, discover the most useful tools to disconnect your bitcoin from your identity, and see how to store them long-term with a privacy-focused approach.

Your best ally when learning something about technology is curiosity. In this guide, you'll find various wallets, sites, tools, and software. Don't feel intimidated to try new programs and don't be afraid to make mistakes: errors are part of the learning process!

I'll guide you step by step in using each tool mentioned, so experiment and play with those that seem most interesting to you. Practice reduces the possibility of errors and will make you feel more confident when using them in real situations.

*I am in no way affiliated with or paid by any of the services mentioned. I personally use most of the software you'll find in this manual.*

## Bitcoin Privacy

Banks and law enforcement say Bitcoin is a tool of the devil, useful only to criminals for laundering money and committing crimes, while detractors claim that the blockchain, being transparent, will condemn us to total surveillance because everything is transparent and traceable. So where is the truth?

Bitcoin's blockchain is indeed transparent, distributed, and readable by anyone. You can verify this yourself using one of many block explorers, such as [mempool.space](http://mempool.space) or [blockstream.info](http://blockstream.info), perhaps using a VPN or Tor.

Every user can generate an unlimited number of wallets, and each of them can contain an almost infinite number of addresses. To give you an idea, each wallet can manage about 2⁶⁷ addresses, which is 147,573,952,589,676,412,927 different addresses.

On the blockchain, you can see movements between addresses, but you cannot definitively link an address to a person or prove who owns a wallet.

Simply observing the blockchain is not enough to prove that a given address belongs to someone in particular. What you can see is only public data: the sender and recipient's address and transactions linked to them, amounts, estimated sending time, and some wallet settings that created the transaction.

![](/bitcoin/1dfed418cc5af9bf-Screenshot 2025-09-07 at 09-58-55 Transaction e5e845d9fa881da4b72d4b76f72d36df90ba267ad0213e217dd810f4fefba082 - mempool - Bitcoin Explorer.png)

This is an example of a Bitcoin transaction displayed on the blockchain with [mempool.space](http://mempool.space). The data highlighted in red is the sensitive data of a transaction, the elements that fall under so-called *fingerprinting*: all those indicators that could help identify your transaction.

In this guide, we'll delve into Lightning, CoinJoin, and the main privacy tools on Bitcoin, but the most important part is understanding how the protocol works, UTXOs, addresses, fees, and the logic that allows maintaining confidentiality.

Only then can you truly understand what you're doing, instead of just executing actions blindly on a screen, without real awareness of what's happening.

## UTXOs, Fees, and Transactions

To understand how Bitcoin transactions work, imagine that bitcoins are physical objects kept in cryptographic chests. Each chest can only be opened by whoever has the right key, and when the content is moved, it ends up in a new chest protected by a new lock.

When we receive Bitcoin, we lock it in a chest associated with our public key. To open the chest, we must use our private key to produce a cryptographic signature. A transaction is the process of opening a chest and moving its contents to a different chest, often owned by a different person.

The lock, or cryptography, keeps the bitcoin safe, while analyzing the blockchain, you can only observe the subsequent movements of the chest contents over time. Unlike the banking system, these chests, which you can imagine as the equivalent of IBANs, don't bear any name.

This is a visual example of a series of Bitcoin transactions that, starting from 1 BTC and paying a fee at each step as a reward to miners, move over time.

![](/bitcoin/d1764e77a1d7ef5e-Untitled-2025-09-07-1025.png)

UTXOs (Unspent Transaction Outputs) are the foundation of Bitcoin transactions, and the best way to explain them is using a metaphor: Bitcoin works very similarly to cash.

Imagine Alice pays Bob 45 euros. Bob now has a stack of banknotes tied with a rubber band in his pocket. When he goes to the hairdresser and spends 22 euros, he hands over the entire stack and receives 23 euros in change.

Bitcoin operates the same way: a UTXO is a stack of banknotes received in the past. If at the time of payment your UTXO is larger than the amount due, you'll receive change. The change is automatically deposited to a new address in your wallet and is itself a new UTXO.

A Bitcoin wallet can contain many UTXOs, and when you need to make a large payment, you might use multiple stacks together (multiple input UTXOs) to create a single payment of a larger amount.

![](/bitcoin/6d64a12cba4647f9-UTXO.png)

*The user is consolidating 3 input UTXOs totaling 0.23 BTC to send another user 0.22998890 BTC, while a small part is allocated to miners as a fee. In the future, when spent, UTXO D will be used as input for another transaction.*

When you make a Bitcoin transaction, many wallets (Electrum, Sparrow, Wasabi, etc.) allow you to build it manually, choosing which UTXOs to use.

In particular, Sparrow offers simple diagrams, similar to those shown above, to show you how the transaction will be composed. If you don't have much experience with UTXOs yet, I recommend trying Sparrow and [mempool.space](http://mempool.space) to observe different transactions and experiment by manually creating yours, selecting inputs.

## The Full Node

Bitcoin's blockchain is saved redundantly and replicated on all network nodes. These nodes store, verify, and distribute all transactions and blocks.

Every time you open your wallet, it shows you your balance and the bitcoin you own, but how does it know? It asks the network nodes. But what if some of these nodes were malicious and ready to collect information to spy on you?

Having a node is therefore essential to avoid having to trust third parties and to maximize your privacy.

Depending on the wallet you use, you might reveal to third-party nodes a certain number of addresses (usually 10 or 20), or your xpub, the entire wallet. If even just one of these nodes were malicious, it could definitively compromise your privacy, managing to link various elements that identify you (IP address, Bitcoin addresses, transaction amounts) and thus discover who you are, how much bitcoin you own, and how it's distributed.

To overcome this problem, there are two levels of protection:

- Use Tor when using Bitcoin (wallet, swap sites, block explorers, etc.). This not only prevents your Internet provider from knowing you're using Bitcoin but also hides your identity from the sites you visit. VPNs can be an alternative to Tor, with a slightly lower level of privacy but greater speed.

- Connect to your own Bitcoin node or to one from a trusted person.

It's not mandatory to have a personal node, although it's strongly recommended. You can safely use a friend's node, an acquaintance's, or a content creator you appreciate. This person could potentially access some data about you, but for most users, this is an acceptable compromise.

If you don't know anyone to connect to, you can also ask at Bitcoin events or meetups if someone can help you. If you want maximum independence instead, you can always create your own personal node.

There are three main ways to create your own personal node:

1. **Install Bitcoin Core on your computer**
   It's the simplest method, but also quite inconvenient. It has several limitations and requires time before you can use your wallet. Additionally, the blockchain currently weighs over 1 TB, so you need a disk dedicated only to this purpose.

2. **Use Plug&Play operating systems**
   Solutions like Umbrel, Start9, or Raspiblitz, designed for Linux or Raspberry Pi, allow you to configure a Bitcoin full node and various accessory software in a few clicks. If you've never had a Bitcoin node, this is probably the best choice. There's no system clearly superior to others: each has pros and cons based on the use you want to make of it. Feel free to test some of those mentioned above.

3. **"Power user" option**
   Following guides like [Raspibolt](http://raspibolt.org) or [Minibolt](https://minibolt.minibolt.info/), you can configure a node directly on Linux, downloading, installing, and configuring software from the command line. This is the most complete method but requires good knowledge of the command line.

There are also other versions of nodes besides Bitcoin Core, such as [Bitcoin Knots](https://bitcoinknots.org/), but for stability and security reasons, I don't feel comfortable recommending them at the moment.

Once you've installed your Bitcoin Core node, you also need to install an [Electrum server](https://github.com/romanz/electrs). This component functions as an efficient translator, allowing your node and wallet to communicate optimally.

After configuring it, you can connect your wallet to the node by entering the onion address or IP address of the node in the wallet settings.

![](/bitcoin/a723f5725929c058-6386ab78d906372cf6021c6d6677908450c94be3.png)

This step is, unfortunately, extremely complex for many. There are various tutorials on how to connect your wallet to a Bitcoin node. If you encounter problems, I recommend asking for help in various Telegram chats or watching YouTube tutorials.

## Chain Analysis

Where there's data, a surveillance market always emerges, and Bitcoin is no exception. Chainalysis, for example, is a company specializing in blockchain analysis that provides tools to governments, law enforcement, and financial institutions to track transactions. Born more than ten years ago with a few million in funding, today it's valued at about $9 billion.

Elliptic, Blockchair, Arkham, and many other blockchain analysis companies continue to spring up like mushrooms.

Chainalysis is the largest company in the sector, with over 900 employees, and is even used and paid for by the Italian government.

Today this company is essentially the market monopolist: it's the only one recognized by states as accurate enough, and every regulated exchange or service implements it. This means that, in addition to analyzing open sources like metadata and blockchain, Chainalysis also has access to data from hundreds of services and exchanges (and therefore all their clients).

Reactor is Chainalysis's proprietary software for cryptocurrency tracking. How does it work?

The basic concept is clustering: Reactor has an enormous dataset of information (exchange addresses, darknet markets, various services, and potentially also information purchased from third parties) and combines them with public blockchain data (addresses, transactions, metadata). This way it tries to create so-called "clusters," patterns that link various entities, addresses, and transactions to a single possible owner.

As advanced and precise as it is, Reactor doesn't provide certain mathematical proof, but only estimates and assumptions. Despite this, in the United States, some people have been imprisoned using Reactor, based on simple estimates, without real scientific foundation.

## Wallets, Security, and Seed

Before buying your first satoshis, you need a wallet to store them. For long-term custody, the best solutions currently are hardware wallets or using old PCs with Linux configured as signing devices.

### Hardware Wallets

There are dozens of them, and although there are many fine points and differences between one model and another, I think in the end they all more or less offer adequate security features for long-term storage.

Based on your needs, you can choose from different solutions: below you'll find those that, in my opinion, are the most interesting.

- **BitBox** is an excellent hardware wallet, easy to use, and in my opinion, the best compromise between ease and security. The interface is clear, the setup is quick and doesn't require particular skills, making it ideal for both beginners and those looking for a reliable device without complications.

- **Coldcard** offers a high level of security and is designed for expert users, but shipping from Canada is quite annoying and often involves additional taxes. It's an excellent tool for power users and those who want maximum control, however it's quite inconvenient in many daily operations, requiring more steps and time than other wallets.

- **Seedsigner** is a device that can be assembled independently, a feature that may appeal to those who love building their own hardware. It's simple to use but has some inconveniences: the camera and screen are not high quality and it requires scanning the seed at each startup. This choice increases security but could be impractical for those looking for a more immediate user experience.

- **Jade**, Blockstream's hardware wallet, is valid both in terms of security and usability. However, in my tests, I found it still immature, with various small usage problems and some bugs that limit its reliability for daily use. Among the options mentioned above, it's the one that convinced me the least.

It's advisable to buy all hardware wallets paying in Bitcoin and having them delivered to a pickup point, or buying them in person, to reduce the risk of potential online data leaks.

A final storage option, a bit more complex but in my opinion very interesting, is using an offline PC with Linux and LUKS encryption at startup.

It's essentially like having a hardware wallet: to start and decrypt it you need a password, it's never connected to the Internet, and remains completely offline. When you want to spend BTC, you can create the transaction on any PC with Internet access, transfer it via USB stick to the offline PC, sign it with a wallet like Sparrow or Electrum, then bring it back to the online PC to broadcast.

This solution allows you to use any old PC as a signing device, even an inexpensive one, avoiding reliance on so-called "secure elements," closed-source security chips present in almost all hardware wallets.

### Software Wallets

Once you've decided whether to use a dedicated hardware device or an old offline PC, you need to generate the Bitcoin wallet. A Bitcoin seed can be created in several ways:

- Generation on hardware wallet with secure element
- Generation on software wallet
- Generation with manual dice rolling
- Generation with dice rolling assisted by hardware wallet

The perfect solution doesn't exist, just like there's no ideal pair of shoes for everyone, but only the one that best fits your foot.

For advanced users, using dice rolling can be an excellent option because it allows you not to depend on RNGs (random number generators) and guarantees maximum entropy, an aspect in which computers don't excel.

A less experienced user, however, might make mistakes in the procedure, so in that case, it's safer to rely on automatic generation offered by hardware or software wallets.

If you want, even just out of curiosity, you can try generating a seed with dice. You don't need to actually use it: it can be a simple exercise or game.

![](/bitcoin/ca16298358b6cbd8-seed.png)

Many wonder whether it's better to create a 12 or 24-word seed. Both options offer a substantially equivalent level of security: it's a complex cryptographic topic, but a 24-word seed isn't automatically twice as secure as a 12-word one. The choice therefore depends on your preferences.

A 24-word seed can be useful if you think of dividing it into multiple parts, for example with [Shamir Secret Sharing](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing), while a 12-word seed is more practical to save and store.

Once you've generated the wallet, you need to decide which software to use to manage it and what type of script to adopt.

Among software, [Sparrow](https://sparrowwallet.com/) is currently the best on the market. Electrum remains a valid alternative for those already used to using it, but if we consider interface, user experience, and compatibility with various devices and standards, Sparrow is undoubtedly what I recommend.

After creating the seed and installing Sparrow (I also suggest verifying the PGP signatures of the software: on the download page you'll find a dedicated tutorial), you can proceed to choose the type of script best suited to your needs.

![](/bitcoin/fec29689e2928b97-Screenshot.png)

In the Bitcoin protocol, there are different types of addresses, and the *script type* defines their format (there are those that start with 1, 3, bc1q, etc.).

Each type presents different trade-offs in terms of privacy and security.

Currently, **Native Segwit (bc1q)** addresses represent the most balanced choice: they're the most used, offer the largest *anonymity set*, and therefore guarantee better privacy. Additionally, they provide superior security measures compared to Taproot or Legacy addresses, also being more resistant to quantum attacks.

### Passphrase and Multisig

These two topics, in my opinion, are often treated superficially by Bitcoin content creators. They're both powerful tools but also double-edged swords, with advantages and disadvantages to carefully evaluate.

The passphrase is a thirteenth or twenty-fifth word, external to the dictionary used by Bitcoin to generate a seed. In practice, it's an additional word that further protects your most important secret. A 12-word seed and a 12-word seed with passphrase generate 2 completely different wallets.

Using a passphrase increases seed security against thieves or physical attacks, but also introduces risks: after years of inactivity, you might not remember it, and in case of accidents or memory loss, it might become impossible to recover the funds.

It's essential to understand that the passphrase is extra protection in case of physical access to the seed and should not be considered a substitute for the seed's security itself. Many choose very long and complex passphrases, but it's not always the best solution. The purpose of a good passphrase is to give you the necessary time to react and move the funds if someone gets hold of your seed.

*Example:*
If you own a 12-word seed kept in a safe, you don't need to use a complex passphrase like "Bitcoin@@@123?!!!" that you'd be forced to write down to remember it. A simple but not trivial passphrase, like "priorato88," can add a sufficient level of protection to slow down a thief for hours or days, giving you time to intervene and transfer the bitcoin to another wallet.

The passphrase isn't mandatory, but it offers an excellent additional level of security against physical attacks (quite rare today) and allows advanced strategies like decoy wallets.

For example, you can use the wallet corresponding to the 12-word seed to store a small sum, while the real wallet is protected by 12 words plus passphrase. In case of aggression, you could hand over the "fake" wallet with a minimal amount of funds, thus protecting your main capital.

![](/bitcoin/611b33b28b8c2bf1-passphrase.png)

Multisig wallets are complex wallets where the wallet is divided into multiple keys, and to spend the funds, you need to have X out of Y keys.

A common example is the 3-of-5 configuration, often used by companies: to make a transaction, at least 3 administrators, out of a total of 5, must approve it.

I strongly discourage single users from using multisig wallets.

This solution adds considerable levels of complexity and makes backups more difficult to manage, significantly increasing the risk of losing access to funds. If you still decide to use a multisig setup, you must be aware of two important factors:

- **Less privacy**: multisig wallets are less common and therefore more easily recognizable and traceable on-chain.

- **More delicate backup**: it's not enough to store the seeds, but you also need to save the descriptors of each individual seed to correctly reconstruct the configuration.

In summary, for a single user, the risks almost always outweigh the security benefits that a multisig can offer.

## Acquiring Bitcoin

Once your wallet is ready, it's time to fill it with bitcoin (or satoshis). But how can you buy them?

This topic has been discussed dozens, if not hundreds of times, within the Bitcoin community.

Summarizing, there are 5 main privacy-oriented methods:

- **Non-KYC purchase platforms**
  Services like [Pocket](https://pocketbitcoin.com/) or [BitcoinVoucherBot](https://t.me/BitcoinVoucherBot?start=8175836873) allow you to buy bitcoin without having to provide your identity documents. These solutions guarantee superior privacy compared to traditional exchanges since they don't require KYC and don't custody funds, but **they don't offer total anonymity**. It's important to keep in mind that these are probably temporary options, destined to disappear in the coming years due to increasingly restrictive regulations.

- **Peer-to-peer exchange in person**
  This method offers maximum privacy but doesn't guarantee physical security, as it involves direct meeting with strangers and therefore a potential risk of theft or assault. Paying cash in person remains one of the most used methods to buy bitcoin without leaving traces.

- **P2P through dedicated platforms**
  Sites like **Robosats**, **Peach**, **Vexl**, and others allow you to buy bitcoin while maintaining an excellent level of privacy, even using digital payments. For example, in bank transfers, you can insert random transaction references to not directly link the transaction to Bitcoin. It's a particularly suitable method for small amounts.

- **Earn satoshis through work**
  It may seem obvious, but often for activities like text reviews, design work, consultations, or small tasks, many people are willing to pay directly in bitcoin. This method offers excellent privacy and allows you to accumulate satoshis gradually and safely.

- **Other extra methods**
  There are also more advanced solutions, such as **mining** or **routing on the Lightning network**, which allow you to obtain bitcoin without going through exchanges or intermediaries. However, these methods require technical skills, equipment, and investments, so they're generally not suitable for the general public.

## Chain Analysis Heuristics

There are many heuristics used to track transactions on Bitcoin's blockchain. Their number may seem enormous and scary, but almost all are based on a simple concept: humans tend to follow predictable patterns in the use of numbers and technology.

The human brain isn't truly random: it repeats recurring patterns that can be analyzed and exploited to link addresses and transactions.

It's not necessary to memorize every single rule or technique, but it's essential to understand their logical principles and motivations, so you can adopt more careful behaviors and reduce traceability.

**1. Common input ownership**
When a transaction spends multiple inputs, it's presumed that they belong to the same person because only those with the private keys can sign them and insert them into a single transaction. Grouping funds from different addresses is equivalent to declaring that you have control over all of them.

![](/bitcoin/114908d177b13ce2-image.png)

*The 2 inputs come from 2 different addresses, but logically, if they were spent together, they belonged to a single person.*

**2. Address reuse**
Receiving multiple payments to the same address allows you to easily link all associated transactions. An address's history is public, so every reuse adds data that facilitates tracking. An example of an address heavily targeted by this type of analysis is donations on websites. These often show a single static address, with years of donations made to it, public and in the clear.

![](/bitcoin/3dc926dba8f9b0bd-image.png)

*This, for example, is GrapheneOS's donation address. As visible from the image, it's possible to link 41 donations to the address, all public and viewable, for a total of 0.02540959 btc.*

**3. Round amount heuristic**
When a transaction contains an output with a "clean" or round amount, like 0.01 BTC, this is interpreted as the actual payment, while the output with an irregular amount is considered change.

![](/bitcoin/5b0b0f0596df6e4b-image.png)

*In this example, you can clearly see that one of the 2 outputs is a "round" number, namely 57000: almost always round numbers are the funds sent, while the other output is change. The human brain prefers to use numbers that are easy to remember and write, avoiding complexities.*

**4. Timing analysis**
Observing spending and receiving times reveals habits and time zones. Moving funds immediately after receiving them or at recurring times creates a temporal profile that helps link your activities.

**5. Wallet fingerprinting**
Each wallet software builds transactions slightly differently: input order, signature structure, fee calculation, and output type. These details sometimes allow recognizing the wallet used and linking different transactions from the same software.

**6. Script type matching**
The change address usually uses the same type of script as the inputs. If a transaction has outputs with different scripts, the output that corresponds to the *script type* of the inputs is often identified as change.

![](/bitcoin/d6f85f0b25e0d51c-image.png)

*The 2 inputs are addresses that start with the number 3, the outputs are one to an address starting with 3 and one to a native segwit address bc1q. This transaction is probably made by a user who combines 2 inputs and spends 0.00431358 btc to a third party and gets 0.00132675 btc in change (since change is always made to a wallet with the same type of address).*

**7. Multi-transaction analysis**
Moving funds quickly between various addresses in rapid succession may seem like a strategy to confuse chain analysis companies, but by analyzing times, amounts, and fees, observers manage to link these passages and reconstruct the path. If you want to improve the privacy of some of your UTXOs, you need to use more complex techniques.

**8. Unnecessary Input Heuristic**
This heuristic is based on analyzing transaction inputs. When multiple inputs are used to complete a payment, it often becomes evident which is the destination address.

For example, if in a transaction 2 inputs of 1 BTC each are combined, it's likely that the goal was to send an amount greater than 1 BTC but less than 2 BTC.

The presence of multiple inputs therefore facilitates the identification of both the destination address and any change from the transaction, reducing user privacy.

![](/bitcoin/c05917630d7c1023-Untitled-2025-09-07-1025.png)

*In this example, output 1 is clearly the recipient of the transaction because, if it weren't, it wouldn't have been necessary to add multiple inputs to the transaction.*

**9. Fee calculation patterns**
Each Bitcoin wallet uses different algorithms to calculate transaction fees. Some wallets set conservative and fixed fees, others use dynamic estimates based on network congestion. These different approaches create distinctive "fingerprints": for example, a wallet might allow fees with decimals like 1.1 s/Vb while others allow only round numbers.

**10. RBF (Replace-By-Fee) usage patterns**
The Replace-By-Fee function allows you to replace an unconfirmed transaction with a version that pays higher fees to speed up its confirmation. However, using RBF creates traceable patterns: some wallets enable RBF by default on all transactions, others only when necessary, and others don't support it at all. The default for almost all is RBF active.

Warning: An attacker observing the network can recognize the change address when you perform an RBF. In the *fee bump*, the change output is often reduced to leave more room for the fee, while the payment output remains identical. Noticing that only one of the two amounts changes between the original and replacement transaction, the analyst can deduce that the variable output is precisely the change address.

## How to Defend Yourself

After reading all the previous heuristics, you might feel overwhelmed by the amount of data and rules to consider.

However, it's important to understand that the weak point of chain analysis is precisely its nature: these analyses are based on fixed heuristics and predictable user behaviors.

Once you understand the mechanisms, it becomes very simple to adopt precautions to confuse tracking.

- **Break habitual patterns**
  Avoiding repetitive behaviors makes it more difficult to associate transactions with a single identity. Use different fees, times, and habits to maximize your privacy.

- **Coinjoin and mixing tools**
  Participating in collaborative transactions like coinjoins increases privacy and *anonymity set* making it complex to establish who controls which inputs and outputs.

- **Careful UTXO management**
  Moving funds in ways that don't follow classic patterns (for example, avoiding unnecessarily combining too many inputs) reduces the possibility that an analysis company identifies the recipient or change from the transaction.

- **Using multiple wallets and separate derivations**
  Keeping funds on different types of wallets (legacy, native segwit, etc.) and not reusing addresses limits direct links between various transactions.

These techniques don't guarantee absolute anonymity, but exploit the fact that chain analysis only works as long as users behave predictably.

Here are some examples of transactions that break the heuristics used to track users:

**Change spent on Lightning**

![](/bitcoin/6581248afcda9582-resto.png)

In a transaction like this, a chain analysis tool would automatically evaluate the two outputs as shown in the image, due to the different type of address used.

To confuse chain analysis companies, you can make a pay-to-many payment (where there's no change but you manually send funds to multiple addresses). This way you can send the change to an on-chain to Lightning or Liquid swap service, such as [boltz.exchange](http://boltz.exchange).

This strategy induces analysis tools to follow the change incorrectly, making it more difficult to reconstruct the path of your funds.

**Second wallet with different script type**

![](/bitcoin/a0edc2d4f825b964-secondo wallet.png)

As we've seen, analysis tools observe the script type to try to understand, in a transaction, which output represents change and which is the real recipient.

One way to confuse this heuristic is to create a secondary wallet with a different *script type* and use it as a container for change. In practice, you can send to the real recipient the funds that appear to be change, while the output that appears as payment will instead go to your secondary wallet.

This way chain analysis companies will tend to follow the wrong output.

### GENERAL RULES

There are many ways to deceive chain analysis systems, all based on the fact that these companies consider certain basic rules as axioms, which they deem always valid.

When making Bitcoin transactions, always try to hide in the largest anonymity set possible and exploit knowledge of their working method to confuse them.

Start by manually selecting the UTXOs you want to spend: this way you can check if you've made address reuse errors (UTXO with alert symbol) and choose which to send based on your privacy profile.

For example, avoid spending anonymous UTXOs and KYC-purchased UTXOs together, or don't use funds linked to your identity to purchase illegal goods.

![](/bitcoin/898783c574901bce-reuse.png)

Example of transaction and details to pay attention to while creating it on Sparrow:

![](/bitcoin/2e6c08ff5cd6bf38-tx.png)

**Summary**

- Always use your wallet connected to a personal node or one from a trusted person.

- Never reuse addresses: modern wallets automatically provide you with a new address every time you click "receive."

- Try to use the fewest possible inputs in a transaction. If you must use multiple inputs, carefully evaluate the consequences: don't mix KYC-purchased inputs or those linked to your identity with "anonymous" ones.

- Avoid repetitive patterns in the times or fees you use for transactions.

- Pay attention to change: it's always linked to the history of previous UTXOs. A good way to manage it is to avoid creating it (spending the entire UTXO) or send it to Lightning or donate it.

- Try not to make it obvious, in a transaction, which output is change and which is the recipient.

- Avoid round figures, both in satoshis and in euros or dollars, when sending funds.

- Remember that the recipient can always see which UTXO was used for payment. If you buy a coffee with an on-chain transaction spending a €50,000 UTXO, you might attract the attention of the payment recipient, who might try to attack you to try to steal the funds.

## Lightning Network

Bitcoin has a layer two, a level of abstraction above the main chain. Currently, various scalability solutions are emerging, such as Ark, but the most used is Lightning.

Lightning is a complementary layer to Bitcoin: it's instant, applies fees proportional to the amount sent, and doesn't permanently record transactions on the blockchain. All this makes it an excellent means of payment also from a privacy perspective.

It's not designed to store bitcoin long-term (or large amounts of money), but it's perfect for daily payments, even of amounts up to thousands of euros.

Lightning offers three main uses when it comes to privacy:

- **Payment layer**: you can use it to pay for VPS, online services, this guide, or even a simple coffee. Being confidential (unlike Bitcoin's blockchain, only sender and recipient know the transaction data), it offers greater privacy compared to on-chain payments.

- **Change cleaning method**: when an on-chain transaction generates change, you can send it (if it's a few hundred euros) to your Lightning wallet, many of which offer an automatic swap function, or use a service like Boltz. This way chain analysis companies will follow change that you no longer actually own.

- **Layer for "cleaning" UTXOs**: if you own a €1000 UTXO purchased with KYC, you can send it to Lightning through a service like Phoenix and then send it back on-chain in multiple transactions using services like Boltz. This method helps separate the UTXO from your identity.

In the image, I show a classic method to "clean" UTXOs using Lightning and Boltz, a completely trustless and KYC-free service that allows you to exchange Bitcoin between various layers (Lightning, on-chain, Liquid) paying only a small commission.

1. One or more on-chain UTXOs are sent to your Lightning wallet, which automatically converts them into Lightning funds. In the image example, a single UTXO worth $1000 is sent.

2. From the Lightning wallet, the funds are then transferred to Boltz, requesting a swap from Lightning to on-chain.

Instead of sending Boltz a single transaction with the entire amount, it's preferable to divide the swap into multiple transactions of smaller amounts distributed over time. This makes it more difficult to link the starting UTXO to the "cleaned" one that Boltz returns. In the example, two transactions are sent: one for $268 and one for $732, obtaining two separate UTXOs in the original wallet.

Using Boltz, instead of a service integrated into the wallet, adds a further intermediary and improves privacy: the Lightning wallet knows the origin of on-chain funds but not the final destination, while Boltz knows the destination but not the origin.

### Lightning Wallets

There are different ways to use Lightning: some advanced users prefer to self-host a node, while others choose ready-to-use solutions. In general, I don't recommend non-experts to manage an LN node; even small errors can cause loss of funds or serious privacy leaks.

If you want to use Lightning, here are three mobile wallets I recommend in order of difficulty:

- [Wallet of Satoshi](https://www.walletofsatoshi.com/) is the most used LN wallet on the market, it's *custodial* and not open source. While not great for privacy per se, it's extremely reliable and easy to use. If you've never used Lightning, this might be the most suitable service for you.

- [Phoenix](https://phoenix.acinq.co/) is an open-source, non-*custodial* Lightning wallet that allows both ease of use and excellent levels of privacy. It's the most suitable solution for those looking for a good balance between ease of use, privacy, and security.

- [Zeus](https://zeusln.com/) is an application that can be used both to manage your own LN node and to create one on your phone. It guarantees a high level of privacy but requires good knowledge of how the Lightning network works to be used.

## Liquid

Liquid is a Bitcoin sidechain with more centralized consensus, managed by a federation of industry companies, but offers the advantage of very low fees and transactions with hidden amounts.

I don't appreciate Liquid for its operation and the moral values it promotes, but it can represent an interesting alternative to Lightning as a swap layer to interrupt the traceability of a UTXO's past history.

Just like in the previous example where I explained how to use Boltz to make UTXOs private with Lightning, you can do the same with Liquid.

Always using Boltz, you can send a UTXO to Liquid (you can use [Green](https://blockstream.com/app/) as a Liquid wallet) and then send it back on-chain. The advantage of this sidechain compared to Lightning is that it also works with much larger UTXOs.

![](/bitcoin/367c2af6fcbf96c4-liquid.png)

## Privacy Coins

Those approaching the privacy world often hear about coins like Monero or ZCash, which seem to make every transaction magically anonymous, untraceable, and surveillance-proof.

Obviously, it's not like that. The supposed advantages in terms of privacy almost always come with heavy compromises, such as:

- Low *anonymity set*
- Unreliable mining (recently there was a huge 51% attack on Monero, for example)
- Poor scalability
- Centralization in development

Moreover, the famous phrase "privacy by default" that supporters of these coins love to repeat is misleading: to stay truly private, you still need to know how to use Tor, have a full node, and take other precautions.

From my point of view, it's worth investing a few hours studying Bitcoin. Exposing yourself to the risks of various altcoins doesn't make sense when the goal is only to obtain privacy: Bitcoin already offers all necessary functionality.

## Coinjoin

Coinjoin is one of the most complex topics when talking about Bitcoin privacy and often intimidates beginners. But what really is a coinjoin?

![](/bitcoin/635a628f949e42f9-COINJOIN.png)

Chain analysis companies track users mainly in two ways: following transaction inputs and trying to distinguish which outputs represent the real payment and which are change.

A coinjoin is a transaction that allows sending bitcoin in a trustless and atomic way between multiple users, breaking the heuristics according to which all inputs belong to the same person and creating multiple identical outputs. From the outside, it becomes impossible to understand which participant owns which output.

Coinjoin transactions therefore serve to disconnect a UTXO's past history. After one or more coinjoin rounds, only the UTXO owner can prove its provenance. Analyzed on the blockchain, it's like following an animal's tracks in the woods and, at a certain point, finding yourself in front of a herd that has destroyed the terrain: the tracks are lost among thousands of others.

There are different software for doing coinjoin, and they mainly differ in two aspects:

- The method by which participants connect to each other (since it's a collaborative transaction, users must be able to exchange cryptographic signatures and data anonymously)

- The structure of inputs and outputs within the transaction.

Before going into details about tools and procedures, an important premise: coinjoins are often demonized because some exchanges block funds that have participated in them.

When a UTXO is anonymized in a coinjoin, its past history becomes unreadable, but it remains evident that it took part in this type of transaction. Some centralized KYC services, if they detect this activity, might block funds.

If you think about using coinjoin, keep this possible problem in mind. In case of necessity, you can still do a swap on Lightning or Liquid to clean the output's history. This way, the company won't be able to trace back to the UTXO's history.

On [mempool.space](http://mempool.space), you can use "goggles" (the search function for specific types of transactions) to observe various coinjoin transactions within blocks. If you're curious, using block explorers and analyzing real cases of particular transactions is an excellent way to better understand Bitcoin.

![](/bitcoin/8eaf58f08a9f25b9-coinjoin mempool.png)

### Wallets for Coinjoin

There are 2 main software currently for doing coinjoin:

- [Wasabi](https://wasabiwallet.io/#download)
- [Joinmarket](https://github.com/JoinMarket-Org/joinmarket-clientserver)

They're not the only ones, but they're those that, at the moment, guarantee a level of privacy sufficient to be defined as privacy tools.

### Wasabi

Currently, this is the most solid coinjoin tool: it's simple to use and offers various very interesting privacy features by default.

- Every connection happens automatically through Tor.
- You don't need to have a Bitcoin node: Wasabi uses block filter technology that guarantees privacy even without being connected to a specific node.
- Automated coinjoin.

Using Wasabi is really simple: once you've created a wallet and selected the desired privacy level in coinjoins, just deposit funds and the mixing of your UTXOs starts automatically.

If you're asked which coordinator to use, the one with the most liquidity (and without fees) is [https://kruw.io/](https://kruw.io/), maintained by one of Wasabi's former developers.

After depositing funds to Wasabi, the various coinjoin rounds start automatically. The wallet inserts some hours of waiting between one round and another to improve transaction privacy. Once all funds have been coinjoined, you can spend them following the rules explained in previous chapters: never consolidate all coinjoined UTXOs into a single transaction, otherwise you risk compromising the privacy obtained.

If you don't need to spend the funds immediately, on Wasabi you can also set an XPUB of your hardware wallet. This way you can automatically deposit coinjoined bitcoin to your signing device (at the moment it's not possible to perform coinjoin directly from a hardware wallet).

### Joinmarket

JoinMarket is the name of the protocol, which can be used through various graphical interfaces (like [Jam](https://jamapp.org/) or [Joininbox](https://github.com/openoms/joininbox)) or via CLI.

Once installed on your computer and connected to your Bitcoin node, you can perform single coinjoin rounds or run the tumbler, a series of automated coinjoins.

JoinMarket also allows you to act as a maker, offering liquidity to other users for their coinjoins in exchange for a reward. This means that, if you're not in a hurry, you can participate in coinjoins being paid instead of paying a fee.

Explaining JoinMarket in detail in a written guide would take a lot of time. If you're interested, I've dedicated a podcast episode to this theme and written a complete guide you can follow step by step.

The main "pros and cons" of Joinmarket compared to Wasabi are:

**PROS**
- Greater flexibility and customization
- Granular UTXO control
- Greater censorship resistance
- No dependency on centralized servers

**CONS**
- Greater instability due to large data exchanges under Tor
- Requires a Bitcoin node
- Requires basic Linux knowledge
- It's on average more expensive in terms of fees than Wasabi

## Conclusion

If you've made it this far, you've already done the most important part: you've chosen to understand how Bitcoin works and how to use it more privately.

Keep these simple points in mind:

1. **Experiment with small amounts**
   Use testnet when you can, observe transactions on block explorers, and get familiar with the tools. Don't be afraid to "get your hands dirty."

2. **Connect wallet to a trusted or personal node**
   Use Tor, never reuse addresses, and always select inputs carefully.

3. **Manage change**
   Try pay-to-many, swaps to Lightning or Liquid. The goal is not to leave easy links between your transactions and change.

4. **Tools help but don't work miracles**
   Coinjoin, Lightning, and Liquid separate context from your UTXOs, but discipline and order are also needed afterward. Distraction errors are more common than you think.

5. **Take care of security**
   Backup your seed correctly, use passphrases you can remember, and keep your signing devices under control and updated.

6. **Evaluate your risk**
   Ask yourself who you want to protect yourself from, what amounts you hold, and how much time you can dedicate to computer security.

7. **Confront with others**
   Verify sources, learn from others' mistakes, and practice calmly. Participate in Bitcoin conferences and meetups: they're ideal places to exchange knowledge and receive advice.

Bitcoin is transparent, but your use can remain private if you apply these habits. Close this guide with a practical step: check backups, review wallet settings, try a test transaction.

Privacy is a continuous practice. Start today! 🐢
