import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { FormPointProvider } from "./components/FormPointProvider";

export default async function LayoutPoint({ children }: WithChildren) {
  return (
    <div className="mx-auto h-screen w-full max-w-screen-sm place-content-center">
      <Card>
        <CardContent>
          <FormPointProvider>{children}</FormPointProvider>
        </CardContent>
      </Card>
    </div>
  );
}
