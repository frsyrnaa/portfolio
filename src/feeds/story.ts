import Kucing from "@/assets/images/kucing/kucing.jpeg";
import Aslab1 from "@/assets/images/aslab/aslab1.jpeg";
import Aslab2 from "@/assets/images/aslab/aslab2.jpeg";
import Aslab3 from "@/assets/images/aslab/aslab3.jpeg";

export interface FeedStory {
  label: string;
  images: string[];
}

export const STORIES: FeedStory[] = [
  {
    label: "Susu",
    images: [Kucing],
  },
  {
    label: "ASLAB",
    images: [Aslab1, Aslab2, Aslab3],
  },
];