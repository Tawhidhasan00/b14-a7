import ProfileUpdate from '@/components/auth/ProfileUpdate';
import SignOutButton from '@/components/auth/SignOut';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';


const ProfilePage = async() => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const initials = session.user.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

    return (
      <div className="page-container py-16 ">
        <div className="mx-auto max-w-3xl space-y-6">
          <header>
            <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
            <p className="mt-1 text-sm text-[#68736a]">
              আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
            </p>
          </header>

          <section className="surface-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center bg-white rounded-2xl">
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

          <section className="surface-card p-5 bg-white rounded-2xl">
            <h2 className="text-lg font-semibold">তথ্য</h2>
            <ProfileUpdate currentName={session.user.name} />
          </section>
        </div>
      </div>
    );
};

export default ProfilePage;