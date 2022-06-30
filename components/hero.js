import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <div
      id="heroSection"
      className="min-h-screen flex flex-col justify-between relative overflow-hidden"
    >
      <div className="hero-content w-full mx-auto px-5 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-8 xl:px-16">
        <div></div>
        <div className="justify-end md:mt-96 lg:mt-20 lg:pt-0">
          <div className="text-2xl text-right md:text-3xl lg:text-4xl xl:text-5xl font-typewriter">
            We create <span className="homepage-hero-title">software</span>
          </div>
          <div className="text-xl text-center md:text-2xl md:text-right lg:text-3xl xl:text-4xl font-typewriter">
            What do you want to build?
          </div>
        </div>
      </div>
      <div className="arrow-down-container mx-auto mb-4 md:mb-44 lg:mb-10 cursor-pointer">
        <div className={styles.arrow}></div>
        <img src="/images/circel-arrow.svg" alt="arrow down" />
      </div>
      <div className="md:hidden"> </div>
    </div>
  );
};

export default Hero;
