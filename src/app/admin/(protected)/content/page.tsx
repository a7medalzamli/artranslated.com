import { getHomeContent } from "@/lib/content/getHomeContent";
import { HomeContentEditor } from "./HomeContentEditor";

export const dynamic = "force-dynamic";

export default async function AdminHomeContentPage() {
  const content = await getHomeContent();
  return <HomeContentEditor initial={content} />;
}
