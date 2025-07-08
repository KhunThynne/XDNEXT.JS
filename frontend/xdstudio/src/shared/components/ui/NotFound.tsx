"use client";
import { Fragment } from "react";

import { Link } from "@navigation";
import { Button } from "../shadcn/button";

export const NotFound = () => {
  return (
    <Fragment>
      <h1 className="text-foreground mb-4 text-6xl font-extrabold">404</h1>
      <p className="text-muted-foreground mb-6 max-w-md text-lg">
        Sorry, the page you are looking for does not exist.zxcxzc
      </p>
      <Link href="/">
        <Button variant="default">Go back home</Button>
      </Link>
    </Fragment>
  );
};
