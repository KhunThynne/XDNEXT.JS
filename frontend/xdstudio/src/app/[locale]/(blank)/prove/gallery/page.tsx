import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { GalleryComponent } from "./Gallery";

export default async function Page() {
  return (
    <ContainerSection className="mx-auto size-full">
      <GalleryComponent></GalleryComponent>
    </ContainerSection>
  );
}
