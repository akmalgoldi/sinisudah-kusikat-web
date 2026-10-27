import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-3 py-0.5 text-sm font-black shadow-neo-xs transition-colors",
  {
    variants: {
      variant: {
        default: "bg-white text-ink",
        yellow: "bg-yellow-pop text-ink",
        mint: "bg-mint-pop text-ink",
        red: "bg-brand-red text-white",
        dark: "bg-ink text-white",
        card: "bg-canvas-cream text-ink",
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
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
