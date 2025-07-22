## How to Use Bitcoin Privately

**Difficulty:** ★★

Financial data is the most sensitive type of personal information. From your transaction history, one can deduce your health status, political opinions, personal tastes, and secrets you've never revealed.

The two main tools for private financial transactions are:

-   **Cash:** Anonymous and untraceable.
-   **Bitcoin:** Can be private, but you must take specific precautions.

> **A Note on "Privacy Coins" (e.g., Monero):**
> While coins like Monero are designed for privacy with a hidden ledger, they are **not a valid alternative to Bitcoin for use as money.** They suffer from significant problems: they don't preserve value over the long term, they have a much smaller user base (which can paradoxically harm privacy), and they often have a history of technical vulnerabilities.

By default, Bitcoin is **not** anonymous; it is **pseudonymous**. All transactions are recorded on a public ledger called the **blockchain**. Think of it as a giant, public notebook that everyone in the world can read. Transactions are linked to addresses (e.g., `bc1q...`), not names. However, if your real identity is ever linked to one of your addresses, your entire transaction history can be traced.

Here are the most important steps to enhance your privacy:

#### 1. Acquire Bitcoin Anonymously

The easiest way to link your identity to a Bitcoin address is by buying it from a centralized exchange (like Coinbase or Binance) that requires you to submit your ID. This is called **KYC ("Know Your Customer")**. To maintain privacy, you must acquire Bitcoin from a non-KYC source.

-   **P2P Platforms:** Use peer-to-peer platforms like [**Robosats**](http://robosats.com/) (uses the Lightning Network), [**Bisq**](https://bisq.network/), or [**Hodl Hodl**](https://hodlhodl.com/) to buy directly from other individuals using methods like bank transfers, cash, or gift cards.

#### 2. Use Your Own Node

When your wallet needs to check your balance or broadcast a transaction, it asks a Bitcoin node. If you use a random public node (the default for most simple wallets), you are leaking your addresses and transaction history to a third party.

-   **Run your own node:** For maximum privacy, run your own Bitcoin node at home using software like [**Umbrel**](https://umbrel.com/) or [**Start9**](https://start9.com/). This allows you to verify your own transactions without trusting anyone.

#### 3. Use CoinJoin

**CoinJoin** is a mixing technique that breaks the chain of traceability. Think of it like this: you and nine other people all want to make a payment. You all put your coins into a digital pot, the pot is "shaken," and then everyone gets the same amount of "new" coins out. The link between the input and output coins is broken, making it extremely difficult for an outside observer to know who paid whom.

-   **Wallets with built-in CoinJoin:**
    -   [**Sparrow Wallet**](https://sparrowwallet.com/) (Desktop): The gold standard for a feature-rich, privacy-focused desktop wallet.
    -   [**Samourai Wallet**](https://samouraiwallet.com/) (Android): A mobile wallet built from the ground up for privacy.

#### 4. Use the Lightning Network

For small, everyday payments, use the **Lightning Network**. It's a second layer built on top of Bitcoin that allows for instant, cheap, and more private transactions.

> Always use Bitcoin when purchasing privacy-oriented products and services (like a VPN or a private server) or anything you don't want to be easily linked to your real-world identity.
