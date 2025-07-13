"use client";
import { useUsers } from "@/libs/graphql/operations/user/getUser.query";
import Link from "next/link";

export default function PageTest() {
  const { data, status } = useUsers();
  return (
    <div className="h-80 border">
      {status}
      <Link href={"/prove/test"}> test</Link>
    </div>
  );
}
