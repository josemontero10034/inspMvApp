"use client";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import DatePicker from "./commonComponents/DatePicker";
import HistoryIcon from "@mui/icons-material/History";

interface Project {
  id: number;
  licence: string;
  inspectionDate: Date | null;
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

interface ProjectHistory {
  date: Date;
  status: string;
  inspector: string;
}

interface ProjectItem {
  id: number;
  name: string;
  licence: string;
  requestedDate: Date;
  lastInspectionDate: Date;
  lastStatus: string;
  lastInspector: string;
  history: ProjectHistory[];
}

const mockProjects: ProjectItem[] = [
  {
    id: 1,
    name: "Proyecto Alpha",
    licence: "LIC-001",
    requestedDate: new Date("2024-05-01"),
    lastInspectionDate: new Date("2024-06-10"),
    lastStatus: "Aprobado",
    lastInspector: "Juan Pérez",
    history: [
      {
        date: new Date("2024-06-10"),
        status: "Aprobado",
        inspector: "Juan Pérez",
      },
      {
        date: new Date("2024-05-15"),
        status: "Observado",
        inspector: "Ana Gómez",
      },
    ],
  },
  {
    id: 2,
    name: "Proyecto Beta",
    licence: "LIC-002",
    requestedDate: new Date("2024-04-20"),
    lastInspectionDate: new Date("2024-05-25"),
    lastStatus: "Observado",
    lastInspector: "Carlos Ruiz",
    history: [
      {
        date: new Date("2024-05-25"),
        status: "Observado",
        inspector: "Carlos Ruiz",
      },
      {
        date: new Date("2024-04-22"),
        status: "Pendiente",
        inspector: "Ana Gómez",
      },
    ],
  },
  {
    id: 3,
    name: "Proyecto Gamma",
    licence: "LIC-003",
    requestedDate: new Date("2024-03-10"),
    lastInspectionDate: new Date("2024-04-05"),
    lastStatus: "Pendiente",
    lastInspector: "Ana Gómez",
    history: [
      {
        date: new Date("2024-04-05"),
        status: "Pendiente",
        inspector: "Ana Gómez",
      },
    ],
  },
];

// Example ProjectList component

const ProjectList: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [openHistory, setOpenHistory] = useState(false);

  const handleOpenHistory = (project: ProjectItem) => {
    setSelectedProject(project);
    setOpenHistory(true);
  };

  const handleCloseHistory = () => {
    setOpenHistory(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Box>
        {mockProjects.map((project) => (
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
              <Typography variant="subtitle1">{project.name}</Typography>
              <Typography variant="body2">
                Licence: {project.licence}
              </Typography>
              <Typography variant="body2">
                Requested Date: {project.requestedDate.toLocaleDateString()}
              </Typography>
              <Typography variant="body2">
                Last Inspection:{" "}
                {project.lastInspectionDate.toLocaleDateString()}
              </Typography>
              <Typography variant="body2">
                Status: {project.lastStatus}
              </Typography>
              <Typography variant="body2">
                Inspector: {project.lastInspector}
              </Typography>
            </Box>
            <IconButton
              color="primary"
              onClick={() => handleOpenHistory(project)}
            >
              <HistoryIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
      <Modal open={openHistory} onClose={handleCloseHistory}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>
            Historial de {selectedProject?.name}
          </Typography>
          {selectedProject?.history.map((h, idx) => (
            <Box key={idx} mb={1}>
              <Typography variant="body2">
                Fecha: {h.date.toLocaleDateString()}
              </Typography>
              <Typography variant="body2">Estado: {h.status}</Typography>
              <Typography variant="body2">Inspector: {h.inspector}</Typography>
            </Box>
          ))}
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={handleCloseHistory}>Cerrar</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const ControlPanel: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [open, setOpen] = useState(false);
  const [licence, setLicence] = useState("");
  const [inspectionDate, setInspectionDate] = useState<Date | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setLicence("");
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

  console.log("min:", new Date().toISOString().split("T")[0]);
  console.log(
    "max:",
    new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      .toISOString()
      .split("T")[0],
  );

  

  return (
    <Container
        disableGutters
        className="flex flex-row gap-6 items-start justify-center p-6 bg-white rounded-xl shadow-lg border border-gray-200"
    >
        <section className="rounded-lg bg-amber-300 p-4 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Inspecciones</h2>
            <Box>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Add Project
                </Button>
                <Box mt={2}>
                    {projects.map((project) => (
                        <Box
                            key={project.id}
                            className="flex items-center justify-between mb-1 p-1 border border-gray-300 rounded"
                        >
                            <Box>
                                <Typography variant="subtitle1">
                                    Licence: {project.licence}
                                </Typography>
                                <Typography variant="body2">
                                    Inspection Date:{" "}
                                    {project.inspectionDate?.toLocaleDateString()}
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
                    <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] bg-white rounded-lg shadow-2xl p-8">
                        <Typography variant="h6" className="mb-2">
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
                            min={new Date().toISOString().split("T")[0]}
                            max={
                                new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                                    .toISOString()
                                    .split("T")[0]
                            }
                            disabled={false}
                        />
                        <Box className="mt-2 flex justify-end gap-2">
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
        </section>
        <section className="rounded-lg bg-blue-300 p-4 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Lista de proyectos</h2>
            <Typography variant="body1" className="mb-2">
                Total proyectos: {projects.length}
            </Typography>
            <Box>
                {projects.length === 0 ? (
                    <Typography variant="body2">
                        No hay proyectos registrados.
                    </Typography>
                ) : (
                    <ProjectList />
                )}
            </Box>
        </section>
        <section className="rounded-lg bg-green-300 p-4 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Inspectores</h2>
            <Box>
                {[
                    { name: "Juan Pérez", inspections: 5, avgRate: 4.6 },
                    { name: "Ana Gómez", inspections: 4, avgRate: 4.2 },
                    { name: "Carlos Ruiz", inspections: 2, avgRate: 3.8 },
                ].map((inspector) => (
                    <Box
                        key={inspector.name}
                        className="flex items-center justify-between mb-1 p-1 border border-gray-300 rounded"
                    >
                        <Typography variant="subtitle1">{inspector.name}</Typography>
                        <Typography variant="body2">
                            Inspecciones: {inspector.inspections}
                        </Typography>
                        <Typography variant="body2">
                            Promedio calificación: {inspector.avgRate.toFixed(1)}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </section>
    </Container>
  );
};

export default ControlPanel;
