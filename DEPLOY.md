# دليل رفع مشروع Reka Store على Vercel

هذا الدليل يشرح خطوات رفع المشروع على استضافة Vercel وضمان عمله بشكل صحيح.

## 1. التجهيز قبل الرفع (Pre-deployment)

تم بالفعل إصلاح مشكلة البناء (Build Error) المتعلقة بصفحة المنتجات عن طريق استخدام `Suspense`.

للتأكد من أن المشروع جاهز، يمكنك تشغيل الأمر التالي محلياً:
```bash
npm run build
```
إذا انتهى الأمر بنجاح (ظهرت رسالة `Compiled successfully`)، فالمشروع جاهز.

## 2. رفع المشروع على GitHub

1. قم بإنشاء مستودع جديد (New Repository) على GitHub.
2. ارفع ملفات المشروع عليه:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <رابط-المستودع-الخاص-بك>
git push -u origin main
```

## 3. الربط مع Vercel

1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard).
2. اضغط على **Add New...** ثم **Project**.
3. اختر **Import** بجانب مستودع GitHub الذي قمت بإنشائه.
4. في صفحة الإعدادات (Configure Project):
   - **Framework Preset**: سيتم اكتشافه تلقائياً كـ `Next.js`.
   - **Root Directory**: `./` (الافتراضي).
   - **Build Command**: `next build` (الافتراضي).
   - **Output Directory**: `.next` (الافتراضي).
   - **Environment Variables**: لا توجد متغيرات بيئة معقدة حالياً، ولكن إذا أضفت أي مفاتيح API مستقبلاً، يجب إضافتها هنا.

5. اضغط **Deploy**.

## 4. التحقق بعد الرفع

بعد انتهاء الرفع، سيعطيك Vercel رابطاً للموقع (مثلاً `reka-store.vercel.app`).
تأكد من تجربة الصفحات التالية:
- الصفحة الرئيسية.
- صفحة المنتجات (تأكد من أن الفلاتر والبحث يعملان).
- صفحة تفاصيل المنتج.

## ملاحظات هامة

- **الصور**: نستخدم صور من `unsplash` و `pravatar.cc`. تم إعداد `next.config.ts` للسماح بهذه النطاقات، لذا ستعمل الصور بشكل طبيعي.
- **الأداء**: Vercel يقوم تلقائياً بتحسين الصور والأداء.
