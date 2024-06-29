export function Row({ children, className = "", ...props }: any) {
  return (
    <div className={`block lg:flex ${className}`} {...props}>
      {children}
    </div>
  );
}
