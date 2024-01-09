import Banner from "../components/Banner/Banner";
import CactusKeno from "../components/CactusKeno/CactusKeno";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Offer from "../components/Offer/Offer";
import RecentWinner from "../components/RecentWinner/RecentWinner";

export default function Home() {
  return (
    <>
      <Banner />
      <CactusKeno/>
      <RecentWinner/>
      <Offer/>
      <ComingSoon/>
    </>
  )
}
