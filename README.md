# Chaney Karechu — Portfolio

A complete Next.js App Router portfolio starter built with TypeScript, Tailwind CSS 4, Framer Motion, and lucide-react. The design uses a light editorial palette, oversized type, abstract initials artwork, and responsive layouts. It does not require image assets.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

1. Open this folder in VS Code.
2. In the integrated terminal, run:

   ```bash
   npm install
   npm run dev
   ```

3. Open <http://localhost:3000>.

For a production build, run `npm run build`, then `npm start`.

## Personalize before publishing

Open `src/app/page.tsx` and replace the clearly marked placeholders:

- Contact email in both `mailto:ADD_YOUR_EMAIL@example.com` links.
- GitHub and LinkedIn URLs (`ADD_YOUR_USERNAME`). Remove a social link if you do not want it shown.
- Education programme and year.
- Hobby labels in the `hobbies` array.
- Project descriptions, repository/demo links, and details to match the real work.

The portfolio deliberately does not claim project outcomes, dates, metrics, or testimonials. The profile card uses initials rather than a photo. Change the page title and description in `src/app/layout.tsx` if needed.

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com/new), import the repository, and keep the detected Next.js settings.
3. Select **Deploy**. No environment variables are needed for this starter.

You can also install the Vercel CLI and run `vercel` from this folder, then use `vercel --prod` for production.

## Deploy to Netlify

1. Push this project to a Git repository.
2. In [Netlify](https://app.netlify.com/start), choose **Add new site → Import an existing project** and select the repository.
3. Use the Next.js runtime (Netlify automatically detects the Next.js framework). Build command: `npm run build`. Publish directory: leave the framework default; do not set a static publish directory.
4. Select **Deploy site**. No environment variables are needed for this starter.

## Project structure

```text
src/app/
  globals.css   Tailwind import and responsive editorial styles
  layout.tsx    Root document, metadata, and global stylesheet import
  page.tsx      Portfolio sections and editable content
```
