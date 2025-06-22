import { useEffect, useState } from "react";
export default function Page() {
  const testx = "";

  useEffect(() => {
    console.log(testx);
  }, []);

  const [test, setTest] = useState();
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      {test}
      {testx}
    </div>
  );
}
