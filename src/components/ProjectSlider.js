import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

// Стилизованный контейнер под слайдер
const SliderContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: rgba(36, 36, 36, 0.89);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  .swiper-button-next,
  .swiper-button-prev {
    color: #ff0000;
  }
`;

// Стили для текста внутри слайда
const SlideContent = styled.div`
  text-align: center;
  color: #fff;

  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    margin: 10px 0;
    line-height: 1.6;
    font-size: 1rem;
  }

  b {
    color: #ffc107;
  }
`;

const ProjectSlider = () => {
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={60}
        slidesPerView={1}
        autoplay={{ delay: 7000 }}
        modules={[Navigation]}
        navigation
      >
        {/* Первый проект */}
        <SwiperSlide>
          <SlideContent>
            <motion.h3 whileHover={{ scale: 1.1 }}>
              My Points App
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <b>Технологии:</b> Flutter, Node.js, MySQL
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <b>Описание:</b> Мобильное приложение для трекинга тасков с
              получением опыта за их выполнение. Разрабатывал для домашнего
              использования, ещё в процессе доработки.
            </motion.p>
          </SlideContent>
        </SwiperSlide>

        {/* Второй проект */}
        <SwiperSlide>
          <SlideContent>
            <motion.h3 whileHover={{ scale: 1.1 }}>
              Title of your sex tape
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <b>Технологии:</b> React, TypeScript, AWS
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <b>Описание:</b> Веб-приложение для управления задачами в
              распределённой команде. Поддерживает интеграцию с Jira и
              Trello. Находится в стадии тестирования перед запуском.
            </motion.p>
          </SlideContent>
        </SwiperSlide>

        {/* Место для доп слайдеров */}
      </Swiper>
    </SliderContainer>
  );
};

export default ProjectSlider;