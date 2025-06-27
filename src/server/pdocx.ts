"use server";
import {
  Table,
  Document,
  HeadingLevel,
  TableCell,
  TableRow,
  Paragraph,
  Packer,
  VerticalAlign,
  ImageRun,
  TextRun,
} from "docx";
import fs from "fs";
import type { FormDataStructure } from "~/app/_components/option-form/types";

function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64.split(",")[1] ?? base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

const createDocument = (formData: FormDataStructure) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [new TextRun("DATOS GENERALES")],
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                    columnSpan: 5,
                    shading: {
                      type: "clear",
                      color: "auto",
                      fill: "000000", // black background
                    },
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("Nombre del proyecto")],
                    verticalAlign: VerticalAlign.CENTER,
                    width: { size: 500, type: "auto" },
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.projectName)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph("Licencia no.")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.licenseNumber)],
                    verticalAlign: VerticalAlign.CENTER,
                    columnSpan: 2,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("Nivel a inspeccionar")],
                    verticalAlign: VerticalAlign.CENTER,
                    width: { size: 500, type: "auto" },
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.levelInspection)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph("Sol. Licencia No.")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.licenseNumberAsked)],
                    verticalAlign: VerticalAlign.CENTER,
                    columnSpan: 2,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("Encargado de obra")],
                    verticalAlign: VerticalAlign.CENTER,
                    width: { size: 500, type: "auto" },
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.bossName)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph("Fecha")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      new Paragraph(formData.date.toLocaleDateString()),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                    columnSpan: 2,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("Dirección")],
                    verticalAlign: VerticalAlign.CENTER,
                    width: { size: 500, type: "auto" },
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.location)],
                    verticalAlign: VerticalAlign.CENTER,
                    columnSpan: 4,
                  }),
                ],
              }),
            ],
          }),
          new Table({
            rows: [
              ...formData.evaluationInformationOptions.flatMap((option) => [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: option.title,
                              bold: true,
                              color: "FFFFFF",
                            }),
                          ],
                          alignment: "center",
                        }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      columnSpan: 5,
                      textDirection: "lrTb",
                      shading: {
                        type: "clear",
                        color: "auto",
                        fill: "000000", // black background
                      },
                    }),
                  ],
                }),
                ...option.evaluationByCheckbox.map((checkbox) => {
                  return new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph(checkbox.question)],
                        verticalAlign: VerticalAlign.CENTER,
                        columnSpan: 3,
                      }),
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              // Checkbox marcado si isTrue
                              new TextRun({
                                text: checkbox.isTrue ? "☑" : "☐",
                                font: "Arial Unicode MS",
                              }),
                            ],
                          }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                      }),
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              // Checkbox marcado si isFalse
                              new TextRun({
                                text: checkbox.isFalse ? "☑" : "☐",
                                font: "Arial Unicode MS",
                              }),
                            ],
                          }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                      }),
                    ],
                  });
                }),
              ]),
            ].concat([
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "OBSERVACIONES",
                            bold: true,
                            color: "FFFFFF",
                          }),
                        ],
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                    shading: {
                      type: "clear",
                      color: "auto",
                      fill: "000000", // black
                      //  background
                    },
                    columnSpan: 5,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph(formData.observation)],
                    verticalAlign: VerticalAlign.CENTER,
                    columnSpan: 5,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "NOMBRES Y FIRMAS",
                            bold: true,
                            color: "FFFFFF",
                          }),
                        ],
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                    shading: {
                      type: "clear",
                      color: "auto",
                      fill: "000000", // black
                      //  background
                    },
                    textDirection: "lrTb",
                    columnSpan: 5,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph(" ")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph("Nombres y Apellidos")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph("Firma")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph("Codia")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph("Fecha")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("Encargado de obra")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.bossName)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      formData.bossSign
                        ? new Paragraph({
                            children: [
                              new ImageRun({
                                type: "png",
                                data: base64ToUint8Array(formData.bossSign),
                                transformation: {
                                  width: 100,
                                  height: 50,
                                },
                              }),
                            ],
                          })
                        : new Paragraph("No hay firma"),
                    ],

                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.bossCodia)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      new Paragraph(formData.bossDate.toLocaleDateString()),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("Inspectores")],
                    verticalAlign: VerticalAlign.CENTER,
                    rowSpan: 3,
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.inspector1Name)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      formData.inspector1Sign
                        ? new Paragraph({
                            children: [
                              new ImageRun({
                                type: "png",
                                data: base64ToUint8Array(
                                  formData.inspector1Sign
                                ),
                                transformation: {
                                  width: 100,
                                  height: 50,
                                },
                              }),
                            ],
                          })
                        : new Paragraph("No hay firma"),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.inspector1Codia)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      new Paragraph(
                        formData.inspector1Date.toLocaleDateString()
                      ),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph(formData.inspector2Name)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      formData.inspector2Sign
                        ? new Paragraph({
                            children: [
                              new ImageRun({
                                type: "png",
                                data: base64ToUint8Array(
                                  formData.inspector2Sign
                                ),
                                transformation: {
                                  width: 100,
                                  height: 50,
                                },
                              }),
                            ],
                          })
                        : new Paragraph("No hay firma"),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.inspector2Codia)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      new Paragraph(
                        formData.inspector2Date.toLocaleDateString()
                      ),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph(formData.inspector3Name)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      formData.inspector3Sign
                        ? new Paragraph({
                            children: [
                              new ImageRun({
                                type: "png",
                                data: base64ToUint8Array(
                                  formData.inspector3Sign
                                ),
                                transformation: {
                                  width: 100,
                                  height: 50,
                                },
                              }),
                            ],
                          })
                        : new Paragraph("No hay firma"),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.inspector3Codia)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      new Paragraph(
                        formData.inspector3Date.toLocaleDateString()
                      ),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                ],
              }),
            ]),
          }),
        ],
      },
    ],
  });
  Packer.toBuffer(doc)
    .then((buffer) => {
      fs.writeFileSync("public/form-supervisor.docx", buffer);
      console.log("Document created successfully!");
    })
    .catch((error) => {
      console.error("Error creating document:", error);
    });
};

export default createDocument;

interface ReportData {

const createReport = (reportData: )
