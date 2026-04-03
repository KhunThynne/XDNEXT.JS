import { Fragment } from "react";

export default async function NotFoundRoot() {
  if (typeof window !== "undefined") return;
  return (
    <Fragment>
      <h1 className="mb-4 text-6xl font-extrabold text-primary-foreground">
        404
      </h1>
      <p className="mb-6 max-w-md text-lg text-muted-foreground">
        Sorry, the page you are looking for does not exist.zxcxzc
      </p>
      {/* <Link href="/">
              <Button variant="default">Go back home</Button>
            </Link> */}
    </Fragment>
  );
}
