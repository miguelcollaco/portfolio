import { forwardRef, ComponentProps } from "react";

import { cn } from "@/lib/utils";

const EMAIL_PATTERN = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-500/40",
            className,
          )}
          {...(type === "email" && {
            pattern: EMAIL_PATTERN,
            autoComplete: "email",
            inputMode: "email",
          })}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
