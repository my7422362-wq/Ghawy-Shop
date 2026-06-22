# GHAWY (SR Streetwear) — مشروع واجهة متجر

مشروع Front-End لواجهة **Streetwear** بطابع Neon/glassmorphism. مبني بـ **React + TypeScript + Vite** مع **TailwindCSS** و **shadcn/ui**.

> الهدف من الـ UI: Landing Page احترافية تجمع (Hero / Collections / New Arrivals / How It Works / Brand Values / Testimonials / Newsletter / FAQ / Footer) مع صفحة **Customer Registration**.

---

## محتويات الملف
- [نظرة عامة](#نظرة-عامة)
- [المميزات](#المميزات)
- [تقنيات المشروع](#تقنيات-المشروع)
- [المتطلبات قبل البدء](#المتطلبات-قبل-البدء)
- [تشغيل المشروع محليًا](#تشغيل-المشروع-محليًا)
- [بناء المشروع ونشره](#بناء-المشروع-ونشره)
- [Preview محليًا](#preview-محليًا)
- [هيكلة المشروع](#هيكلة-المشروع)
- [التخصيصات البصرية (Tailwind Theme)](#التخصيصات-البصرية-tailwind-theme)
- [الأصول (Assets)](#الأصول-assets)
- [الـ Routes](#الـ-routes)
- [Quality & Linting](#quality--linting)
- [ملاحظات مهمة](#ملاحظات-مهمة)
- [Troubleshooting](#troubleshooting)

---

## نظرة عامة
التطبيق صفحة رئيسية تجمع أقسام متدرجة (Scroll + Reveal) وتجربة UI حديثة.

- الـ Navbar ثابتة مع تأثير عند السحب للأسفل، وقائمة موبايل (Sheet).
- أقسام المنتجات تستخدم **Horizontal scrolling** + ظهور تدريجي عبر `IntersectionObserver`.
- Testimonials فيها Carousel بسيط مع Pause-on-hover.
- Newsletter فيه Form بسيط (UI-only) مع حالة إرسال.
- FAQ باستخدام Accordion من shadcn/ui.
- Customer Registration Form باستخدام **react-hook-form + Zod** للتحقق من البيانات.

---

## المميزات
- تصميم Neon + Glass UI.
- استخدام Tailwind theme مُوسع (ألوان + gradients + animations).
- أقسام متحركة مع تقنيات مثل:
  - reveal باستخدام `IntersectionObserver`
  - تأثيرات hover و transitions عبر CSS/Tailwind
- مكونات UI جاهزة من `shadcn/ui` (Button/Card/Input/Accordion/Sheet/…)
- تحسين تجربة الموبايل (mobile menu + responsive grids).
- نموذج تسجيل عميل مع validation صريح.

---

## تقنيات المشروع
- **React** (واجهة)
- **TypeScript** (نوعية وتطوير أفضل)
- **Vite** (Build/Dev server)
- **TailwindCSS** + **tailwindcss-animate** (ستايل و animations)
- **shadcn/ui** (مكتبة مكونات مبنية على Radix)
- **lucide-react** (الأيقونات)
- **react-router-dom** (Routes)
- **react-hook-form** + **zod** (Forms & validation)

---

## المتطلبات قبل البدء
- Node.js (نسخة حديثة)
- npm

---

## تشغيل المشروع محليًا
1) انتقل لمجلد التطبيق:
```bash
cd app
```

2) ثبّت الديبيندنس:
```bash
npm install
```

3) شغّل Dev Server:
```bash
npm run dev
```

ثم افتح الرابط الظاهر في الطرفية (غالبًا: `http://localhost:5173`).

---

## بناء المشروع ونشره
لبناء النسخة الإنتاجية:
```bash
npm run build
```

سيتم إنشاء Build داخل `app/dist`.

---

## Preview محليًا
للتأكد من الشكل قبل نشره:
```bash
npm run preview
```

---

## هيكلة المشروع
نظرة على أهم المجلدات والملفات:

- `app/src/App.tsx`
  - نقطة الربط بين الأقسام وRoutes.
- `app/src/main.tsx`
  - bootstrap للتطبيق.
- `app/src/components/`
  - مكونات الصفحة الرئيسية مثل:
    - `navbar.tsx`
    - `hero.tsx`
    - `featured-collections.tsx`
    - `new-arrivals.tsx`
    - `how-it-works.tsx`
    - `brand-values.tsx`
    - `testimonials.tsx`
    - `newsletter.tsx`
    - `qestion.tsx` (FAQ)
    - `footer.tsx`
    - `customer-registration.tsx` (صفحة التسجيل)
- `app/src/components/ui/`
  - مكونات `shadcn/ui` الجاهزة (Button/Card/Accordion/Sheet/etc.)
- `app/src/index.css`
  - Tailwind base + تعريف الثيمات (CSS variables) + كلاسز مساعدة (glass/gradients/etc.)
- `app/public/images/`
  - الصور المستخدمة في الأقسام.

---

## التخصيصات البصرية (Tailwind Theme)
المشروع يستخدم ثيمات مخصصة عبر:
- `app/tailwind.config.js`
  - ألوان Neon مثل: `neon-pink / neon-cyan / neon-purple`
  - Box shadows glow
  - Keyframes/Animations (float, glow-pulse, rotate-slow, fade-up, …)

وكذلك متغيرات CSS داخل `app/src/index.css`:
- `:root` (background/foreground/primary…)
- تعريف `glass`, `glass-card`, `gradient-text` وغيرها.

---

## الأصول (Assets)
الصور موجودة في:
- `app/public/images/`

والـ UI يستخدم paths مثل:
- `/images/hero-tshirt.png`
- `/images/1.jpeg` … إلخ

> ملاحظة: أي صورة جديدة لازم تنضاف داخل `app/public/images/` وتُستخدم بنفس المسار.

---

## الـ Routes
التطبيق فيه Router مع مسارين:
- `/` : صفحة الهوم (كل الأقسام الأساسية + Footer)
- `/register` : صفحة `CustomerRegistration`

---

## Quality & Linting
Commands:
- Lint:
```bash
npm run lint
```

المشروع يستخدم ESLint مع قواعد TypeScript/React.

---

## ملاحظات مهمة
- `vite.config.ts` مُعرّف alias:
  - `@` -> `./src`
  - مثال: `import { Button } from '@/components/ui/button'`

- base في Vite:
  - `base: './'`
  - مفيد لو تشغيل المشروع في سياقات مسار جزئي.

---

## Troubleshooting
- **لا يظهر ستايل/Tailwind**:
  - تأكد من تشغيل `npm install` قبل `npm run dev`.
  - جرّب حذف `node_modules` وإعادة التثبيت.

- **خطأ في الصور**:
  - راجع أن الصورة موجودة داخل `app/public/images` وأن المسار يستخدم `/images/<file>`.

- **مشاكل Router**:
  - تأكد من أنك تستخدم `BrowserRouter` (موجود) وأن صفحة `/register` تتعامل معها properly.

---

## Scripts المختصرة
من `app/package.json`:
- `npm run dev` → تشغيل التطوير
- `npm run build` → بناء إنتاجي
- `npm run preview` → Preview للإنتاج
- `npm run lint` → فحص جودة الكود

---

## لينك الديمو
> ضع رابط الديمو هنا بعد النشر على استضافة (مثل Vercel/Netlify/GitHub Pages).

- Demo: `https://YOUR-DEMO-LINK-HERE`


