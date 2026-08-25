import GalleryClient from "@/components/GalleryClient";

export const metadata = {
  title: "Gallery",
  description:
    "A visual look at Samangile Guest Lodge and Umuzi Wellness House — exterior, rooms, wellness, garden and local area.",
  alternates: { canonical: "/gallery" }
};

export default function GalleryPage() {
  return <GalleryClient />;
}
