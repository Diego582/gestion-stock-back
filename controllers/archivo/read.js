import ExcelJS from "exceljs";
import { promises as fs } from "fs";
import ProductBase from "../../models/ProductBase.js";

const filePath = "upload/prueba1.xlsx";

export default async (req, res, next) => {
  // Crear una nueva instancia de ExcelJS Workbook
  const workbook = new ExcelJS.Workbook();
  try {
    console.log("ingreso a lectura");
    // Leer el archivo Excel
    await workbook.xlsx.readFile(filePath);

    // Obtener la primera hoja del libro
    const worksheet = workbook.getWorksheet(1);

    // Convertir el contenido de la hoja a un objeto JSON
    const jsonData = [];

    worksheet.eachRow({ includeEmpty: false }, async (row, rowNumber) => {
      console.log({
        codigoBarras: row.values[1],
        descripcion: row.values[2],
        categoria: row.values[3],
      });
      console.log(rowNumber, "rowNumber");
      await ProductBase.create({
        codigoBarras: row.values[1],
        descripcion: row.values[2],
        categoria: row.values[3],
      });

      jsonData[rowNumber - 1] = row.values;
    });

    // Imprimir el objeto JSON resultante
    console.log(jsonData);

    // También puedes escribir el JSON en un archivo si es necesario
    await fs.writeFile("output.json", JSON.stringify(jsonData, null, 2));
  } catch (error) {
    console.error("Error al leer el archivo:", error.message);
  }
};
