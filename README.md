# 💬 [Website Comments](https://samirpaulb.github.io/comments/)

This repository stores comments for my websites, configs and hosts a lightweight **Comment Widget Test Bench** (`index.html`) to preview multiple comment systems.

## 🚀 Supported Comment Systems

### 1. Giscus (GitHub Discussions)
- **Reference**: [GitHub Repo](https://github.com/giscus/giscus)
- **Storage**: Uses GitHub Discussions in this repository.
- **Features**: Supports reactions, nested replies, and rich Markdown formatting. Visitors authenticate via GitHub OAuth.

### 2. Utterances (GitHub Issues)
- **Reference**: [GitHub Repo](https://github.com/utterance/utterances)
- **Storage**: Uses GitHub Issues in this repository.
- **Features**: Lightweight, simple threading, GitHub-flavored Markdown. Visitors authenticate via GitHub OAuth.

### 3. Waline
- **Reference**: [GitHub Repo](https://github.com/walinejs/waline)
- **Storage**: Self-hosted (e.g., Vercel + external database).
- **Features**: Supports anonymous comments, emails, notifications, and Markdown.

### 4. comments.app (Telegram)
- **Reference**: [comments.app](https://comments.app/) | [Telegram Docs](https://core.telegram.org/widgets/discussion)
- **Storage**: Telegram servers.
- **Features**: Uses Telegram accounts to comment. Supports likes/dislikes and attachments.

## 💻 Test Bench (`index.html`)

The [index.html](https://samirpaulb.github.io/comments/index.html) file provides a single dashboard to test all four comment systems simultaneously with light/dark theme toggling.


## 🛠️ How to use

You can edit `index.html` and replace the public IDs with your own to test your setups:

**For Giscus:**
Update the `addScript` configuration for `giscus-mount`:
```javascript
"data-repo": "SamirPaulb/comments", 
"data-repo-id": "R_kgDOQLe9bw",
"data-category": "comments",
"data-category-id": "DIC_kwDOQLe9b84CxN4R"
```

**For Utterances:**
Update the `addScript` configuration for `utterances-mount`:
```javascript
"repo": "SamirPaulb/comments"
```

**For Waline:**
Update the `serverURL` in the `mod.init()` block:
```javascript
serverURL: "https://comment-core.vercel.app"
```

**For Telegram:**
Update the `data-comments-app-website` attribute:
```javascript
"data-comments-app-website": "RplxspNA"
```

## 🔒 Privacy & Security

- **Giscus & Utterances**: Comments are public. Requires a GitHub account. Data follows GitHub's privacy policy.
- **Waline**: Self-hosted, so data privacy is governed by your own database and host.
- **Telegram**: Requires a Telegram account. Follows Telegram's privacy policy.

---

**Questions?** Open a [Discussion](https://github.com/SamirPaulb/comments/discussions) or visit [my website](https://samir.pages.dev).
