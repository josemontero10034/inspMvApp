import { Dialog } from '@mui/material';
import React from 'react';

interface CommonModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
    actions: React.ReactNode;

}
const CommonModal: React.FC<CommonModalProps> = ({ open, onClose, title, content, actions }) => {
    return (
        <Dialog open={open} onClose={onClose} sx={{ '& .MuiDialog-container': { alignItems: 'end' } }}>
            <div className="p-4 grid grid-cols-1 justify-items-center" >
                <h2 className="text-lg font-semibold">{title}</h2>
                <div className="mt-2">{content}</div>
                {/* Actions can be buttons or any other elements */}
                <div className="mt-4 flex justify-end">{actions}</div>
            </div>
        </Dialog>
    );
}


export default CommonModal;