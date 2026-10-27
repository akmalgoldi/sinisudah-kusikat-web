import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-black transition-all duration-200 ease-bounce-pop border-2.5 border-ink cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-white shadow-neo hover:bg-brand-red hover:text-white hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-xs",
        brand:
          "bg-brand-red text-white shadow-neo hover:bg-ink hover:text-white hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-xs",
        secondary:
          "bg-white text-ink shadow-neo hover:bg-yellow-pop hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-xs",
        yellow:
          "bg-yellow-pop text-ink shadow-neo hover:bg-white hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-xs",
        footer:
          "bg-yellow-pop text-ink shadow-neo-dark hover:bg-white hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] border-2 border-ink",
        header:
          "bg-yellow-pop text-ink shadow-neo-xs hover:bg-white hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] active:translate-x-[1.5px] active:translate-y-[1.5px] border-2 border-ink py-1.5 px-3.5 text-sm",
      },
      size: {
        default: "min-h-[48px] px-6 py-2.5 text-base",
        sm: "h-9 min-[380px]:h-10 px-3.5 py-1 text-sm",
        lg: "min-h-[50px] sm:min-h-[52px] px-7 py-3 text-base sm:text-lg",
        full: "w-full min-h-[48px] px-4 py-2.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
