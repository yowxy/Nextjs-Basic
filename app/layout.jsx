import Navbar from "@/components/Navbar";
import "./Global.css";
import { poppins } from "./font";

export const metadata = {
  title:{
      default:"Situs Nextjs",
      template:"%s | Situs Nextjs "
  }
}


export default function Layout({ children }) {
  return (
    <html lang="en"  className={poppins.variable} >
       <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className=" bg-white  px-4 py-4 flex flex-col min-h-screen ">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center  text-xs ">
          <span>halo ini adalah bagian dari komponen footer</span>
        </footer>
      </body>
    </html>
  );
}
