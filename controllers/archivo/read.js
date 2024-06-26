import ExcelJS from "exceljs";
import { promises as fs } from "fs";
import ProductBase from "../../models/ProductBase.js";

const filePath = "upload/art_cod_bar.xlsx";

export default async (req, res, next) => {
  // Crear una nueva instancia de ExcelJS Workbook
  const workbook = new ExcelJS.Workbook();
  try {

    // Leer el archivo Excel
    await workbook.xlsx.readFile(filePath);

    // Obtener la primera hoja del libro
    const worksheet = workbook.getWorksheet(1);

    // Convertir el contenido de la hoja a un objeto JSON
    const jsonData = [];

    worksheet.eachRow({ includeEmpty: false }, async (row, rowNumber) => {


      const document = {
        codigoBarras: row.values[1],
        descripcion: row.values[2],
        categoria: row.values[3],
      };
      /*  try {
         await ProductBase.create(document);
       } catch (error) {
         console.error("Error al leer el archivo:", error);
       } */

      jsonData[rowNumber - 1] = document;
    });

    // Imprimir el objeto JSON resultante
    

    // También puedes escribir el JSON en un archivo si es necesario
    await fs.writeFile("output.json", JSON.stringify(jsonData, null, 2));
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
};
