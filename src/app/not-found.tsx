import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0f5f0] px-4">
      <section className="surface-card w-full max-w-lg p-8 text-center sm:p-12">
        <div className="text-6xl" aria-hidden="true">🧺</div>
        <p className="mt-4 text-sm font-semibold text-[#05893e]">৪০৪</p>
        <h1 className="mt-2 text-2xl font-bold">পেজটি খুঁজে পাওয়া যায়নি</h1>
        <p className="mt-2 text-sm leading-6 text-[#68736a]">
          আপনি যে পণ্য, বিভাগ বা পেজটি খুঁজছেন সেটি এখানে নেই।
        </p>
        <Link href="/" className="btn mt-6 rounded-lg border-[#05893e] bg-[#05893e] text-white shadow-none hover:border-[#047f39] hover:bg-[#047f39]">
          হোম পেজে ফিরে যান
        </Link>
      </section>
    </main>
  );
}
