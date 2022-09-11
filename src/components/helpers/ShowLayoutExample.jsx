export default function ShowLayoutExample({ isOpen, children }) {
  return <>{isOpen ? children : null}</>;
}
