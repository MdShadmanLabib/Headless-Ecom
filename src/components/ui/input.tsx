import { cn } from "@/utils/cn";
import { forwardRef, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-lg border bg-bg-secondary px-3 text-body-sm text-text-primary placeholder:text-text-tertiary",
            "transition-colors duration-[var(--duration-fast)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-error focus-visible:ring-error"
              : "border-border-primary focus-visible:ring-accent",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-caption text-error">{error}</p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
