import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import ButtonMoveForm from "./components/commonComponents/button/button-move-form";
import ButtonMoveReport from "./components/commonComponents/button/button-move-report";
import AccessDenied from "./components/AccessDenied/accesDenied";
import ControlPanel from "./components/control-panel";

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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="mb-10 flex w-full flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-lg rounded-b-full ">
        <div className="m-auto py-6 text-center text-5xl font-extrabold tracking-wide text-white">
          Dirección de Obras Por Etapa{" "}
          <span className="font-semibold text-blue-300">MIVED</span>
        </div>
      </div>
      <div className="grid w-screen grid-cols-1 justify-items-center px-4 mb-4">
        <input
          className="h-12 w-3/4 max-w-md rounded-lg border-2 border-blue-400 px-4 text-lg transition-all focus:ring-2 focus:ring-blue-300 focus:outline-none"
          placeholder="Introduce Licencia"
        />
      </div>
              <ControlPanel/>

      <div className="mt-8 grid w-screen grid-cols-1 justify-items-center gap-4">
        <ButtonMoveForm label="Formulario" />
        <ButtonMoveReport label="Reporte" />
      </div>
    </div>
  );
}
