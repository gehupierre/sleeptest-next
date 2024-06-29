export function Column({ children, className = "", ...props }: any) {
  return (
    <div className={`flex flex-col gap-2 mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
