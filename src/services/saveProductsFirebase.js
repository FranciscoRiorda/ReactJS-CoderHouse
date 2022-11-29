import characters from "../data/product.json";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const saveProductsFirebase = () => {
  try {
    characters.forEach(async (character) => {
      const docRef = await addDoc(collection(db, "products"), {
        evento: character.evento,
        salon: character.salon,
        img: character.img,
        stock: character.stock,
        fecha: character.fecha,
        categoria: character.categoria,
        precio: character.precio,
      });
      console.log("Document written with ID: ", docRef.id);
    });
  } catch (error) {
    console.log(error);
  }
};
