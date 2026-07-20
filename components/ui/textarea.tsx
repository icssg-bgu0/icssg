import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border border-glass-border bg-surface/80 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
