export default function scrollToRef(ref) {
  ref.current.scrollIntoView({ behavior: "smooth" });
}
