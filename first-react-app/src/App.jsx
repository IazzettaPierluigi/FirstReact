import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";


function App() {
  return (
    //in react, non si possono utilizzare 2 o più componenti nel return (in questo caso di app.jsx), quindi usiamo quello che si chiama "fragment", ossia "<>"
    <>
      <Header />
      <Food />

      <Food />
      <Footer />
    </>
  );
}

export default App
