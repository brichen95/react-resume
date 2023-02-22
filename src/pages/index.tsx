import dynamic from 'next/dynamic';
import {FC, memo, useCallback,useState} from 'react';

// import Konami from 'react-konami-code';
import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import KonamiCode from '../components/Sections/KonamiCode';
//import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  const [trollMode, setTrollMode] = useState(false);

  const konamiAction = useCallback(() => {
    alert("ya found me! setting trollmode to " + !trollMode);
    setTrollMode(!trollMode);
  }, [trollMode]);

  return (
    <Page description={description} title={title}>
      <KonamiCode func={konamiAction}/>
      <Header />
      <Hero trollMode={trollMode} />
      <About />
      <Resume />
      {/* <Portfolio /> */}
      <Testimonials trollMode={trollMode}/>
      <Contact />
      <Footer />
      {/* <Konami action={konamiAction} /> */}
    </Page>
  );

  
});

export default Home;
