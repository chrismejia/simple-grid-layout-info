export default function SectionReferences({ sectionTitle, children }) {
  return (
    <section className="container references">
      <h4>{sectionTitle}</h4>
      {children}
    </section>
  );
}
