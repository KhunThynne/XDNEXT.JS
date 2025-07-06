"use client";
import { useDialogExample } from "@/libs/dialog/example/clientHook";
import { DialogTest } from "@/libs/dialog/example/serverSideDialog";
import { Button } from "@/shared/components/shadcn/button";
export default function Page() {
  const { openDialog } = useDialogExample();
  return (
    <div className="">
      <Button
        onClick={() =>
          openDialog({
            content: (
              <>
                <DialogTest
                  trigger={<Button>test </Button>}
                  // options={{ dialog: { modal: false } }}
                />
              </>
            ),
          })
        }
      >
        Dialog
      </Button>
    </div>
  );
}
