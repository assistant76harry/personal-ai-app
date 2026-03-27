# Personal AI Assistant

Your all-in-one AI assistant for finances, scheduling, and life management.

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. Clone the repo:
```bash
git clone https://github.com/assistant76harry/personal-ai-app.git
cd personal-ai-app
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173

## Features

- **Dashboard** - View balances, spending, recent transactions
- **Budget** - Track spending against monthly limits
- **Bills** - See upcoming bills and due dates
- **AI Chat** - Ask questions about your finances
- **Settings** - Connect bank accounts

## Tech Stack

- React + Vite
- TailwindCSS
- Plaid (banking API)
- Supabase (database)
- OpenClaw (AI)

## Deployment

Deploy to Vercel:
1. Go to https://vercel.com
2. Import the GitHub repo
3. Deploy!

## Environment Variables (for production)

```
VITE_PLAID_CLIENT_ID=your_plaid_client_id
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

---

*Building the future of personal AI.*
