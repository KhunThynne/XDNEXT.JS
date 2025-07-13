import Link from "next/link";

export default function PageTest() {
  return (
    <div className="h-80 border">
      <Link href={"/prove/test"}> test</Link>
    </div>
  );
}
