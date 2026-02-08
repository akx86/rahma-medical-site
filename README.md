# Rahma Medical Supplies - Technical Documentation

Welcome to the official technical documentation for **Rahma Medical Supplies** website.
This project is built using the latest modern web technologies (**Next.js 14 App Router**), focusing on high performance, security, and scalability.

---

## 📋 1. Project Overview (نظرة عامة)

This is a corporate multi-language website (Arabic & English) designed to showcase medical products, services, and partners. The architecture follows **Clean Code principles** to ensure maintainability and ease of future updates.

### Key Features Implemented:
- **Bilingual Support (i18n):** Full support for Arabic (RTL) and English (LTR) with seamless switching.
- **Dynamic Responsive Navbar:** Advanced navigation bar that adapts its size and layout based on scroll position and screen size (Mobile/Desktop).
- **Advanced Contact System:** Integrated contact form with real-time validation and email linking.
- **Interactive UI:** Smooth animations using `Framer Motion` for a premium user experience.
- **Partners Showcase:** Optimized slider for displaying client logos (e.g., SCFHS).

---

## 🛠 2. Technical Stack (التقنيات المستخدمة)

The project leverages a modern stack for optimal performance and SEO:

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | Core Framework (App Router architecture). |
| **TypeScript** | Static typing for code reliability and error prevention. |
| **Tailwind CSS** | Utility-first styling for responsive and fast UI design. |
| **Next-Intl** | Internationalization (Translation & Routing). |
| **Framer Motion** | High-performance animations. |
| **Lucide React** | Optimized vector icons. |
| **Zod + React Hook Form** | **(Security)** Schema validation for forms. |

---

## 🔒 3. Security & Validation (الأمان والتحقق)

We implemented several layers of security to protect the website and user data:

1. **Strict Input Validation (Zod Schema):**
   - All forms (Contact Us) are protected using `Zod` schemas.
   - Prevents **SQL Injection** and **XSS attacks** by sanitizing inputs before processing.
   - Ensures no empty or malicious data is submitted to the server.

2. **Environment Variables:**
   - Sensitive configuration (like API keys or Email configs) is stored in `.env.local` files, never exposed in the client-side code.

3. **Next.js Built-in Security:**
   - The project uses Next.js Image Optimization to prevent image-based attacks.
   - Headers are configured to secure HTTP requests automatically.

---

## ⚡ 4. Performance Optimization (إعدادات الأداء)

The website is optimized for speed and Google Core Web Vitals:

1. **Image Optimization:**
   - Using `next/image` component to automatically serve images in modern formats (**WebP**) and resize them based on the user's device.
   - Prevents **Layout Shift (CLS)** for a stable browsing experience.

2. **Code Splitting & Lazy Loading:**
   - Pages are loaded only when requested. Components like the "Mobile Menu" or "Modals" are loaded dynamically to reduce initial load time.

3. **Static & Dynamic Rendering:**
   - Core pages are statically optimized (SSG) where possible for lightning-fast delivery via CDN.

---

## 📂 5. Project Structure (هيكلة المشروع)

To facilitate future development, the project follows a modular structure:

```bash
├── src/
│   ├── app/              # Main application pages (App Router)
│   │   ├── [locale]/     # Dynamic route for Ar/En
│   │   │   ├── page.tsx  # Home Page
│   │   │   ├── about/    # About Us Page
│   │   │   └── contact/  # Contact Page
│   ├── components/       # Reusable UI Components
│   │   ├── ui/           # Buttons, Inputs, Cards
│   │   └── Navbar.tsx    # The main responsive header
│   ├── constants/        # Static Data (Links, Service lists)
│   ├── messages/         # Translation Files (ar.json, en.json)
│   └── lib/              # Utility functions & Validation schemas
└── public/               # Static Assets (Images, Logos)
```
## 6. Getting Started (Installation)
**If you need to move the project to a new server or continue development:**
**1. Clone the repository:**
```bash
git clone [https://github.com/akx86/rahma-medical-site](https://github.com/akx86/rahma-medical-site)
```
**2. Install dependencies:**
```bash
npm install
```
**3. Run the development server:**
```bash
npm run dev
```
**4. Build for Production:**
```bash
npm run build
npm start
```
## 📝 Notes for Future Developers
 - Editing Content: To change text, edit the JSON files located in src/messages/.
 - Adding Pages: Create a new folder in src/app/[locale]/ with a page.tsx file.
 - Styling: Use Tailwind CSS classes directly in components.

## Developed by: Ahmed Khaled Full Stack Developer (Next.js / MERN)
