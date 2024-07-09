import Articles from "@/components/Articles";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import AboutAuthor from "@/components/HomeComponents/AboutAuthor";
import AuthorBooks from "@/components/HomeComponents/AuthorBooks";
import Chapters from "@/components/HomeComponents/Chapters";
import HomeHero from "@/components/HomeComponents/HomeHero";
import WhatToLearn from "@/components/HomeComponents/WhatToLearn";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AuthorBooks />
      <AboutAuthor />
      <Stats />
      <Cta />
      <WhatToLearn />
      <Chapters />
      <Reviews />
      <Articles />
      <Newsletter />
      <Footer />
    </>
  );
}
