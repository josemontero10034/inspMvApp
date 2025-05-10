import Link from "next/link";
import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import ButtonMoveForm from "./_components/button/button-move-form";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <>
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
        <ButtonMoveForm
          label="Formulario"
          
        />
        <button
          type="button"
          className="h-12 w-[200px] rounded-full bg-gradient-to-r from-red-500 to-red-700 py-2 font-semibold text-white shadow-md transition-all hover:from-red-700 hover:to-red-500"
        >
          Informe
        </button>
      </div>
    </>
  );
}
