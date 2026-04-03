"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { Input } from "@/libs/shadcn/ui/input";
import { updateTag } from "next/cache";
import { Fragment, Suspense, use, useDeferredValue, useState } from "react";
import { updateTagClient } from "../../(main)/(contents)/(product_content)/products/shared/updateTagClient";

const Inserch = ({
  query,
  onChange,
}: {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <Input defaultValue={query} onChange={onChange} />;
};
export function Message({
  messagePromise,
}: {
  messagePromise: Promise<string>;
}) {
  const [stat, SetState] = useState("loading");
  const [query, setQuery] = useState("");
  const defaultQuery = useDeferredValue(query);
  const message = use(messagePromise);
  if (message && stat === "loading") {
    SetState("loaded");
  }
  return (
    <Suspense fallback={"loading..."}>
      <div className="flex flex-col gap-3 p-5">
        <Button onClick={() => updateTagClient("test")}>Refresh</Button>
        <Fragment>
          Message: {message} :<span className="text-red-500">{query}</span>
          <Inserch
            query={defaultQuery}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Fragment>
      </div>
    </Suspense>
  );
}
