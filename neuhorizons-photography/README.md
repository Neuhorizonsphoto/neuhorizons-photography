# Neuhorizons Photography Website

A custom Next.js website for **Neuhorizons Photography**, serving clients throughout Colorado.

## Upload to GitHub

1. Create a new GitHub repository named `neuhorizons-photography`.
2. Do not add a README, .gitignore, or license on GitHub—the project already includes them.
3. Upload every file and folder in this project, or use GitHub Desktop.
4. In Vercel, select **Continue with GitHub**, choose this repository, and click **Deploy**.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Important before launch

### Contact email
The contact form currently opens an email to:

`hello@neuhorizonsphotography.com`

When that mailbox is ready, no change is needed. To use a different email, open `app/page.js` and update this line:

```jsx
action="mailto:hello@neuhorizonsphotography.com"
```

### Add social links
Add Instagram and Facebook links in the footer inside `app/page.js` when those accounts are ready.

### Connect the Namecheap domain
After Vercel deploys the site:

1. Open the Vercel project.
2. Go to **Settings → Domains**.
3. Add `neuhorizonsphotography.com` and `www.neuhorizonsphotography.com`.
4. Follow the DNS records Vercel provides and add them in Namecheap under **Domain List → Manage → Advanced DNS**.

## Photo organization
All current images are stored in `public/images`. Add future photos there, then update the `galleries` object near the top of `app/page.js`.
