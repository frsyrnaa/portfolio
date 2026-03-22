import { User } from "lucide-react";
import { CardSection } from "../card-section";

export function AboutSection() {
  return (
    <CardSection icon={User} title="Tentang Saya">
      <p className="leading-6 text-muted-foreground">
        Mahasiswa semester 6 Teknik Informatika di Universitas Pamulang yang
        memiliki minat pada Machine Learning dan UI/UX Design. Memiliki
        pengalaman sebagai Asisten Laboratorium yang membantu kegiatan praktikum
        pemrograman serta membimbing mahasiswa dalam memahami materi teknis.
        Terbiasa menggunakan Python untuk eksperimen machine learning serta
        Figma untuk perancangan antarmuka. Saat ini masih aktif mengeksplorasi
        berbagai bidang dalam teknologi informasi, termasuk pengembangan web dan
        mobile.
      </p>
    </CardSection>
  );
}
