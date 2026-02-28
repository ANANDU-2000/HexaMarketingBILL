import Link from "next/link";

export default function ArHomePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-navy text-text-primary pt-24 px-4 pb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-dm font-bold text-2xl mb-4 leading-snug">
          HexaBill — برنامج فواتير الإمارات لموزعي B2B
        </h1>
        <p className="text-text-secondary text-base mb-8 leading-relaxed">
          النسخة العربية قيد الإعداد. يمكنك استخدام الموقع بالإنجليزية.
        </p>
        <Link
          href="/"
          className="text-primary hover:underline font-medium"
        >
          EN — English
        </Link>
      </div>
    </div>
  );
}
