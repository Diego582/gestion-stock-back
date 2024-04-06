import "dotenv/config.js";
import { connect } from "mongoose";
import ProductBase from "../ProductBase.js";
import { productos } from "../../product.js";

async function createProduct(arrayProducts) {
  try {
    await connect(process.env.LINK_DB);
    for (let product of arrayProducts) {
      let productBase = await ProductBase.findOne({
        codigoBarras: product.codigoBarras,
      });

      if (!productBase) {
        await ProductBase.create(product);

      }

      if (productBase && productBase.length > 0) {

      }
    }

  } catch (error) {
    console.log(error);
  }
}

createProduct(productos);
