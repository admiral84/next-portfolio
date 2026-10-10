import Header from "@/components/Header";
import { Hero, About, Skills, Projects, Experience, Education, Learning, Contact, Footer } from "@/components/Sections";
import { site, nav } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header name={site.name} links={nav} />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Education /><Learning /><Contact />
      </main>
      <Footer />
    </>
  );
}
