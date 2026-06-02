function SectionPage({ title, description }) {
  return (
    <main className="content-page">
      <section className="content-card">
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
    </main>
  );
}

export default SectionPage;
