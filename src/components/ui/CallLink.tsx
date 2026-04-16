interface CallLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export function CallLink({ className = "", children }: CallLinkProps) {
  return (
    <a
      href="tel:8653813931"
      className={`font-bold text-gold hover:text-gold-dark transition-colors ${className}`}
    >
      {children ?? "(865) 381-3931"}
    </a>
  );
}
