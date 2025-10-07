import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { DialogInstanceProvider } from "./DialogInstance";

type DialogEntry = { id: string; node: React.ReactNode };
type DialogContextType = {
  add: (id: string, dialog: ReactNode) => string;
  remove: (id: string) => void;
  dialogs: DialogEntry[];
};
const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [dialogs, setDialogs] = useState<DialogEntry[]>([]);

  const add = (id: string, node: React.ReactNode) => {
    setDialogs((prev) => [...prev, { id, node }]);
    return id;
  };

  const remove = (id: string) => {
    setDialogs((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <DialogContext value={{ add, remove, dialogs }}>
      {dialogs.map(({ id, node }, index) => (
        <DialogInstanceProvider key={`${id}-${index}`}>
          {node}
        </DialogInstanceProvider>
      ))}
      {children}
    </DialogContext>
  );
}

export const useDialogDispatcher = () => {
  const ctx = useContext(DialogContext);
  if (!ctx)
    throw new Error("useDialogRenderer must be used within DialogProvider");
  return ctx;
};
