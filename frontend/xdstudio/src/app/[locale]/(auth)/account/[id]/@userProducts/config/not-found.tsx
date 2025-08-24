export default async function NotFound() {
  if (typeof window !== "undefined") return;
  return "NotFound";
}
