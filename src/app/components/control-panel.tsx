import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
Button,
Modal,
Box,
TextField,
Typography,
IconButton,
} from '@mui/material';
import DatePicker from './commonComponents/DatePicker';

interface Project {
id: number;
licence: string;
inspectionDate: Date | null;
}

const style = {
position: 'absolute' as const,
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 350,
bgcolor: 'background.paper',
borderRadius: 2,
boxShadow: 24,
p: 4,
};

const ControlPanel: React.FC = () => {
const [projects, setProjects] = useState<Project[]>([]);
const [open, setOpen] = useState(false);
const [licence, setLicence] = useState('');
const [inspectionDate, setInspectionDate] = useState<Date | null>(null);

const handleOpen = () => setOpen(true);
const handleClose = () => {
    setOpen(false);
    setLicence('');
    setInspectionDate(null);
};

const handleAddProject = () => {
    if (!licence || !inspectionDate) return;
    setProjects([
        ...projects,
        {
            id: Date.now(),
            licence,
            inspectionDate,
        },
    ]);
    handleClose();
};

const handleRemoveProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
};

// Edit functionality can be implemented similarly

return (
    <Box>
        <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Project
        </Button>
        <Box mt={2}>
            {projects.map((project) => (
                <Box
                    key={project.id}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={1}
                    p={1}
                    border={1}
                    borderRadius={1}
                    borderColor="grey.300"
                >
                    <Box>
                        <Typography variant="subtitle1">
                            Licence: {project.licence}
                        </Typography>
                        <Typography variant="body2">
                            Inspection Date: {project.inspectionDate?.toLocaleDateString()}
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton color="primary" disabled>
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            color="secondary"
                            onClick={() => handleRemoveProject(project.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>
            ))}
        </Box>
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6" mb={2}>
                    Add Project
                </Typography>
                <TextField
                    label="Licence"
                    fullWidth
                    value={licence}
                    onChange={(e) => setLicence(e.target.value)}
                    margin="normal"
                />
                <DatePicker
                    label="Inspection Date"
                    value={inspectionDate?.toDateString()}
                    onChange={(date) => setInspectionDate(new Date(date))}
                    min={new Date().toISOString().split('T')[0]} // Today's date
                    max={new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]} // One year from today
                    disabled={false}
             
                />
                <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        onClick={handleAddProject}
                        disabled={!licence || !inspectionDate}
                    >
                        Add
                    </Button>
                </Box>
            </Box>
        </Modal>
    </Box>
);
};

export default ControlPanel;