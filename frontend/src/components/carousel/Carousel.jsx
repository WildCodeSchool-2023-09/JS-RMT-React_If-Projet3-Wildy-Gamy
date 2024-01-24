import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";

function Carousel({ data }) {
  return (
    <div className="carouselContainer">
      <Splide
        aria-label="Testimonial"
        options={{
          type: "loop",
          Width: "100%",
          perPages: 1,
        }}
      >
        {data.map((e) => (
          <SplideSlide className="splideSlide" key={e.id}>
            <ul className="thumbnails">
              <li className="thumbnail">
                <img src={e.image} alt={e.alt} />
              </li>
            </ul>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
}.isRequired;

export default Carousel;
