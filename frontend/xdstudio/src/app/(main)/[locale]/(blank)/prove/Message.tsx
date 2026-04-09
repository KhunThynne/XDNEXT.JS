"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { Input } from "@/libs/shadcn/ui/input";
import { useAppForm } from "@/libs/tanstack-react-form";
import { updateTagClient } from "@/shared/utils/m";
import { Fragment, Suspense, use, useDeferredValue, useState } from "react";

const Inserch = ({
  query,
  onChange,
}: {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <Input defaultValue={query} onChange={onChange} />;
};
export const TestForm = () => {
  const form = useAppForm({
    defaultValues: {
      test: "",
    },
  });
  return (
    <form.AppForm>
      <form.AppField
        name="test"
        children={({ state }) => <>{state.meta.isDirty}</>}
      />
    </form.AppForm>
  );
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
