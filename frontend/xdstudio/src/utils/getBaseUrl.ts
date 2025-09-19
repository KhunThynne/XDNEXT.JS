import { env } from "@/env";

export default function getBaseUrl() {
  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
}
