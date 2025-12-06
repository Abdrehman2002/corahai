# CORAH Launchpad - Setup Instructions

## Running the Application

This application requires both the **frontend** (Vite) and **backend** (Express API) servers to be running for the "Try Agent" feature to work.

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start the Backend API Server

In one terminal, run:

```bash
npm run server
```

This will start the Express server on `http://localhost:3001` which handles Retell AI web call creation.

### Step 3: Start the Frontend Dev Server

In another terminal, run:

```bash
npm run dev
```

This will start the Vite development server on `http://localhost:8081` (or another port if 8081 is busy).

### Step 4: Open Your Browser

Navigate to `http://localhost:8081` to view the application.

## Features

- **Try Our Agent for Free**: Located between the FeaturedDashboard and Pricing sections
- Select from 6 different AI agents:
  - Real Estate Receptionist
  - Medical Receptionist
  - Law Firm Receptionist
  - Spa/Salon Receptionist
  - AutoCare Receptionist
  - Fitness/Gym Receptionist
- Start a live demo call with the selected agent

## Environment Variables

Before running the application, you need to set up your environment variables:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Retell AI API key:
   ```
   RETELL_API_KEY=your_actual_retell_api_key_here
   ```

**Security Notes**:
- The `.env` file is already added to `.gitignore` to prevent accidental commits
- Never share your API key publicly or commit it to version control
- For production, use your hosting provider's environment variable management

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Node.js, Express
- **AI Voice**: Retell AI Web SDK
