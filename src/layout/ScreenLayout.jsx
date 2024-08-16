import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Tabs from "../components/Tabs"
import Tickets from "../components/Tickets"
import Sidebar from "../components/Sidebar"
import CategoryAccordian from "../components/Accordian/CategoryAccordian"
import Category2Accordian from "../components/Accordian/Category2Accordian"
import Speakers from "../components/Speakers"
import WorkShop from "../components/WorkShop"
import Sponsers from "../components/Sponsers"
import HostedBy from "../components/HostedBy"


const ScreenLayout = () => {
  return (
    <>
    <Navbar/>
    <div className="flex">
      <div className="flex-3/5">
        <Hero />
        <Tabs />
        <Tickets />
        <Category2Accordian/>
        <CategoryAccordian />
        <Speakers />
        <WorkShop />
        <Sponsers />
      </div>
      <div className="flex-2/5">
      <div className="sticky top-0 bg-[#f8f9fa]">
        <Sidebar/>
        <HostedBy />
        </div>
      </div>
    </div>
    </>
  )
}

export default ScreenLayout
