import Nav from './components/Nav';
import Ticker from './components/Ticker';
import FloatDonate from './components/FloatDonate';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Manifesto from './components/Manifesto';
import Agenda from './components/Agenda';
import Numbers from './components/Numbers';
import Support from './components/Support';
import Involved from './components/Involved';
import JoinStrip from './components/JoinStrip';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Ticker />
      <FloatDonate />
      <Hero />
      <div className="weave-divider"></div>
      <Bio />
      <Manifesto />
      <div className="weave-divider gold"></div>
      <Agenda />
      <Numbers />
      <Support />
      <Involved />
      <JoinStrip />
      <Footer />
    </>
  );
}
