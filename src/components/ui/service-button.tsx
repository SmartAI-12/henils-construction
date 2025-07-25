import { Button, ButtonProps } from "./button";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ServiceButtonProps = ButtonProps & {
  children: React.ReactNode;
  className?: string;
};

export function ServiceButton({
  children,
  className,
  ...props
}: ServiceButtonProps) {
  return (
    <Button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-primary hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
