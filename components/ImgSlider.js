import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImgSlider({ movies }) {
  const BASE_PATH = `https://image.tmdb.org/t/p/original`;
  const imageUrl = movies[0].backdrop_path
    ? `${BASE_PATH}${movies[0].backdrop_path}`
    : `/movie.jpg`;

  const imageUrl2 = movies[1].backdrop_path
    ? `${BASE_PATH}${movies[1].backdrop_path}`
    : `/movie.jpg`;

  const imageUr3 = movies[2].backdrop_path
    ? `${BASE_PATH}${movies[2].backdrop_path}`
    : `/movie.jpg`;

  const imageUrl4 = movies[3].backdrop_path
    ? `${BASE_PATH}${movies[3].backdrop_path}`
    : `/movie.jpg`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings} className="slider">
        <div className="wrapper">
          <img src={imageUrl} alt="" />
        </div>
        <div className="wrapper">
          <img src={imageUrl2} alt="" />
        </div>
        <div className="wrapper">
          <img src={imageUr3} alt="" />
        </div>
        <div className="wrapper">
          <img src={imageUrl4} alt="" />
        </div>
      </Slider>
    </div>
  );
}
