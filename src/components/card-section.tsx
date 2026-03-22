import type { LucideIcon } from "lucide-react";

type CardSectionProps = {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
};

export function CardSection({
  title,
  children,
  icon: Icon,
}: CardSectionProps) {
  return (
    <section className="w-full bg-background space-y-4 p-6 border border-border rounded-2xl">
      <hgroup className="flex items-center gap-x-3 w-full bg-transparent pb-2 border-b border-border">
        {Icon && (
          <div className="shrink-0">
            <Icon className="size-5" />
          </div>
        )}

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      </hgroup>

      {children}
    </section>
  );
}