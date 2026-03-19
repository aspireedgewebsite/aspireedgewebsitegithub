interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`h-1 w-16 bg-secondary rounded-full mt-4 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
