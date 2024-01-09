import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Cactus Club",
  description: "",
};
export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
