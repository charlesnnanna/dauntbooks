import AboutAuthor from "@/components/HomeComponents/AboutAuthor";
import AuthorBooks from "@/components/HomeComponents/AuthorBooks";
import HomeHero from "@/components/HomeComponents/HomeHero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AuthorBooks />
      <AboutAuthor />
      <Stats />
    </>
  );
}
