import { cn } from "@/lib/utils";

type ButtonVariant = 'orange' | 'white' | 'black' | 'gray' | 'blue' | 'green' | 'red';

interface GradientButtonProps {
  text: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles = {
  orange: {
    background: `linear-gradient(to bottom, rgb(249, 115, 22), rgb(234, 88, 12))`,
    boxShadow: `0 2px 8px 0 rgba(234, 88, 12, 0.35), 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(234, 88, 12, 0.5) inset`,
    textColor: 'text-white',
    innerShadow: "0 0 0 2px rgba(255,255,255,0.10) inset, 0 1.5px 0 0 rgba(255,255,255,0.18) inset, 0 -2px 8px 0 rgba(234, 88, 12, 0.18) inset"
  },
  white: {
    background: `linear-gradient(to bottom, rgb(255, 255, 255), rgb(243, 244, 246))`,
    boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 1.5px 0 0 rgba(255,255,255,0.9) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.05) inset`,
    textColor: 'text-gray-900',
    innerShadow: "0 0 0 2px rgba(0,0,0,0.05) inset, 0 1.5px 0 0 rgba(255,255,255,0.9) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.05) inset"
  },
  black: {
    background: `linear-gradient(to bottom, rgb(31, 41, 55), rgb(17, 24, 39))`,
    boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.5), 0 1.5px 0 0 rgba(255,255,255,0.1) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.8) inset`,
    textColor: 'text-white',
    innerShadow: "0 0 0 2px rgba(255,255,255,0.05) inset, 0 1.5px 0 0 rgba(255,255,255,0.1) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.3) inset"
  },
  gray: {
    background: `linear-gradient(to bottom, rgb(107, 114, 128), rgb(75, 85, 99))`,
    boxShadow: `0 2px 8px 0 rgba(75, 85, 99, 0.35), 0 1.5px 0 0 rgba(255,255,255,0.2) inset, 0 -2px 8px 0 rgba(75, 85, 99, 0.5) inset`,
    textColor: 'text-white',
    innerShadow: "0 0 0 2px rgba(255,255,255,0.08) inset, 0 1.5px 0 0 rgba(255,255,255,0.15) inset, 0 -2px 8px 0 rgba(75, 85, 99, 0.2) inset"
  },
  blue: {
    background: `linear-gradient(to bottom, rgb(59, 130, 246), rgb(37, 99, 235))`,
    boxShadow: `0 2px 8px 0 rgba(37, 99, 235, 0.35), 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(37, 99, 235, 0.5) inset`,
    textColor: 'text-white',
    innerShadow: "0 0 0 2px rgba(255,255,255,0.10) inset, 0 1.5px 0 0 rgba(255,255,255,0.18) inset, 0 -2px 8px 0 rgba(37, 99, 235, 0.18) inset"
  },
  green: {
    background: `linear-gradient(to bottom, rgb(34, 197, 94), rgb(22, 163, 74))`,
    boxShadow: `0 2px 8px 0 rgba(22, 163, 74, 0.35), 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(22, 163, 74, 0.5) inset`,
    textColor: 'text-white',
    innerShadow: "0 0 0 2px rgba(255,255,255,0.10) inset, 0 1.5px 0 0 rgba(255,255,255,0.18) inset, 0 -2px 8px 0 rgba(22, 163, 74, 0.18) inset"
  },
  red: {
    background: `linear-gradient(to bottom, rgb(239, 68, 68), rgb(220, 38, 38))`,
    boxShadow: `0 2px 8px 0 rgba(220, 38, 38, 0.35), 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(220, 38, 38, 0.5) inset`,
    textColor: 'text-white',
    innerShadow: "0 0 0 2px rgba(255,255,255,0.10) inset, 0 1.5px 0 0 rgba(255,255,255,0.18) inset, 0 -2px 8px 0 rgba(220, 38, 38, 0.18) inset"
  }
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-1.75 text-sm',
  lg: 'px-6 py-2.5 text-base'
};

export function GradientButton({ 
  text, 
  variant = 'orange', 
  size = 'md', 
  className,
  onClick,
  disabled = false 
}: GradientButtonProps) {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative inline-block rounded-full font-medium transition-all duration-200",
        "active:scale-[0.98] flex justify-center items-center",
        "hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        variantStyle.textColor,
        sizeStyle,
        className
      )}
      style={{
        background: variantStyle.background,
        boxShadow: variantStyle.boxShadow,
      }}
    >
      <span className="relative z-10">{text}</span>
      <span
        className="absolute left-1/2 top-0 z-20 w-[80%] h-2/5 -translate-x-1/2 rounded-t-full pointer-events-none"
        style={{
          background:
            variant === 'white' 
              ? "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 80%, transparent 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 80%, transparent 100%)",
          filter: "blur(1.5px)",
        }}
      />
      <span
        className="absolute inset-0 z-0 rounded-full pointer-events-none"
        style={{
          boxShadow: variantStyle.innerShadow
        }}
      />
    </button>
  );
}