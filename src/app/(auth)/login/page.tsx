import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="rounded-xl border border-border-primary bg-bg-secondary p-8">
      <h1 className="text-h3 font-bold text-text-primary">Sign In</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        Sign in to your account to continue
      </p>
    </div>
  );
}
