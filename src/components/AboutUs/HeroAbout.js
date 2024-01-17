import React from "react";
import { useSpring, animated } from "react-spring";
import ReactPlayer from "react-player";
import story from "../../assets/story.mp4";

const HeroAbout = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={fadeIn}
      className="p-28 pb-10 w-full h-full  flex-col "
    >
      <div className="mt-12 flex items-center justify-center w-full">
        <div className="">
          <div className="flex items-center justify-start my-4">
            <h1 className="text-[--primary-color] text-lg rounded-md font-[700] border-2 p-2">
            Elevate Vyapar story
            </h1>
          </div>
          <div className="my-4">
            <h2 className="md:text-5xl text-3xl text-left leading-snug font-[600]">
              Our working process to improve your business{` `}
              <span className="text-[--primary-color]">
                Empowered Community
              </span>
            </h2>
          </div>
          <div className="my-4">
            <p className="text-justify font-[400] text-sm">
             In today's world, the online attention span is shorter than a cat video, although impressions are often made through a screen. Thus it's essential to be creative to stand out among peers and competitors. Don’t worry!!! Here comes us ELEVATE VYAPAR- the branding powerhouse that helps you turn heads and make your audience stay. 
            </p>
          </div>
        </div>
        <div className="my-4 ml-8">
          <ReactPlayer
            url={story}
            width="100%"
            height="100%"
            playing
            loop
            controls={false}
          />
        </div>
      </div>
    </animated.div>
  );
};

export default HeroAbout;
