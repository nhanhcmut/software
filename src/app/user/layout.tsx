import Navbar from "@/componentWeb/navbar/Navhome";
export default function adminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen justify-center bg-gradient-to-r from-white to-blue-300">
      <Navbar />
      <div className=" ">{children}</div>
    </div>
  );
}
