import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const glideSlides = [
  '/images/technologies/ruby.svg',
  '/images/technologies/rails.svg',
  '/images/technologies/js.svg',
  '/images/technologies/html.svg',
  '/images/technologies/css.svg',
  '/images/technologies/adobeai.svg',
  '/images/technologies/github.svg',
  '/images/technologies/jekyll.svg',
  '/images/technologies/pgres.svg',
  '/images/technologies/ps.svg',
  '/images/technologies/stimulus.svg',
  '/images/technologies/tailwind.svg',
  '/images/technologies/vuejs.svg',
  '/images/technologies/xd.svg',
];

const Technologies = () => {
  return (
    <section>
      <h1>
        Technologies <span className="w-1/5"></span>
      </h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 1000 }}
        spaceBetween={50}
        slidesPerView={5}
        navigation
      >
        {glideSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide} width={50} height={50} layout="responsive" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Technologies;
