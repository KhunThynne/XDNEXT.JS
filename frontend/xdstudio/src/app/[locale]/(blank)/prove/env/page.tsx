import { env } from "@/env";
import React from "react";

export default async function PagePoint() {
  return (
    <pre>
      {Object.entries(env)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n")}
    </pre>
  );
}
