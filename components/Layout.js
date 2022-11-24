import Navbar from "./Navbar";
import FooterSection from "./FooterSection";
import StickyChart from "./chat/StickyChart";

export default function Layout({children}) {
  return (
    <>
        <Navbar />
        <StickyChart />
        <main>{children}</main>
        <FooterSection />
    </>
  )
}
