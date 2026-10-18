# Zstore - Arabic Clothing Storefront

متجر ملابس عربي (RTL) كامل مع لوحة تحكم، مخزون، وتتبع الطلبات.

**الرابط:** https://github.com/ziad-r-r/zstore-storefront

---

## كيفية رفع المشروع الكامل (موصى به)

لأن المشروع فيه أكتر من 200 ملف + صور، أسهل طريقة:

1. ادخل على: [https://github.com/ziad-r-r/zstore-storefront](https://github.com/ziad-r-r/zstore-storefront)
2. اضغط **Add file** → **Upload files**
3. اسحب الملف `Secure-Zstore-storefront-variants.zip` أو فك الضغط وارفع كل المجلد
4. اكتب رسالة زي `Add full project source` واضغط **Commit changes**

---

## أو باستخدام Git من جهازك

```bash
git clone https://github.com/ziad-r-r/zstore-storefront.git
cd zstore-storefront
# انسخ ملفات المشروع هنا
git add .
git commit -m "Add full Zstore source"
git push
```

---

## المتطلبات للتشغيل

- Node.js 24 + **pnpm**
- PostgreSQL (`DATABASE_URL`)
- Clerk Auth
- متغير البيئة `ZSTORE_ADMIN_EMAIL` (حالياً: `ziad41741@gmail.com`)

## الأوامر الأساسية

```bash
pnpm install
pnpm --filter @workspace/api-server run dev   # السيرفر
pnpm --filter @workspace/zstore run dev       # الواجهة
```

## ملاحظات مهمة

- المشروع مصمم أصلاً لـ **Replit** (فيه `.replit` وإعدادات Deployment).
- لو عايز تنشره على Railway أو Render أو VPS هتحتاج تعدل إعدادات Clerk وقاعدة البيانات.
- الأسعار والجنيه المصري والتوصيل (80 ج.م) موجودة في الكود.

تم إنشاء المستودع بواسطة Grok.
