import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold font-heading tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
        cyan:
          "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
        purple:
          "border-accent-purple/30 bg-accent-purple/10 text-accent-purple",
        emerald:
          "border-accent-emerald/30 bg-accent-emerald/10 text-accent-emerald",
        outline:
          "border-glass-border bg-transparent text-white/70",
        glass:
          "border-glass-border bg-glass-bg backdrop-blur-sm text-white/80",
        success:
          "border-green-500/30 bg-green-500/10 text-green-400",
        warning:
          "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
        destructive:
          "border-red-500/30 bg-red-500/10 text-red-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
