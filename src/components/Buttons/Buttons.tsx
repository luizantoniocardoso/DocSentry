import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
  color?: "primary" | "secondary" | "success" | "error";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  color = "primary",
  size = "md",
  ...props
}) => {
  const colorClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    success: "bg-green-500 hover:bg-green-600",
    error: "bg-red-500 hover:bg-red-600",
  };

  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const buttonClasses = `block w-full rounded-xs duration-200 text-white leading-6 ${colorClasses[color]} ${sizeClasses[size]}`;

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
