# HASHSHOP Inc.

E-commerce Solutions Platform

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Vercel. Make sure to set the `SLACK_WEBHOOK_URL` environment variable in your Vercel project settings.
