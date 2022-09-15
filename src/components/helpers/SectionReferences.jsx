export default function SectionReferences({ startRef, children }) {
  return (
    <section className="container references">
      <h4>More About This Section's Topics</h4>
      <ol start={startRef ? `${startRef}` : null}>{children}</ol>
    </section>
  );
}
