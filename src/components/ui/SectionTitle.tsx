interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          light ? 'text-white' : 'text-[#1A1A1A]'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-[3px] w-[60px] bg-[#8B7D3C] ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? 'text-white/70' : 'text-gray-600'
          } ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
