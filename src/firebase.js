import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3f3A37vyPHWcGmW4zwIoHa_72rOcSOE4",
  authDomain: "ecommerce-store-91ad1.firebaseapp.com",
  projectId: "ecommerce-store-91ad1",
  storageBucket: "ecommerce-store-91ad1.appspot.com",
  messagingSenderId: "935819177020",
  appId: "1:935819177020:web:a66d712bcd7a022362e739"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;