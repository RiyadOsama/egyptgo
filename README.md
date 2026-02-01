# Travel Agency Web Application

## 📌 Overview

This project is a **Travel Agency Web Application** built as part of the **ITI Graduation Project**. The system allows users to explore travel destinations, browse available packages, and make bookings, while providing an **Admin Dashboard** for managing destinations, packages, and bookings.

The application focuses on **performance, scalability, and clean architecture**, leveraging modern frontend technologies and best practices.

---

## ✨ Features

### 👤 User Features

* Browse travel **Destinations** with pagination
* View available **Travel Packages**
* Book trips (authentication required)
* User authentication (Login / Register)

### 🛠️ Admin Features

* Admin Dashboard (protected routes)
* Manage destinations and packages (CRUD operations)
* View and manage bookings

### 🔐 Authentication & Authorization

* Token-based authentication
* Route protection using **Next.js Middleware**
* Role-based access (Admin vs User)

---

## 🧱 Rendering Strategy

* **ISR (Incremental Static Regeneration)**

  * Used for **Destinations pages**
  * Improves performance and SEO
  * Revalidates data every **1 hour**

* **Client-Side Rendering (CSR)**

  * Used for dynamic data such as bookings and admin dashboard
  * Powered by **React Query**

---

## ⚙️ Tech Stack

### Frontend

* **Next.js**
* **React**
* **React Query (@tanstack/react-query)**
* **Axios**
* **Tailwind CSS**

### State & Data Management

* React Query for server-state management
* Custom hooks for API interaction

### Authentication

* Cookies for storing auth tokens (used by middleware)
* Client-side authentication handling

---

## 🗂️ Project Structure

```
src/
│── app/
│   ├── dashboard/
│   ├── destinations/
│   ├── book-form/
│   ├── login/
│   └── signup/
│
│── components/
│── hooks/
│── services/
│── lib/
│   └── axios.ts
│
│── middleware.ts
```

### Structure Highlights

* **services/**: All API calls
* **hooks/**: React Query hooks
* **components/**: Reusable UI components
* **middleware.ts**: Route protection logic

---

## 🔁 Data Fetching Strategy

* **React Query** is used for:

  * Data caching
  * Background refetching
  * Error & loading state handling

* **Query Invalidation**

  * Used after create/update/delete operations
  * Ensures UI always reflects the latest server data

---

## ✅ Form Validation

* Client-side validation implemented manually for flexibility
* Ensures better UX with instant feedback
* Server-side validation is considered the source of truth

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/Mohahamed-ahmed/ITI_Graduate_Project
cd travel-agency-app
npm install
```

### Run the project

```bash
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env.local` file and add the required environment variables:

```
NEXT_PUBLIC_API_BASE_URL=your_api_url_here
```

---

## 🧠 Future Improvements

* Payment Integration

---


This project is for educational purposes as part of the ITI program.
