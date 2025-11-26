import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const baseClasses = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`${baseClasses} ${className}`.trim()}>{children}</div>;
}

