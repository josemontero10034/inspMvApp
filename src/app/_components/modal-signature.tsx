import React from 'react';

interface ModalSignatureProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (signatureData: string) => void;
}

const ModalSignature: React.FC<ModalSignatureProps> = ({
    isOpen,
    onClose,
    onSave,
}) => {
    // Placeholder for signature data
    const [signature, setSignature] = React.useState<string>('');

    if (!isOpen) return null;

    const handleSave = () => {
        onSave(signature);
        onClose();
    };

    return (
        <div className="modal-signature-overlay">
            <div className="modal-signature-content">
                <h2>Firma</h2>
                {/* Placeholder for signature pad */}
                <textarea
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    placeholder="Dibuja o escribe tu firma aquí"
                    rows={4}
                    style={{ width: '100%' }}
                />
                <div style={{ marginTop: 16 }}>
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={onClose} style={{ marginLeft: 8 }}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalSignature;