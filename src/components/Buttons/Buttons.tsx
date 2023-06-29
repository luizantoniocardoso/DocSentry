import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
  color?: "primary" | "secondary" | "success" | "error" | "transparent";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  className,
  color = "primary",
  size = "md",
  loading = false,
  ...props
}) => {
  const colorClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    success: "bg-green-500 hover:bg-green-600",
    error: "bg-red-500 hover:bg-red-600",
    transparent: "bg-transparent",
  };

  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const buttonClasses = `block  disabled:cursor-block rounded-xs duration-200 text-white leading-6 ${colorClasses[color]} ${className} ${sizeClasses[size]}`;

  return (
    <button disabled={loading} {...props} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
