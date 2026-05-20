import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-h3 font-bold text-text-primary">My Profile</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        Manage your profile information
      </p>
    </div>
  );
}
