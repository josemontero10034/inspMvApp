import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

interface CustomSignatureProps {
  close: () => void;
}
const CustomSignature: React.FC<CustomSignatureProps> = ({ close }) => {
  const [signature, setSignature] = React.useState<string>("");
  const sigCanvas = useRef<SignatureCanvas>(null);

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-10 m-auto flex h-[90%] w-[90%] flex-col items-center justify-center border-2 border-black bg-blue-300">
      <h2 className="mt-5 text-lg font-bold">Firma del inspector</h2>
      <SignatureCanvas
        ref={sigCanvas}
        canvasProps={{
          className: "w-full h-full border-2 border-black bg-white",
        }}
        onEnd={() => {
          if (sigCanvas.current) {
            console.log("Signature saved");
            setSignature(sigCanvas.current.getTrimmedCanvas().toDataURL());
          }
        }}
      />
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => {
          // handleSave();
          close();
        }}
      >
        Guardar firma
      </button>
      <button
        className="mt-2 rounded bg-gray-500 px-4 py-2 text-white"
        onClick={close}
      >
        Cerrar
      </button>
    </div>
  );
};

export default CustomSignature;
