import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import ButtonMoveForm from "./components/commonComponents/button/button-move-form";
import ButtonMoveReport from "./components/commonComponents/button/button-move-report";
import AccessDenied from "./components/AccessDenied/accesDenied";
import ControlPanel from "./components/control-panel";
import InvestigationArticlePage from "./components/search-article/page";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }
  if (!session?.user) {
    return (
      <>
        <AccessDenied />
      </>
    );
  }

  return <InvestigationArticlePage />;
}
