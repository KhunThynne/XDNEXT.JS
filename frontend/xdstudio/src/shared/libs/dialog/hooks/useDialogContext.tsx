import { useContext } from "react";
import { DialogContextInstance } from "../contexts/DialogInstance";

export const useDialogContext = () => {
  const context = useContext(DialogContextInstance);
  if (!context) {
    throw new Error("useDialogInstance must be used within a DialogInstanceProvider");
  }
  return context;
};
