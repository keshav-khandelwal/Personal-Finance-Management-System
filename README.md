# 💰 Personal Finance Management System

A full-stack SaaS platform to help users track their income and expenses, manage accounts, categorize transactions, visualize financial health, and integrate with banks – all in one modern web application.

## 🧠 Why This Project?

Managing personal finances can be overwhelming without proper tools. This app provides an intuitive and interactive dashboard that allows users to:
- Track their earnings and spending habits.
- Organize financial data by accounts and categories.
- Import bank transactions via CSV or
- View dynamic charts and insights.

---

## 🛠️ Tech Stack

| Category               | Technology Used                         |
|------------------------|------------------------------------------|
| Frontend               | **Next.js 14**, **TailwindCSS**, **Shadcn UI** |
| Backend/API            | **Hono.js**, **TypeScript**              |
| State Management       | **TanStack React Query**                |
| Authentication         | **Clerk (Core 2)**                      |
| Database & ORM         | **Neon DB (PostgreSQL)** + **Drizzle ORM** |
| Deployment             | **Vercel**                              |

---

## 🚀 Features

- 📊 **Interactive Financial Dashboard**  
  View charts, summary cards, and pie breakdowns of your finances.

- 🔁 **Customizable Charts**  
  Toggle between line, bar, and pie charts.

- 🗓 **Filters by Account & Date**  
  Easily slice your data by time period or account type.

- ➕ **Transaction Management**  
  Add, edit, and delete income/expense transactions.

- 📂 **CSV Import**  
  Quickly upload transactions in bulk via CSV.

- 🔐 **Clerk Authentication**  
  Secure sign-up/login with OAuth support.


---

## 📂 Project Structure

```
finance-app/
├── app/               # App routes and layouts (Next.js 14)
├── db/                # Drizzle ORM config and schema
├── lib/               # Utility functions
├── hooks/             # React hooks (e.g., useTransactions)
├── components/        # Reusable UI components
├── routes/            # API endpoints (Hono.js)
├── public/            # Static assets
├── styles/            # Tailwind and global styles
└── .env.local         # Environment variables
```

---

## 📷 Screenshots

![Login](https://raw.githubusercontent.com/keshav-khandelwal/keshav-khandelwal/refs/heads/main/Login.png)
![Dashboard](https://raw.githubusercontent.com/keshav-khandelwal/keshav-khandelwal/refs/heads/main/Dashboard.png)
![Transactions](https://raw.githubusercontent.com/keshav-khandelwal/keshav-khandelwal/refs/heads/main/Transactions.png)

---

## 🌐 Live Demo

**Hosted on Vercel:** [https://your-vercel-link.vercel.app](https://personal-finance-management-system-ruddy.vercel.app/)

---

## 🧪 Learning Outcomes

- Built a full-stack SaaS platform from scratch using Next.js 14 App Router
- Integrated third-party services (Plaid, Lemon Squeezy, Clerk)
- Designed modern UI with TailwindCSS and Shadcn UI
- Learned about ORM setup with Drizzle and managed PostgreSQL via Neon DB
- Used Hono.js for lightning-fast API development
- Gained practical experience with advanced React Query patterns

---

## 📝 Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/keshav-khandelwal/Personal-Finance-Management-System.git
   cd Personal-Finance-Management-System
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env.local` file and add:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   PLAID_CLIENT_ID=
   PLAID_SECRET=
   LEMON_SQUEEZY_API_KEY=
   DATABASE_URL=
   ```

4. **Run the App:**
   ```bash
   npm run dev
   ```



## 📩 Contact

- 📧 Email: keshavkhandelwal.jwr@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/keshav-khandelwal-kk/)
- 🐱 [GitHub](https://github.com/keshav-khandelwal)

---

> ⚡ _Capture your income, categorize your spending, and take control of your financial life._

