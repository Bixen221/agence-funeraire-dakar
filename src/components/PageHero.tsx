export function PageHero({ title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-cedre/20 bg-pierre-dark">
      <div className="container-site py-12 md:py-20">
        <h1 className="h1 max-w-[20ch]">{title}</h1>
        {children && <div className="lead mt-5 max-w-[60ch]">{children}</div>}
      </div>
    </section>
  );
}
