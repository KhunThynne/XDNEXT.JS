import { useContext } from "react";

import { DialogContext } from "../contexts/DialogContext";

const useDialogDispatcher = () => {
  const ctx = useContext(DialogContext);

  if (!ctx) throw new Error("useDialogRenderer must be used within DialogProvider");

  return ctx;
};

export default useDialogDispatcher;
