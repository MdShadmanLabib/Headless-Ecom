import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="rounded-xl border border-border-primary bg-bg-secondary p-8">
      <h1 className="text-h3 font-bold text-text-primary">Reset Password</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        Enter your email to reset your password
      </p>
    </div>
  );
}
