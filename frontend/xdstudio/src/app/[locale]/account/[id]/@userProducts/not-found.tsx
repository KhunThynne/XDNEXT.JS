import { Button } from "@/shared/components/shadcn/button";
import TextComponent from "@/shared/components/TestComponent";
import { Link } from "@navigation";
import { Fragment } from "react";

export default async function NotFoundRoot() {
  if (typeof window !== "undefined") return;
  return (
    <html key="global-not-found">
      <body className="bg-primary">
        <div className="h-screen place-content-center place-items-center text-center">
          {/* <TextComponent /> */}
          <Fragment>
            <h1 className="text-primary-foreground mb-4 text-6xl font-extrabold">
              404
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md text-lg">
              Sorry, the page you are looking for does not exist.zxcxzc
            </p>
            {/* <Link href="/">
              <Button variant="default">Go back home</Button>
            </Link> */}
          </Fragment>
        </div>
      </body>
    </html>
  );
}
