import React, { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";

import SignatureCanvas from "react-signature-canvas";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { on } from "events";

interface ModalSignatureProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onSave: (signatureData: string) => void;
}
const ModalSignature: React.FC<ModalSignatureProps> = ({
  isOpen,
  onClose,
  onOpen,
  onSave,
}) => {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [signature, setSignature] = useState<string>("");

  return (
    <Dialog
      className="h-screen"
      maxWidth={false}
      fullWidth={true}
      open={isOpen}
      onClose={onClose}

    >
      <DialogTitle id="alert-dialog-title">
        Firma del inspector
      </DialogTitle>
      <DialogContent>
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            className: "w-full h-full border-2 border-black bg-white",
          }}
          onEnd={() => {
            if (sigCanvas.current) {
              setSignature(
                sigCanvas.current.getTrimmedCanvas().toDataURL(),
              );
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Guardar</Button>
        <Button onClick={onClose} autoFocus>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalSignature;
