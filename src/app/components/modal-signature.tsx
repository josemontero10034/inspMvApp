import React, { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";

import SignatureCanvas from "react-signature-canvas";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface ModalSignatureProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (signatureData: string) => void;
  signature: string | null;
  setSignature: (signature: string | null) => void;
}
const ModalSignature: React.FC<ModalSignatureProps> = ({
  isOpen,
  onClose,
  onSave,
  signature,
  setSignature,
}) => {
  const sigCanvas = useRef<SignatureCanvas>(null);
 

  const handlerOnSave = () => {
    if (signature) {
      onSave(signature);
    } else {
      console.error("No signature data available");
    }
  };
  const handlerOnClear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setSignature(null);
    }
  };

  return (
    <Dialog
      className=""
      sx={{ "& .MuiDialog-container": { alignItems: "flex-end" } }}
      open={isOpen}
      onClose={onClose}

    >
      <DialogTitle id="alert-dialog-title">Firma del inspector</DialogTitle>
      <DialogContent className="h-[10%]">
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            className: "w-full h-full border-2 border-black bg-white",
          }}
          onEnd={() => {
            if (sigCanvas.current) {
              setSignature(sigCanvas.current.getTrimmedCanvas().toDataURL());
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handlerOnSave}>Guardar</Button>
        <Button onClick={handlerOnClear}>Limpiar</Button>
        <Button onClick={onClose} autoFocus>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalSignature;
