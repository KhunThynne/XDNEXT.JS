import { columns, data } from "./DataDemo";
import { DataTableDemo } from "./DataTable";

export default function DataTablePage() {
  return (
    <section className="w-7xl mx-auto max-w-full px-2">
      <DataTableDemo data={data} columns={columns} />
    </section>
  );
}
