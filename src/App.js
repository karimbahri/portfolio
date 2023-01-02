import "./styles/styles.css";
import "animate.css/animate.min.css";
import Header from "./component/header";
import Homepage from "./component/homepage";
import Whoami from "./component/whoami";
import Services from "./component/services";
import Footer from "./component/footer";
import Contact from "./component/contact";
import Work from "./component/work";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Homepage />
        <Whoami />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
