import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function JobsSlider() {
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    appendDots: (dots: any) => (
      <div
        style={{
          padding: '5px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div key={i} className="w-3 h-3 bg-[#ebebeb] "></div>
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <ChevronRight color="black" size={30} />,
          prevArrow: <ChevronLeft color="black" size={30} />,
        },
      },
    ],
  };

  const job = {
    title: 'Duis aute irure dolor in reprehenderit',
    salary: '$20000-$25000',
    location: 'LONDON',
    description:
      'ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  };

  return (
    <div className="mx-8">
      <Slider {...settings}>
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 p-8  bg-primary text-white relative h-[300px]  group hover:bg-[#ebebeb] ease-in-out duration-300"
          >
            <h4 className="font-medium group-hover:text-primary">
              {job.title}
            </h4>
            <span className="font-medium text-sm block group-hover:text-primary">
              {job.salary} | {job.location}
            </span>
            <p className="font-light text-sm group-hover:text-black">
              {job.description}
            </p>
            <div className="absolute bottom-0 right-0">
              <Button
                text="Apply"
                type="button"
                className="bg-[#ebebeb] text-black group-hover:bg-primary group-hover:text-white ease-in-out duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
