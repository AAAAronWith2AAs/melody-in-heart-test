import React from "react";
import { Image, Transition } from "semantic-ui-react";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer";
import banner from "../../Images/Banner.jpg";

function Home() {
  return (
    <ResponsiveContainer>
      <Image src={banner} fluid />
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/285003278&color=%23000aff&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
      ></iframe>
      <div>
        <a
          href="https://soundcloud.com/melodyinheart"
          title="Melody In Heart"
          target="_blank"
        >
          Melody In Heart
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/melodyinheart/sets/the-sippin-sessions-1"
          title="The Sippin Sessions."
          target="_blank"
        >
          The Sippin Sessions.
        </a>
      </div>
    </ResponsiveContainer>
  );
}

export default Home;
