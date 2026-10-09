
import HeroPage from './components/Hero';
import Marquee from './components/Marquee';

const HomePage = () => {
  return (
    <div className='bg-base-300'>

      <Marquee/>

      <div>
        <HeroPage/>
      </div>
    </div>
  );
};

export default HomePage;