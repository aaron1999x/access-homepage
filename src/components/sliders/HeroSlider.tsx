import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fan, MoveLeft, MoveRight } from 'lucide-react';

export default function HeroSlider() {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <MoveRight color="white" size={30} />,
    prevArrow: <MoveLeft color="white" size={30} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderItems = Array(5).fill({
    icon: (
      <Fan className="group-hover:text-primary text-white h-[24px] w-[24px] md:h-[30px] md:w-[30px]" />
    ),
    title: 'Eiusmod tempor',
  });

  return (
    <div className="relative">
      {/* Background div */}
      <div className="absolute inset-0 bg-slate-800 opacity-70 z-0"></div>
      <div className="relative z-10">
        <div className=" px-24 mx-auto py-1 md:py-2">
          <Slider {...settings}>
            {sliderItems.map((item, index) => (
              <div
                key={index}
                className="p-4 !flex flex-col justify-center items-center gap-2 text-white"
              >
                <div className="rounded-full border border-white justify-center items-center flex w-[40px] h-[40px] md:w-[60px] md:h-[60px] hover:bg-white group hover:animate-spin ">
                  {item.icon}
                </div>
                <h3 className="text-center text-sm">{item.title}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
