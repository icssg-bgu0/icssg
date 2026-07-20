import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold font-heading tracking-wide transition-all duration-300 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-accent-blue text-white shadow-glow hover:bg-accent-blue/90 hover:shadow-glow-lg active:scale-[0.98]",
        secondary:
          "bg-accent-purple text-white shadow-glow-purple hover:bg-accent-purple/90 active:scale-[0.98]",
        cyan:
          "bg-accent-cyan text-primary font-bold shadow-glow-cyan hover:bg-accent-cyan/90 active:scale-[0.98]",
        emerald:
          "bg-accent-emerald text-primary font-bold hover:bg-accent-emerald/90 active:scale-[0.98]",
        outline:
          "border border-glass-border bg-glass-bg text-white backdrop-blur-md hover:bg-glass-bg-hover hover:border-white/20 active:scale-[0.98]",
        ghost:
          "text-white/70 hover:text-white hover:bg-white/5 active:scale-[0.98]",
        link:
          "text-accent-blue underline-offset-4 hover:underline p-0 h-auto",
        gradient:
          "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-glow hover:shadow-glow-lg hover:brightness-110 active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-xs rounded-lg",
        default: "h-11 px-6 py-2",
        lg: "h-13 px-8 text-base rounded-2xl",
        xl: "h-14 px-10 text-base rounded-2xl",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
