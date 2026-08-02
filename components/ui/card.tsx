import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    const El = Component as React.ElementType;
    return (
      <El
        ref={ref}
        className={cn("glass rounded-2xl", className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
