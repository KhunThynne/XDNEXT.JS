import { createContext, useContext, useState, ReactNode } from "react";

type DialogContextType = {
  add: (id: string, dialog: ReactNode) => string;
  remove: (id: string) => void;
};
type DialogEntry = { id: string; node: React.ReactNode };
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
    <DialogContext value={{ add, remove }}>
      {dialogs.map(({ id, node }) => (
        <div key={id}>{node}</div>
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
