export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-night/10 bg-sand">
      <div className="container-site py-12 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h1 mt-3 max-w-3xl">{title}</h1>
        {children && <div className="lead mt-5 max-w-2xl">{children}</div>}
      </div>
    </section>
  );
}
