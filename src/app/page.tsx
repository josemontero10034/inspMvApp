import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import ButtonMoveForm from "./components/button/button-move-form";
import ButtonMoveReport from "./components/button/button-move-report";
import AccessDenied from "./components/AccessDenied/accesDenied";
import Head from "next/head";

export default async function Home() {
  const session = await auth();

  const headPage = (
    <Head>
      <title>Inicio</title>
    </Head>
  );

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }
  if (!session?.user) {
    return (
      <>
        {headPage}
        <AccessDenied />
      </>
    );
  }

  return (
    <>
    {headPage}
      <div className="mb-10 flex w-full flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-lg">
        <div className="m-auto py-6 text-center text-5xl font-extrabold tracking-wide text-white">
          Dirección de Obras Por Etapa{" "}
          <span className="font-semibold text-blue-300">MIVED</span>
        </div>
      </div>
      <div className="grid w-screen grid-cols-1 justify-items-center px-4">
        <input
          className="h-12 w-3/4 max-w-md rounded-lg border-2 border-blue-400 px-4 text-lg transition-all focus:ring-2 focus:ring-blue-300 focus:outline-none"
          placeholder="Introduce Licencia"
        />
      </div>
      <div className="mt-8 grid w-screen grid-cols-1 justify-items-center gap-4">
        <ButtonMoveForm label="Formulario" />
        <ButtonMoveReport label="Reporte" />
      </div>
    </>
  );
}
