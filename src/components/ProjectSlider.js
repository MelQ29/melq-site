import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SliderContainer = styled.div`
margin: 20px 0;
padding: 20px;
background-color:rgba(36, 36, 36, 0.89);
border-radius: 8px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
.swiper-button-next,
.swiper-button-prev {
    color: #ff0000; /* Красный цвет для стрелок */
`;

const SlideContent = styled.div`
text-align: center;
`;

const ProjectSlider = () => {
return (
    <SliderContainer>
     <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 120000 }}
        modules={[Navigation]}
        navigation 
     >
        <SwiperSlide>
         <SlideContent>
            <h3>My Points App</h3>
            <p>Цель: Пример цели проекта</p>
            <p>Технологии: Flutter, Node.js, MySQL</p>
            <p>Описание: Здесь можно добавить описание проекта.</p>
         </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
         <SlideContent>
            <h3>Проект 2</h3>
            <p>Цель: Пример цели проекта</p>
            <p>Технологии: Flutter, Node.js, MySQL</p>
            <p>Описание: Здесь можно добавить описание проекта.</p>
         </SlideContent>
        </SwiperSlide>
        {/* Больше слайдов */}
     </Swiper>
    </SliderContainer>
);
};

export default ProjectSlider;