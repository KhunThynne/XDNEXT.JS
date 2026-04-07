import { createContext } from "react";

import type { DialogContextType } from "../index.type";

export const DialogContext = createContext<DialogContextType | undefined>(undefined);
