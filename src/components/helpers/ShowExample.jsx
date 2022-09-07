export default function ShowExample({ isOpen, children }) {
  return <div>{isOpen ? children : null}</div>;
}
