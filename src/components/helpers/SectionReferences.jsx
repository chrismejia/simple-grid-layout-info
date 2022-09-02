export default function SectionReferences({ startRefNum, children }) {
  return (
    <section className="references">
      <h4>More About This Section's Topics</h4>
      <ol start={startRefNum ? `${startRefNum}` : null}>{children}</ol>
    </section>
  );
}
