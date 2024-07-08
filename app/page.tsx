import AboutAuthor from "@/components/HomeComponents/AboutAuthor";
import AuthorBooks from "@/components/HomeComponents/AuthorBooks";
import HomeHero from "@/components/HomeComponents/HomeHero";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AuthorBooks />
      <AboutAuthor />
    </>
  );
}
