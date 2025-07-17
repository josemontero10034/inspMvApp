import { Button } from "@mui/material";
import type { ButtonMoveProps } from "./button-move-form";

interface ButtonOnSaveProps extends ButtonMoveProps {
    handleClick?: () => void;
}

// This component is used to save a form
// It takes a label and an optional handleClick function as props

const ButtonOnSave: React.FC<ButtonOnSaveProps> = ({  label, handleClick }) => {


    return (
        <Button
            type="button"
            variant="outlined"
            className="h-10 rounded-full  "
            onClick={handleClick}
        >
            {label}
        </Button>
    );
};

export default ButtonOnSave;