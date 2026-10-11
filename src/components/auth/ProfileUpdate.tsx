"use client";

import { updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";

type ProfileUpdateProps = {
  currentName: string;
};

const ProfileUpdate = ({ currentName }: ProfileUpdateProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();

    if (name.length < 2) {
      toast.error("নাম কমপক্ষে ২ অক্ষরের হতে হবে।");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await updateUser({ name });

      if (error) {
        toast.error(error.message || "তথ্য আপডেট করা যায়নি।");
        return;
      }

      toast.success("আপনার তথ্য আপডেট হয়েছে।");
      router.push("/profile");
      router.refresh();
    } catch {
      toast.error("সার্ভারের সঙ্গে যোগাযোগ করা যায়নি।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <label className="form-control block">
        <span className="mb-1.5 block text-sm font-medium">নাম</span>
        <input
          name="name"
          type="text"
          defaultValue={currentName}
          autoComplete="name"
          minLength={2}
          required
          className="input w-full rounded-lg border-[#cad9cc] bg-white focus:border-[#05893e] focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn mt-5 w-full rounded-lg border-[#05893e] bg-[#05893e] text-white shadow-none hover:border-[#047f39] hover:bg-[#047f39] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting && <span className="loading loading-spinner loading-xs" />}
        {isSubmitting ? "আপডেট হচ্ছে..." : "তথ্য আপডেট করুন"}
      </button>
    </form>
  );
};

export default ProfileUpdate;
