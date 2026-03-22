import { GraduationCap } from "lucide-react";
import { CardSection } from "../card-section";
import { Separator } from "../ui/separator"

export function EducationSection() {
  return (
    <CardSection icon={GraduationCap} title="Education">
      <div className="flex flex-col w-full space-y-6">
        <div>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Universitas Pamulang (UNPAM)</h3>
          <p className="text-muted-foreground">S1 Teknik Informatika</p>
          <p className="text-sm text-muted-foreground">2023 &ndash; Sekarang</p>
        </div>
        <Separator />
        <div>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">MA Cahaya Insani Al-Um</h3>
          <p className="text-muted-foreground">Matematika dan Ilmu Pengetahuan Alam</p>
          <p className="text-sm text-muted-foreground">2021 &ndash; 2023</p>
        </div>
      </div>
    </CardSection>
  );
}
