import { DialogInstanceProvider } from "./contexts/DialogInstance";
import { DialogContext } from "./contexts/DialogContext";
import { useState } from "react";
import type { DialogEntry } from "./index.type";

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [dialogs, setDialogs] = useState<DialogEntry[]>([]);

  const add = (id: string, node: React.ReactNode) => {
    setDialogs(prev => [...prev, { id, node }]);
    return id;
  };

  const remove = (id: string) => {
    setDialogs(prev => prev.filter(d => d.id !== id));
  };

  return (
    <DialogContext value={{ add, remove, dialogs }}>
      {dialogs.map(({ id, node }, index) => (
        <DialogInstanceProvider key={`${id}-${index}`}>{node}</DialogInstanceProvider>
      ))}
      {children}
    </DialogContext>
  );
}
