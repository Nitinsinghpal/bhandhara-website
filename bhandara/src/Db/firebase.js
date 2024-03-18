import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";  

const firebaseConfig = {
  //   apiKey: "AIzaSyA2RUg2lbMhiTILHJSfcR4xCF5vYCHeKlo",
  // authDomain: "bhandara-6d0b6.firebaseapp.com",
  // databaseURL: "https://bhandara-6d0b6-default-rtdb.firebaseio.com",
  // projectId: "bhandara-6d0b6",
  // storageBucket: "bhandara-6d0b6.appspot.com",
  // messagingSenderId: "632136744273",
  // appId: "1:632136744273:web:3456a50882d0bbb378a770",
  // measurementId: "G-R5VHWFD9BZ"
  apiKey: "AIzaSyDyKoF6Ybt7xtgFvwJmkPFhjFzFp41EKz4",
  authDomain: "sample-medi.firebaseapp.com",
  databaseURL: "https://sample-medi-default-rtdb.firebaseio.com",
  projectId: "sample-medi",
  storageBucket: "sample-medi.appspot.com",
  messagingSenderId: "471785791196",
  appId: "1:471785791196:web:6dde84b5e83502ec715e19"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
export {db,storage}   