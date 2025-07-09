"use client";
import React, { useState, useMemo } from "react";
import { Input } from "@mui/material";
import CustomPaginationActionsTable from "./commonComponents/TablePagination";
import CustomizedDialogs from "./commonComponents/modals";

import type { Inspection } from "./inpections-table-info";

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

// Dummy data for demonstration
const initialData: Inspection[] = [
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

const columns = [
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
];

const InspectionsTableInfo: React.FC = () => {
  const [data, setData] = useState<Inspection[]>(initialData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<Status>("All");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Inspection | null>(
    null,
  );
  const [nota, setNota] = useState("");

  // Attach onViewDetails to each row
  const tableData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        onViewDetails: (record: Inspection) => {
          setSelectedProject(record);
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

  // Modal save notas
  const handleNotaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNota(e.target.value);
  };

  const handleNotaSave = (value: boolean) => {
    if (selectedProject) {
      setData((prev) =>
        prev.map((item) =>
          item.key === selectedProject.key ? { ...item, notas: nota } : item,
        ),
      );
      setModalVisible(value);
    }
  };

  return (
    <div>
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
      </div>

      <CustomPaginationActionsTable
        column={columns}
        dataSource={filteredData}
      />
      <CustomizedDialogs
        open={modalVisible}
        title={selectedProject?.nombreProyecto}
        onClose={handleNotaSave}
      >
        {selectedProject && (
          <div>
            aqui va la pagina para realizar el informe de la isnpeccion a travez
            de las paginas
          </div>
        )}
      </CustomizedDialogs>
    </div>
  );
};

export default InspectionsTableInfo;
