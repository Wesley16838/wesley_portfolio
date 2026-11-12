export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-surface-2 px-3 py-1.5 text-xs font-medium text-fg-secondary">
      {children}
    </span>
  );
}
