import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD-SxZcvwlZtvtmHx9_mzGaxohnDOA-d0M",
    authDomain: "e-rozgaar-notetakingapp.firebaseapp.com",
    projectId: "e-rozgaar-notetakingapp",
    storageBucket: "e-rozgaar-notetakingapp.appspot.com",
    messagingSenderId: "173251205791",
    appId: "1:173251205791:web:163e1cb901846bb5b660aa",
    measurementId: "G-FYQ64DJKFY"
  };

  const App = initializeApp(firebaseConfig);

  export default App;