import Image from "next/image";

import HomePage from "./home"
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Footer/>
    </>
    
  );
}
