import React from "react";
import Navbar from "../components/Navbar";
import TopRatedPlants from "./TopRatedPlants";
import PlantOfTheWeek from "./PlantOfTheWeek";
import PlantCareTips from "./PlantCareTips";
import GreenExperts from "./GreenExperts";

import Newsletter from "./Newsletter";
import DecorIdea from "./DecorIdea";

const Home = () => {
  // const { state } = useNavigation()

  // console.log(state)

  return (
    <div>
      <Navbar />
      <TopRatedPlants />
      <PlantOfTheWeek />
      <PlantCareTips />
      <GreenExperts />
      <DecorIdea />
      <Newsletter />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
