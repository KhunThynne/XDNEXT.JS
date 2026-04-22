import { useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import { formCartsOptions } from "../../../_shared/formOptions";

export const DatableDetail = ({
  totalFetched,
  itemsCount,
}: {
  totalFetched: number;
  itemsCount: number;
}) => {
  const form = useTypedAppFormContext({ ...formCartsOptions });
  return (
    <form.Subscribe
      selector={({ values }) => {
        return {
          selected: Object.keys(values.selectedCartItemsId).length,
        };
      }}
    >
      {({ selected }) => {
        return (
          <>
            <span>
              Selected:{" "}
              <span className="text-destructive font-semibold">{selected}</span>
            </span>
            <span className="flex gap-1">
              <span className="font-medium">Showing {totalFetched}</span> of
              <span className="font-medium opacity-70"> {itemsCount}</span>
            </span>
          </>
        );
      }}
    </form.Subscribe>
  );
};
