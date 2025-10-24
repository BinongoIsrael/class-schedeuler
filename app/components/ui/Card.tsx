import React from "react";
import "@/app/globals.css";
interface CardProps {
  variant?: "feature" | "step";
  icon?: string | React.ReactNode;
  iconText?: string | React.ReactNode;
  iconBgColor?: string;
  iconShape?: string;
  title: string;
  description: string;
  className?: string;
  [key: string]: any;
}

const Card: React.FC<CardProps> = ({
  variant = "feature",
  icon,
  iconText,
  iconBgColor,
  iconShape = "rounded-md",
  title,
  description,
  className = "",
  ...props
}) => {
  let defaultBgColor = variant !== "step" && "bg-blue-100";
  let defaultTextColor = variant === "step" ? "text-white" : "text-black";
  let isCenter = variant === "step" ? "text-center" : "";
  const effectiveBgColor = iconBgColor || defaultBgColor;
  return (
    <div
      className={`card flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm ${className} ${isCenter}`}
      {...props}
    >
      <div
        className={`icon flex items-center justify-center w-12 h-12 font-bold ${effectiveBgColor} ${defaultTextColor} ${iconShape}`}
      >
        {iconText || icon}
      </div>
      <div className="content flex-1 flex flex-col gap-3">
        <h3
          className={`${
            variant === "step" ? "text-xl" : "text-sm"
          } title text-sm font-bold`}
        >
          {title}
        </h3>
        <p
          className={`${
            variant === "step" ? "text-[15px]" : "text-sm"
          } description font-inter text-[var(--color-text-desc)]`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
