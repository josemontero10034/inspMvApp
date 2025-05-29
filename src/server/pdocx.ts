
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
} from "docx";
import fs from "fs";
import type { FormDataStructure } from "~/app/_components/option-form/types";

const createDocument = (formData: FormDataStructure) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: `Project Name: ${formData.projectName}`,
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph(`Location: ${formData.location}`),
          new Paragraph(`Date: ${formData.date.toLocaleDateString()}`),
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("Inspector 1")],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [new Paragraph(formData.inspector1Name)],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                ],
              }),
              // Add more rows as needed
            ],
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
