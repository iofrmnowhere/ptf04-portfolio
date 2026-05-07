import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "default" | "lg";
};

export function buttonVariants({ variant = "default", size = "default", className = "" }: { variant?: "default" | "outline", size?: "default" | "lg", className?: string } = {}) {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = variant === "outline" 
    ? "border-2 border-black bg-background hover:bg-muted text-foreground" 
    : "border-2 border-black bg-primary text-primary-foreground hover:bg-primary/90";
    
  const sizeClasses = size === "lg" ? "h-10 px-6 text-base" : "h-9 px-4 text-sm";
  
  return `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();
}

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
