type PageHeaderProps = {
  title: string;
  description: string;
};

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <section className="mb-6">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </section>
  );
};
