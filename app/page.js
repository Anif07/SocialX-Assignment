import Image from "next/image";
import Link from "next/link";
// import { Provider } from "react-redux";
import Navbar from "./components/home/Navbar";
import Banner from "./components/home/Banner";
import Footer from "./components/home/Footer";
import Products from "./components/home/Products";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}
export default Home;
