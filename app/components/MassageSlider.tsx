"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaRegClock, FaRubleSign, FaTag } from 'react-icons/fa';
import Image from 'next/image';

const massages = [
  {
    id: 1,
    title: "Экспресс СПА массаж одной зоны",
    time: "10 мин",
    originalPrice: "500 ₽",
    discountedPrice: null,
    description: "Быстрый и эффективный массаж одной проблемной зоны для снятия напряжения и улучшения кровообращения.",
    image: "/image/express-spa.jpg",
  },
  {
    id: 2,
    title: "СПА массаж одной зоны",
    time: "20 мин",
    originalPrice: "1350 ₽",
    discountedPrice: null,
    description: "Расслабляющий массаж одной зоны для глубокой проработки мышц и снятия стресса.",
    image: "/image/spa-zone.jpg",
  },
  {
    id: 3,
    title: "Спортивный/лимфодренажный/миофасциальный массаж",
    time: "60 мин",
    originalPrice: "2560 ₽",
    discountedPrice: null,
    description: "Профессиональный массаж для спортсменов, снятия отеков или работы с фасциями - в зависимости от ваших потребностей.",
    image: "/image/sport-massage.jpg",
  },
  {
    id: 4,
    title: "Антицеллюлитный массаж",
    time: "45 мин",
    originalPrice: "3000 ₽",
    discountedPrice: null,
    description: "Интенсивный массаж, направленный на борьбу с целлюлитом и улучшение контуров тела.",
    image: "/image/anti-cellulite.jpg",
  },
  {
    id: 5,
    title: "Общий массаж",
    time: "80 мин",
    originalPrice: "3750 ₽",
    discountedPrice: null,
    description: "Комплексный массаж всего тела для глубокого расслабления, снятия напряжения и улучшения общего самочувствия.",
    image: "/image/full-body.jpg",
  },
  {
    id: 6,
    title: "Баночный массаж",
    time: "30-40 мин",
    originalPrice: "2000 ₽",
    discountedPrice: null,
    description: "Традиционная техника для улучшения кровообращения и снятия мышечного напряжения с использованием банок.",
    image: "/image/banka.png",
  },
  {
    id: 7,
    title: "Массаж даосскими вениками",
    time: "30 мин",
    originalPrice: "3000 ₽",
    discountedPrice: null,
    description: "Уникальная техника массажа с использованием даосских веников для гармонизации энергии тела.",
    image: "/image/daos.png",
  },
  {
    id: 8,
    title: "Медовый массаж одной зоны",
    time: "30 мин",
    originalPrice: "2200 ₽",
    discountedPrice: null,
    description: "Питательный массаж с использованием натурального меда для увлажнения кожи и снятия напряжения.",
    image: "/image/honey.png",
  },
  {
    id: 9,
    title: "Стоун массаж",
    time: "60 мин",
    originalPrice: "3000 ₽",
    discountedPrice: null,
    description: "Расслабляющий массаж с использованием горячих камней для глубокого прогрева и релаксации.",
    image: "/image/stone.png",
  },
];

export default function MassageSlider({ setSelectedMassage }: { setSelectedMassage: (massage: string) => void }) {
  return (
    <section id="massageSlider" className="my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white tracking-tight">Наши виды спа-массажа</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="pb-12"
      >
        {massages.map((massage) => (
          <SwiperSlide key={massage.id}>
            <div
              className="bg-stone-700 rounded-xl shadow-xl p-6 flex flex-col justify-between h-full min-h-[450px] transform transition duration-300 hover:scale-105 hover:shadow-2xl focus-within:shadow-2xl"
              role="region"
              aria-label={`Массаж: ${massage.title}`}
              tabIndex={0}
              onClick={() => setSelectedMassage(massage.title)}
            >
              <div className="flex-grow">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={massage.image}
                    alt={massage.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{massage.title}</h3>
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">{massage.description}</p>
                <div className="flex items-center text-gray-300 mb-2">
                  <FaRegClock className="mr-2 text-amber-400" size={20} />
                  <span>{massage.time}</span>
                </div>
                <div className="flex items-center text-gray-300 mb-2">
                  <FaRubleSign className="mr-2 text-amber-400" size={20} />
                  {massage.discountedPrice ? (
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 line-through">{massage.originalPrice}</span>
                      <span className="text-white font-semibold">{massage.discountedPrice}</span>
                    </div>
                  ) : (
                    <span>{massage.originalPrice}</span>
                  )}
                </div>
                {massage.discountedPrice && (
                  <div className="flex items-center text-sm text-white mt-1">
                    <FaTag className="mr-2" size={16} />
                    <span>Скидка</span>
                  </div>
                )}
              </div>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#bookingForm"
                  onClick={() => setSelectedMassage(massage.title)}
                  className="flex-1 text-center py-3 px-4 bg-white text-stone-900 rounded-lg hover:bg-amber-400 transition-colors duration-200 font-semibold"
                  aria-label={`Записаться на ${massage.title}`}
                >
                  Записаться
                </a>
                <a
                  href="#bookingForm"
                  className="flex-1 text-center py-3 px-4 bg-stone-500 text-white rounded-lg hover:bg-stone-600 transition-colors duration-200 font-semibold"
                  aria-label={`Подробнее о ${massage.title}`}
                >
                  Подробнее
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
