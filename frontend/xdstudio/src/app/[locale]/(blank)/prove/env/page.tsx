import { env } from "@/env";
export default async function PagePoint() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <pre>
          {Object.entries(process.env)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n")}
        </pre>
        <pre>
          {Object.entries(env)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n")}
        </pre>
      </div>
    </>
  );
}
