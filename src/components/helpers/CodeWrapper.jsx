export default function CodeWrapper({ sections, children }) {
  return (
    <div
      className="grid code-wrapper"
      style={{ gridTemplateColumns: `repeat(${sections}, 1fr)` }}
    >
      {children}
    </div>
  );
}
