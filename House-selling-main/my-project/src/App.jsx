import Footer from "./components/Footer";
import OLXHeader from "./components/OLXHeader";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <OLXHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
