import React, { useMemo, useState } from "react";
import CustomizedDialogs from "./commonComponents/modals";
import InspectionDetails from "./report-Inspections";
import { Button, Input } from "@mui/material";

interface Report {
  id: number;
  nombreProyecto: string;
  licencia: string;
  inspectorLider: string;
}

const mockReports: Report[] = [
  {
    id: 1,
    nombreProyecto: "Edificio Central",
    licencia: "LIC-2024-001",
    inspectorLider: "Juan Pérez",
  },
  {
    id: 2,
    nombreProyecto: "Parque Industrial Norte",
    licencia: "LIC-2024-002",
    inspectorLider: "María Gómez",
  },
  {
    id: 3,
    nombreProyecto: "Residencial Las Palmas",
    licencia: "LIC-2024-003",
    inspectorLider: "Carlos Ramírez",
  },
];
const ReportList: React.FC = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const filteredReports = useMemo(
    () =>
      search.trim() === ""
        ? mockReports
        : mockReports.filter(
            (report) =>
              report.nombreProyecto
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              report.licencia.toLowerCase().includes(search.toLowerCase()) ||
              report.inspectorLider
                .toLowerCase()
                .includes(search.toLowerCase()),
          ),
    [search],
  );

  const handleOpenDetails = (reportId: number) => {
    console.log("Open details for report ID:", reportId);
    setOpen(true);
  };
  return (
    <div className="h-[500px] w-screen p-4">
      <Input
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: 200 }}
      />
      <div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                Nombre del Proyecto
              </th>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                Licencia
              </th>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                Inspector Líder
              </th>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                  {report.nombreProyecto}
                </td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                  {report.licencia}
                </td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                  {report.inspectorLider}
                </td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                  <Button
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#2563eb",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    onClick={() => handleOpenDetails(report.id)}
                  >
                    Ver Detalles
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CustomizedDialogs
          onClose={setOpen}
          open={open}
          fullScreenDialog={true}
        >
          <InspectionDetails />
        </CustomizedDialogs>
      </div>
    </div>
  );
};

export default ReportList;
