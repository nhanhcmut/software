
import Navbar from "@/componentWeb/navbar/Navbar";
import Footer from "@/componentWeb/footer/Footer";


export default function adminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {/* <div className="h-[calc(60vh)] ">{children}</div>
         */}
      <div className=" ">{children}</div>
      <Footer />
    </>
  );
}
