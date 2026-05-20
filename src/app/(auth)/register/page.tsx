import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div className="rounded-xl border border-border-primary bg-bg-secondary p-8">
      <h1 className="text-h3 font-bold text-text-primary">Create Account</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        Create a new account to get started
      </p>
    </div>
  );
}
