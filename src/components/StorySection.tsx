import { ReactNode } from "react";

interface StorySectionProps {
  children: ReactNode;
  className?: string;
}

export const StorySection = ({ children, className = "" }: StorySectionProps) => {
  return (
    <section className={`mb-12 animate-fade-in-up ${className}`}>
      {children}
    </section>
  );
};
