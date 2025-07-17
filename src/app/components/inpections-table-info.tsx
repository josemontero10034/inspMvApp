import React, { useState, useMemo } from "react";
import {
  Input,
  Select,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import CustomPaginationActionsTable from "./commonComponents/TablePagination";
import CustomizedDialogs from "./commonComponents/modals";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import ControlPanel from "./control-panel";

type Status =
  | "submitted"
  | "assigned"
  | "inspected"
  | "reported"
  | "closed"
  | "All";

export interface dataTableType extends Inspection {
  onViewDetails: (record: Inspection) => void;
}

export type columnsType = (
  | {
      title: string;
      dataIndex: string;
      key: string;
      render?: undefined;
    }
  | {
      title: string;
      dataIndex: string;
      key: string;
      render: (text: Status) => string;
    }
  | {
      title: string;
      key: string;
      render: (record: Inspection) => React.JSX.Element;
      dataIndex?: undefined;
    }
)[];

export interface Inspection {
  key: string;
  nombreProyecto: string;
  estatus: Status;
  licencia: string;
  fechaSolicitud: string;
  direccion: string;
  inspectorLider: string;
  inspector: string;
  conductor: string;
  ficha: string;
  acciones?: string;
  timeline: { status: Status; date: string }[];
  notas: string;
}

const STATUS_OPTIONS: Status[] = [
  "submitted",
  "assigned",
  "inspected",
  "reported",
  "closed",
  "All", // Added "All" option for filtering
];

// Dummy data for demonstration
export const initialData: Inspection[] = [
  {
    key: "1",
    nombreProyecto: "Proyecto A",
    estatus: "submitted",
    licencia: "LIC123",
    fechaSolicitud: "2024-06-01",
    direccion: "Calle 1",
    inspectorLider: "Juan Perez",
    inspector: "Maria Lopez",
    conductor: "Carlos Ruiz",
    ficha: "F123",
    timeline: [
      { status: "submitted", date: "2024-06-01" },
      { status: "assigned", date: "2024-06-02" },
    ],
    notas: "",
  },
  {
    key: "2",
    nombreProyecto: "Proyecto B",
    estatus: "assigned",
    licencia: "LIC456",
    fechaSolicitud: "2024-06-03",
    direccion: "Calle 2",
    inspectorLider: "Ana Torres",
    inspector: "Luis Gómez",
    conductor: "Pedro Sánchez",
    ficha: "F456",
    timeline: [
      { status: "submitted", date: "2024-06-03" },
      { status: "assigned", date: "2024-06-04" },
    ],
    notas: "Revisar documentación",
  },
  {
    key: "3",
    nombreProyecto: "Proyecto C",
    estatus: "inspected",
    licencia: "LIC789",
    fechaSolicitud: "2024-06-05",
    direccion: "Calle 3",
    inspectorLider: "Sofía Martínez",
    inspector: "Miguel Díaz",
    conductor: "Laura Fernández",
    ficha: "F789",
    timeline: [
      { status: "submitted", date: "2024-06-05" },
      { status: "assigned", date: "2024-06-06" },
      { status: "inspected", date: "2024-06-07" },
    ],
    notas: "Todo en orden",
  },
  {
    key: "4",
    nombreProyecto: "Proyecto D",
    estatus: "reported",
    licencia: "LIC321",
    fechaSolicitud: "2024-06-08",
    direccion: "Calle 4",
    inspectorLider: "Ricardo López",
    inspector: "Valeria Castro",
    conductor: "Jorge Ramírez",
    ficha: "F321",
    timeline: [
      { status: "submitted", date: "2024-06-08" },
      { status: "assigned", date: "2024-06-09" },
      { status: "inspected", date: "2024-06-10" },
      { status: "reported", date: "2024-06-11" },
    ],
    notas: "",
  },
  {
    key: "5",
    nombreProyecto: "Proyecto E",
    estatus: "closed",
    licencia: "LIC654",
    fechaSolicitud: "2024-06-12",
    direccion: "Calle 5",
    inspectorLider: "Gabriela Méndez",
    inspector: "Andrés Herrera",
    conductor: "Patricia Morales",
    ficha: "F654",
    timeline: [
      { status: "submitted", date: "2024-06-12" },
      { status: "assigned", date: "2024-06-13" },
      { status: "inspected", date: "2024-06-14" },
      { status: "reported", date: "2024-06-15" },
      { status: "closed", date: "2024-06-16" },
    ],
    notas: "Inspección finalizada",
  },
  {
    key: "6",
    nombreProyecto: "Proyecto F",
    estatus: "submitted",
    licencia: "LIC987",
    fechaSolicitud: "2024-06-17",
    direccion: "Calle 6",
    inspectorLider: "Fernando Salas",
    inspector: "Claudia Ríos",
    conductor: "Esteban Vargas",
    ficha: "F987",
    timeline: [{ status: "submitted", date: "2024-06-17" }],
    notas: "",
  },
  {
    key: "7",
    nombreProyecto: "Proyecto G",
    estatus: "assigned",
    licencia: "LIC111",
    fechaSolicitud: "2024-06-18",
    direccion: "Calle 7",
    inspectorLider: "Lucía Ortega",
    inspector: "Tomás Peña",
    conductor: "Silvia Navarro",
    ficha: "F111",
    timeline: [
      { status: "submitted", date: "2024-06-18" },
      { status: "assigned", date: "2024-06-19" },
    ],
    notas: "Pendiente de visita",
  },
  {
    key: "8",
    nombreProyecto: "Proyecto H",
    estatus: "inspected",
    licencia: "LIC222",
    fechaSolicitud: "2024-06-19",
    direccion: "Calle 8",
    inspectorLider: "Marina Paredes",
    inspector: "Javier Soto",
    conductor: "Rosa Gil",
    ficha: "F222",
    timeline: [
      { status: "submitted", date: "2024-06-19" },
      { status: "assigned", date: "2024-06-20" },
      { status: "inspected", date: "2024-06-21" },
    ],
    notas: "",
  },
  {
    key: "9",
    nombreProyecto: "Proyecto I",
    estatus: "reported",
    licencia: "LIC333",
    fechaSolicitud: "2024-06-22",
    direccion: "Calle 9",
    inspectorLider: "Oscar Molina",
    inspector: "Natalia Reyes",
    conductor: "Guillermo Torres",
    ficha: "F333",
    timeline: [
      { status: "submitted", date: "2024-06-22" },
      { status: "assigned", date: "2024-06-23" },
      { status: "inspected", date: "2024-06-24" },
      { status: "reported", date: "2024-06-25" },
    ],
    notas: "Esperando aprobación",
  },
  {
    key: "10",
    nombreProyecto: "Proyecto J",
    estatus: "closed",
    licencia: "LIC444",
    fechaSolicitud: "2024-06-26",
    direccion: "Calle 10",
    inspectorLider: "Patricia Salgado",
    inspector: "Enrique Ramos",
    conductor: "Verónica Díaz",
    ficha: "F444",
    timeline: [
      { status: "submitted", date: "2024-06-26" },
      { status: "assigned", date: "2024-06-27" },
      { status: "inspected", date: "2024-06-28" },
      { status: "reported", date: "2024-06-29" },
      { status: "closed", date: "2024-06-30" },
    ],
    notas: "Cerrado sin observaciones",
  },
];

export const columns = [
  {
    title: "Nombre del proyecto",
    dataIndex: "nombreProyecto",
    key: "nombreProyecto",
  },
  {
    title: "Estatus",
    dataIndex: "estatus",
    key: "estatus",
    render: (text: Status) => text.charAt(0).toUpperCase() + text.slice(1),
  },
  {
    title: "Licencia",
    dataIndex: "licencia",
    key: "licencia",
  },
  {
    title: "Fecha de solicitud",
    dataIndex: "fechaSolicitud",
    key: "fechaSolicitud",
  },
  {
    title: "Direccion",
    dataIndex: "direccion",
    key: "direccion",
  },
  {
    title: "Inspector lider",
    dataIndex: "inspectorLider",
    key: "inspectorLider",
  },
  {
    title: "Inspector",
    dataIndex: "inspector",
    key: "inspector",
  },
  {
    title: "Conductor",
    dataIndex: "conductor",
    key: "conductor",
  },
  {
    title: "Ficha",
    dataIndex: "ficha",
    key: "ficha",
  },
  {
    title: "Acciones",
    dataIndex: "Acciones",
    key: "acciones",
  },
];

const InspectionsTableInfo: React.FC = () => {
  const [data, setData] = useState<Inspection[]>(initialData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<Status>("All");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedInspection, setSelectedInspection] =
    useState<Inspection | null>(null);
  const [nota, setNota] = useState("");

  // Attach onViewDetails to each row
  const tableData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        onViewDetails: (record: Inspection) => {
          setSelectedInspection(record);
          setNota(record.notas);
          setModalVisible(true);
        },
      })),
    [data],
  );

  // Filter logic
  const filteredData = useMemo(() => {
    return tableData.filter((item) => {
      const matchesStatus =
        !status || status === "All" ? true : item.estatus === status;
      const searchLower = search.toLowerCase();
      const matchesSearch =
        item.nombreProyecto.toLowerCase().includes(searchLower) ||
        item.estatus.toLowerCase().includes(searchLower) ||
        item.licencia.toLowerCase().includes(searchLower) ||
        item.fechaSolicitud.toLowerCase().includes(searchLower) ||
        item.direccion.toLowerCase().includes(searchLower) ||
        item.inspectorLider.toLowerCase().includes(searchLower) ||
        item.inspector.toLowerCase().includes(searchLower) ||
        item.conductor.toLowerCase().includes(searchLower) ||
        item.ficha.toLowerCase().includes(searchLower);
      return matchesStatus && matchesSearch;
    });
  }, [tableData, search, status]);

  // Export handler (CSV)
  const handleExport = () => {
    const headers = [
      "Nombre del proyecto",
      "Estatus",
      "Licencia",
      "Fecha de solicitud",
      "Direccion",
      "Inspector lider",
      "Inspector",
      "Conductor",
      "Ficha",
    ];
    const rows = filteredData.map((item) =>
      [
        item.nombreProyecto,
        item.estatus,
        item.licencia,
        item.fechaSolicitud,
        item.direccion,
        item.inspectorLider,
        item.inspector,
        item.conductor,
        item.ficha,
      ].join(","),
    );
    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inspecciones.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Modal save notas
  const handleNotaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNota(e.target.value);
  };

  const handleNotaSave = () => {
    if (selectedInspection) {
      setData((prev) =>
        prev.map((item) =>
          item.key === selectedInspection.key ? { ...item, notas: nota } : item,
        ),
      );
      setModalVisible(false);
    }
  };

  return (
    <div className="w-screen p-4">
      <div
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 16,
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 200 }}
        />
        <FormControl style={{ minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Estatus"
            onChange={(e) => setStatus(e.target.value as Status)}
          >
            {STATUS_OPTIONS.map((s) => (
              <MenuItem key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button className="outline-amber-200" onClick={handleExport}>
          Exportar
        </Button>
      </div>
      <CustomPaginationActionsTable
        column={columns}
        dataSource={filteredData}
      />
      <CustomizedDialogs
        open={modalVisible}
        title={selectedInspection?.nombreProyecto}
        onClose={handleNotaSave}
      >
        {selectedInspection && (
          <div>
            <p>
              <strong>Último estatus:</strong>{" "}
              {selectedInspection.estatus.charAt(0).toUpperCase() +
                selectedInspection.estatus.slice(1)}
            </p>
            <p>
              <strong>Licencia:</strong> {selectedInspection.licencia}
            </p>
            <p>
              <strong>Fecha de solicitud:</strong>{" "}
              {selectedInspection.fechaSolicitud}
            </p>
            <p>
              <strong>Dirección:</strong> {selectedInspection.direccion}
            </p>
            <p>
              <strong>Inspector líder:</strong>{" "}
              {selectedInspection.inspectorLider}
            </p>
            <p>
              <strong>Inspector:</strong> {selectedInspection.inspector}
            </p>
            <p>
              <strong>Conductor:</strong> {selectedInspection.conductor}
            </p>
            <p>
              <strong>Ficha:</strong> {selectedInspection.ficha}
            </p>
            <div style={{ margin: "16px 0" }}>
              <strong>Timeline:</strong>
              <Timeline>
                {selectedInspection.timeline.map((t, idx) => (
                  <TimelineItem key={idx}>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      {" "}
                      {t.status.charAt(0).toUpperCase() +
                        t.status.slice(1)}{" "}
                      -{" "}
                    </TimelineContent>
                    {t.date}
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
            <div>
              <strong>Notas de inspección:</strong>
              <Input
                value={nota}
                onChange={handleNotaChange}
                placeholder="Agregar nota"
                style={{ marginTop: 8 }}
              />
            </div>
          </div>
        )}
      </CustomizedDialogs>
    </div>
  );
};

export default InspectionsTableInfo;
