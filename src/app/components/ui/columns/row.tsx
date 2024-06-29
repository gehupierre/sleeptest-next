export function Row({ children, className = "", ...props }: any) {
  return (
    <div className={`block md:flex ${className}`} {...props}>
      {children}
    </div>
  );
}
