
import Link from "next/link";
import SignOutButton from "./SignOut";
// import SignOutButton from "./SignOutButton";

type UserDropdownProps = {
  name: string;
  email: string;
};

const Dropdown = ({ name, email }: UserDropdownProps) => {

  const firstName = name.trim().split(/\s+/)[0] || "User";
  const firstLetter = firstName.charAt(0).toUpperCase();

    return (
    <details className="dropdown dropdown-end group">
      <summary className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-lg px-1 transition-colors hover:bg-[#eef5ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05893e] [&::-webkit-details-marker]:hidden">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff2e4] font-semibold text-[#05893e]">
          {firstLetter}
        </span>
        <span className="max-w-28 truncate text-sm font-medium">{firstName}</span>
      </summary>

      <div className="dropdown-content z-50 mt-2 w-64 rounded-2xl border border-[#e1e8e1] bg-[#fafcfa] p-2 shadow-[0_4px_6px_-4px_rgb(0_0_0/0.1),0_10px_15px_-3px_rgb(0_0_0/0.1)]">
        <div className="px-3 py-2">
          <p className="truncate text-sm font-semibold text-[#1d271f]">{name}</p>
          <p className="truncate text-xs text-[#68736a]">{email}</p>
        </div>

        <Link
          href="/profile"
          className="flex min-h-8 items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-[#eef5ef] focus-visible:outline-2 focus-visible:outline-[#05893e]"
        >
          <span aria-hidden="true">👤</span>
          আমার প্রোফাইল
        </Link>

        <SignOutButton menu />


      </div>
    </details>
    );
};

export default Dropdown;