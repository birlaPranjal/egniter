"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/autoplay"
import Image from "next/image"

const images = [
  "https://res.cloudinary.com/travelee/image/upload/v1739795141/studio1_plsx8o.webp",
  "https://res.cloudinary.com/travelee/image/upload/v1739795724/photo-1553877522-43269d4ea984_gxfo8i.avif",
  // "https://res.cloudinary.com/travelee/image/upload/v1739795189/images_dxrjqv.jpg",
  // "https://res.cloudinary.com/travelee/image/upload/v1739795206/images_x8qnzc.jpg",
  // "https://res.cloudinary.com/travelee/image/upload/v1739795228/studio-computer-music-station-professional-audio-mixing-console-d-rendering-set-up-faders-adjusting-knobs-big-monitor-140495992_qf3rlf.webp",
  // "https://res.cloudinary.com/travelee/image/upload/v1739795246/images_cf5lce.jpg",
  "https://res.cloudinary.com/travelee/image/upload/v1739795290/IMG_1504_lqsb2h.webp",
  "https://res.cloudinary.com/travelee/image/upload/v1739795761/photo-1613909207039-6b173b755cc1_rlbnyy.avif",
  // "https://res.cloudinary.com/travelee/image/upload/v1739795317/images_l7rbkp.jpg",
  "https://res.cloudinary.com/travelee/image/upload/v1739795356/Studio_1_jg72xe.jpg",
  "https://res.cloudinary.com/travelee/image/upload/v1739795588/photo-1614604858874-5354c8788d3e_cgl2c7.avif",
  "https://res.cloudinary.com/travelee/image/upload/v1739795637/photo-1554774853-aae0a22c8aa4_mbvktz.avif",
  "https://res.cloudinary.com/travelee/image/upload/v1739795677/photo-1517245386807-bb43f82c33c4_qiruxk.avif",

  
]

export default function CustomSwiper() {
  return (
    <div className="w-[90vw] flex justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1}
        loop
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-6xl"
        breakpoints={{
          640: {
            slidesPerView: 1.2
          },
          1024: {
            slidesPerView: 1.6
          }
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide 
            key={index} 
            className="relative transition-all duration-300"
          >
            {({ isActive }: { isActive: boolean }) => (
              <div 
                className={`relative h-[200px] sm:h-[300px] transition-all duration-300 ${
                  isActive 
                    ? 'scale-100 z-10 opacity-100' 
                    : 'scale-[0.65] opacity-40'
                }`}
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  style={{ objectFit: "cover"}}
                  fill
                  className="rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-black/50 to-black/0"></div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
