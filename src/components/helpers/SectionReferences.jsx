export default function SectionReferences({ startrefLabel, children }) {
  return (
    <section className="references">
      <h4>More About This Section's Topics</h4>
      <ol start={startrefLabel ? `${startrefLabel}` : null}>{children}</ol>
    </section>
  );
}
