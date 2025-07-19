import React from "react";
import HeroTitle from "../atoms/HeroTitle";
import TextLg from "../atoms/TextLg";
import SearchForm from "../atoms/SearchForm";

const HomeHero = () => {
  return (
    <section className="sm:px-10 px-5 bg-bg-secondary">
      <div className="container mx-auto h-[91vh] flex justify-center flex-col items-center">
        <div className="max-w-xl mx-auto text-center">
          <HeroTitle>Debate Arena Community</HeroTitle>
          <TextLg>
            Battle of Opinions - Join passionate debates, share your
            perspective, and discover what the community thinks about the topics
            that matter most.
          </TextLg>
        </div>

        <SearchForm className="mt-20" />
        
      </div>
    </section>
  );
};

export default HomeHero;
