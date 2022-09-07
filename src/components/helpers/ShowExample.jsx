export default function ShowExample({ isOpen, children }) {
  return <>{isOpen ? children : null}</>;
}
