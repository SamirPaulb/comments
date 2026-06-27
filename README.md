# 💬 Website Comments

This repository stores comments for my website using GitHub as the backend. Comments are powered by **giscus** (GitHub Discussions) and **utterances** (GitHub Issues), providing a lightweight, privacy-friendly commenting system without traditional databases.

## 🚀 How It Works

Both giscus and utterances leverage the **GitHub API** to transform this repository into a comment system:

### giscus (GitHub Discussions API)
- **Storage**: Comments are stored as GitHub Discussions in this repository
- **API Endpoint**: Uses the GitHub GraphQL API (`/graphql`) to read/write discussions
- **Authentication**: Visitors authenticate via GitHub OAuth to post comments
- **Mapping**: Each page on the website maps to a unique discussion thread based on:
  - Page pathname
  - Page URL
  - Page title
  - Discussion number (manual mapping)
- **Features**: Supports reactions, nested replies, and rich Markdown formatting

### utterances (GitHub Issues API)
- **Storage**: Comments are stored as GitHub Issues in this repository
- **API Endpoint**: Uses the GitHub REST API (`/repos/{owner}/{repo}/issues`)
- **Authentication**: Visitors authenticate via GitHub OAuth to comment
- **Mapping**: Each page maps to an issue using:
  - Issue title matching page title
  - Page pathname
  - Page URL
  - Specific issue number
- **Features**: Lightweight, simple threading, GitHub-flavored Markdown

## 🔧 Technical Implementation

### GitHub API Flow

1. **Page Load**: When a user visits a page, the embedded script fetches comments:
   ```
   GET /repos/SamirPaulb/comments/issues
   GET /graphql (for Discussions)
   ```

2. **Authentication**: When commenting, users authenticate via GitHub OAuth:
   - User clicks "Sign in with GitHub"
   - OAuth flow redirects to GitHub
   - Returns with access token

3. **Comment Creation**: Authenticated users post comments via API:
   ```
   POST /repos/SamirPaulb/comments/issues/{issue_number}/comments
   POST /graphql (mutation for Discussions)
   ```

4. **Real-time Updates**: Comments sync automatically through GitHub's API

### API Endpoints Used

**utterances (REST API)**:
- `GET /repos/{owner}/{repo}/issues` - List issues
- `POST /repos/{owner}/{repo}/issues` - Create new issue (thread)
- `GET /repos/{owner}/{repo}/issues/{issue_number}/comments` - Fetch comments
- `POST /repos/{owner}/{repo}/issues/{issue_number}/comments` - Add comment
- `PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}` - Edit comment

**giscus (GraphQL API)**:
- `query { repository { discussions } }` - Fetch discussions
- `mutation { createDiscussion }` - Create discussion thread
- `mutation { addDiscussionComment }` - Add comment
- `mutation { updateDiscussionComment }` - Edit comment
- `mutation { addReaction }` - Add reactions

## 📦 Features

✅ **No Database Required**: GitHub stores everything  
✅ **Free Forever**: Leverages GitHub's free tier  
✅ **Markdown Support**: Full GitHub-flavored Markdown  
✅ **Moderation**: Use GitHub's native moderation tools  
✅ **Privacy-Focused**: No third-party tracking  
✅ **Portable**: Export comments anytime via GitHub API  
✅ **Version Control**: Complete comment history tracked by Git  
✅ **Search**: GitHub's search works on comments  
✅ **Notifications**: Email/web notifications via GitHub  

## 🛠️ Setup

### For giscus

1. Enable Discussions in this repository
2. Install the [giscus app](https://github.com/apps/giscus)
3. Add to your website:
   ```
   <script src="https://giscus.app/client.js"
           data-repo="SamirPaulb/comments"
           data-repo-id="YOUR_REPO_ID"
           data-category="Announcements"
           data-category-id="YOUR_CATEGORY_ID"
           data-mapping="pathname"
           data-strict="0"
           data-reactions-enabled="1"
           data-emit-metadata="0"
           data-input-position="bottom"
           data-theme="preferred_color_scheme"
           data-lang="en"
           crossorigin="anonymous"
           async>
   </script>
   ```

### For utterances

1. Install the [utterances app](https://github.com/apps/utterances)
2. Add to your website:
   ```
   <script src="https://utteranc.es/client.js"
           repo="SamirPaulb/comments"
           issue-term="pathname"
           theme="github-light"
           crossorigin="anonymous"
           async>
   </script>
   ```

## 🔒 Privacy & Security

- Comments are **public** and visible to everyone
- Requires GitHub account to comment (reduces spam)
- User data follows GitHub's privacy policy
- No cookies or tracking from comment system itself
- Repository owner can moderate/delete comments
- Users can edit/delete their own comments

## 📊 Repository Structure

```
comments/
├── .github/
│   └── ISSUE_TEMPLATE/     # Templates for utterances issues
├── discussions/             # Discussions for giscus comments (virtual)
└── issues/                  # Issues for utterances comments (virtual)
```

## 🤝 Contributing

This repository is primarily for website comments, but you can:
- Report bugs in the Discussions
- Suggest features
- Help moderate comments

---

**Questions?** Open a [Discussion](https://github.com/SamirPaulb/comments/discussions) or visit [my website](https://samir.pages.dev).
