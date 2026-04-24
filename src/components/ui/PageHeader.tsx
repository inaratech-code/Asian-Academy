import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  category?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, description, category, children }: PageHeaderProps) {
  return (
    <header className="bg-white border-b border-navy/10 pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-gold to-navy" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
        <div className="max-w-2xl">
          {category && (
            <span className="text-teal font-sans tracking-widest uppercase text-sm font-semibold mb-4 block">
              {category}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-serif text-navy leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-navy/70 font-sans font-light max-w-xl">
              {description}
            </p>
          )}
        </div>
        
        {children && (
          <div className="md:ml-auto">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
