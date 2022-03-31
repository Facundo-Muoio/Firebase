import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASUmiZyta0BT8Zz0XTxOzxXTFV-9Ect4s",
  authDomain: "fir-c07f9.firebaseapp.com",
  projectId: "fir-c07f9",
  storageBucket: "fir-c07f9.appspot.com",
  messagingSenderId: "955767939698",
  appId: "1:955767939698:web:a09c9612cf7c84617518eb"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore() ;

// agregar documento con setdoc(doc(dataBase,nombreColeccion,documento))
const createDoc = async () => {
  const data = {
    nombre: "Sierra",
    precio: "2500",
  }
  await setDoc(doc(db,"comercio","ferreteria"), data)
}

//actualizar un documento

const update = async () => {
  await updateDoc(doc(db,"comercio", "ferreteria"), {
    nombre: "martillo"
  })
}

//agregar documento sin id y que lo genere automáticamente firebase
const writeTheDoc = async () => {
    const docData = {
        name:"cartuchera",
        price: 200,
        id: 2,
        stock: 10
    };
    await addDoc(collection(db,"productos"), docData)
}

export { writeTheDoc }


//obtener varios documentos
const obtenerArchivos = async () => {
  const q = query(collection(db,"ferreteria"), where("precio", "==", 2500))
  const querySnapshot = await getDocs(q) ;
  querySnapshot.forEach((doc) => {
    console.log(doc.data().name)
  })

}

obtenerArchivos()
createDoc()
update()