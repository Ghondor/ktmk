import Team from '../modules/team';
import About from '../modules/about';
import Contact from '../modules/contact';
import Careers from '../modules/careers';
import Incubator from '../modules/incubator';
import Layout from '../modules/shared/layout';
import Technologies from '../modules/technologies';
import Hero from '../components/hero';

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <About />
      <Technologies />
      <Team />
      <Careers />
      <Incubator />
      <Contact />
    </Layout>
  );
}
