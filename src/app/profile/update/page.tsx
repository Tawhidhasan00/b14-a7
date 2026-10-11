import ProfileUpdate from "@/components/auth/ProfileUpdate";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProfileUpdatePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in?reason=protected");
  }

  return (
    <main className="mx-auto w-full max-w-xl px-4 py-12">
      <Link
        href="/profile"
        className="text-sm font-medium text-[#05893e] hover:underline"
      >
        ← প্রোফাইলে ফিরে যান
      </Link>

      <section className="mt-4 rounded-2xl border border-[#dbe7dc] bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">তথ্য আপডেট করুন</h1>
        <p className="mt-1 text-sm text-[#68736a]">
          আপনার প্রোফাইলে দেখানো নাম পরিবর্তন করুন।
        </p>

        <ProfileUpdate currentName={session.user.name} />
      </section>
    </main>
  );
}
