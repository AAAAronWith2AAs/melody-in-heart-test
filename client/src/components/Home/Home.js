import React from "react";
import { Image } from "semantic-ui-react";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer";
import banner from "../../Images/Banner.jpg";

function Home() {
  return (
    <ResponsiveContainer>
      <Image src={banner} fluid />
    </ResponsiveContainer>
  );
}

export default Home;
