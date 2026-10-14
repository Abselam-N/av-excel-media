export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <header className="wrap pb-12 pt-14 md:pb-16 md:pt-20">
      <p className="eyebrow mb-6">{eyebrow}</p>
      <h1 className="t-h1 max-w-3xl">{title}</h1>
      {lead && <p className="lead mt-6">{lead}</p>}
    </header>
  );
}
