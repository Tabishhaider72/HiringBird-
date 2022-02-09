import styled from "styled-components";
import Header from "../common/components/Header";
import { Container } from "../common/styles/Container.styled";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Card from "./Card";
import Link from "next/link";

function Skills() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <Header title="Skills" prevRef={prevRef} nextRef={nextRef} />

      <StyledSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1275: {
            slidesPerView: 4,
          },
          927: {
            slidesPerView: 3,
          },
          324: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
<< HEAD
          <Card title="React/Node" image="https://d2mk45aasx86xg.cloudfront.net/Node_js_developers_95b2c48703.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Java" image="https://d2mk45aasx86xg.cloudfront.net/Java_developers_86c5bc8f57.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Python" image="https://d2mk45aasx86xg.cloudfront.net/Python_developers_a5a044727a.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Angular" image="https://d2mk45aasx86xg.cloudfront.net/Angular_developer_6af28faf86.svg" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="AI/ML" image="https://d2mk45aasx86xg.cloudfront.net/AI_developers_7da8704a5f.svg" />
        </SwiperSlide>
      </StyledSwiper>
      </Container>
          <Card title="Full-Stack" image="skills" />
          <br />
          <Card title="Data Engineer" image="skills" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Back-end" image="skills" />
          <br />
          <Card title="Product Analyst" image="skills" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Front-end" image="skills" />
          <br />
          <Card title="Bussiness Analyst" image="skills" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="DevOps" image="skills" />
          <br />
          <Card title="Mobile" image="skills" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Front-end" image="skills" />
          <br />
          <Card title="Data Engineer" image="skills" />
        </SwiperSlide>
        <SwiperSlide />
      </StyledSwiper>
    </Container>
>>>>>>> d4e855a3e9d8958812deeb9bc118e43b8fecd385
  );
}

export default Skills;

const StyledSwiper = styled(Swiper)`
  /* pagination */
  .swiper-slide {
    padding-bottom: 3rem;
  }
  .swiper-pagination {
  }
  .swiper-pagination-bullet {
  }
  .swiper-pagination-bullet-active {
    background: #f26a7e;
  }
`;
const SwiperSlid = styled(SwiperSlide)``;
