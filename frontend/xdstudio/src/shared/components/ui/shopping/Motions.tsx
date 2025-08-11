import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export const ShoppingBagMotion = ({ triggerKey }: { triggerKey: string }) => {
  return (
    <motion.div
      key={triggerKey}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.3, 0.95, 1.1, 1] }}
      transition={{
        duration: 0.6,
        times: [0, 0.2, 0.4, 0.7, 1],
        ease: "easeOut",
      }}
    >
      <ShoppingBag />
    </motion.div>
  );
};
export const ShoppingCount = ({ count = 0 }: { count?: number }) => {
  if (!count) return null;
  return (
    <div className="bg-primary text-secondary absolute flex size-3 -translate-y-2 translate-x-2 items-center justify-center rounded-full">
      <AnimatePresence mode="wait">
        <motion.small
          key={count}
          className="text-[0.5rem]"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
        >
          {count}
        </motion.small>
      </AnimatePresence>
    </div>
  );
};
