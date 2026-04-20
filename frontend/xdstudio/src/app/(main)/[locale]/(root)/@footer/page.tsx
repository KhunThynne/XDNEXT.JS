import Footer from "./components/footer";
import { env } from "@/env";
export default async function PageFooter() {
  return <Footer className="px-5 py-3" version={env.APP_VERSION} />;
}
