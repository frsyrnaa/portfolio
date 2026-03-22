import { Layers } from "lucide-react";
import { CardSection } from "../card-section";
import { Separator } from "../ui/separator";

export function ProjectSection() {
  return (
    <CardSection icon={Layers} title="Projects">
      <div className="flex flex-col w-full space-y-6">
        <div>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Earthquake Alert Prediction using Machine Learning
          </h3>
          <p className="text-muted-foreground">
            Python, ANN, SVM, Random Forest
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm/6 text-muted-foreground">
            <li>
              Mengembangkan model prediksi peringatan gempa menggunakan beberapa
              algoritma machine learning.
            </li>
            <li>
              Melakukan preprocessing data, training model, serta evaluasi
              performa model.
            </li>
            <li>
              Membandingkan performa Artificial Neural Network, Support Vector
              Machine, dan Random Forest.
            </li>
          </ul>
        </div>
        <Separator />
        <div>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Hand Gesture Detection using OpenCV
          </h3>
          <p className="text-muted-foreground">Python, OpenCV</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm/6 text-muted-foreground">
            <li>
              Mengembangkan sistem deteksi tangan menggunakan computer vision.
            </li>
            <li>
              Mengimplementasikan OpenCV untuk mendeteksi gesture tangan dan
              memvisualisasikannya dalam bentuk gambar.
            </li>
          </ul>
        </div>
      </div>
    </CardSection>
  );
}
