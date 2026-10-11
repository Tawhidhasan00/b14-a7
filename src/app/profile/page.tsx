import SignOutButton from "@/components/auth/SignOut";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in?reason=protected");
  }

  const initials = session.user.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <header>
          <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
          <p className="mt-1 text-sm text-[#68736a]">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </header>

        <section className="flex flex-col gap-4 rounded-2xl border border-[#dbe7dc] bg-white p-5 shadow-sm sm:flex-row sm:items-center">
          <div className="flex size-20 items-center justify-center rounded-full bg-[#dff2e4] text-2xl font-bold text-[#05893e]">
            {initials || "U"}
          </div>

          <div>
            <h2 className="text-xl font-medium">{session.user.name}</h2>
            <p className="text-[#68736a]">{session.user.email}</p>
          </div>

          <div className="sm:ml-auto">
            <SignOutButton />
          </div>
        </section>

        <section className="rounded-2xl border border-[#dbe7dc] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">তথ্য আপডেট</h2>
          <p className="mt-1 text-sm text-[#68736a]">
            আপনার প্রোফাইলে দেখানো নাম পরিবর্তন করুন।
          </p>

          <Link
            href="/profile/update"
            className="btn mt-5 rounded-lg border-[#05893e] bg-[#05893e] text-white shadow-none hover:border-[#047f39] hover:bg-[#047f39]"
          >
            তথ্য আপডেট করুন
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
