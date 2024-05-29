import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    //in react, non si possono utilizzare 2 o più componenti nel return (in questo caso di app.jsx), quindi usiamo quello che si chiama "fragment", ossia "<>"
    <>
      <Header />
      <UserGreeting isLoggedIn={true} username="Pier" />
      {/* <Student name="Giovanni" age={25} isStudent={false} /> */}

      <Footer />
    </>
  );
}

export default App
