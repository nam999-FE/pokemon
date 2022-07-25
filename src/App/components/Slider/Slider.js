import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import 'swiper/css/bundle';
import "../../../App.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const data = [
  {
    id: 0,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
  },
  {
    id: 1,
    image: "http://pngimg.com/uploads/pokemon/pokemon_PNG98.png"
  }
];
export default function App() {
  return (
    <Swiper
      className="swiper"
      virtual
      slidesPerView={1}
      // slidesPerColumn={2}
      // slidesPerColumnFill="row"
      spaceBetween={30}
      // slidesPerGroup={2}
      // autoplay
      // loop

      navigation
      pagination
    >
      <SwiperSlide>
        <div className="slide">
          <img
            className="imgSlider"
            src="http://pngimg.com/uploads/pokemon/pokemon_PNG98.png"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <img
            className="imgSlider"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
