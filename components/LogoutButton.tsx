'use client';

import { SignOutButton } from "@clerk/nextjs";

export default function LogoutButton() {
  return (
    <SignOutButton>
      <button
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all shadow-md"
      >
        Logout
      </button>
    </SignOutButton>
  );
}
