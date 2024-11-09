"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  content: string;
}

const ReviewWidget: React.FC = () => {

// console.log(data)

  const testimonials =  [
            {
                "name": "Jessica Smith",
                "content": "I was impressed with the thorough roof cleaning service provided by Your Roof Cleaner. They not only cleaned my roof but also inspected it for any repairs needed. Their professionalism and attention to detail gave me peace of mind!"
            },
            {
                "name": "Brandon Evans",
                "content": "Your Roof Cleaner did an exceptional job on my roof. From installation to maintenance, they offer a comprehensive range of services. Their team was friendly, knowledgeable, and efficient. Highly recommend them to anyone in need!"
            },
            {
                "name": "Samantha Brown",
                "content": "My neighbor, Tom, had his roof cleaned by Your Roof Cleaner and raved about their service. After hearing his experience, I decided to hire them for my roof maintenance. I couldn’t be happier with the results. They truly care about their clients!"
            },
            {
                "name": "Tyler Johnson",
                "content": "I had some leaks in my roof and reached out to Your Roof Cleaner. Their team handled the repairs promptly and professionally. I appreciate their thorough inspection process, which ensured my roof was in top shape."
            },
            {
                "name": "Rachel Thompson",
                "content": "I recently hired them for a roof installation, and I’m thrilled with the outcome. Their wide range of services is impressive, and the quality of their work is unmatched. I highly recommend them to anyone looking for roof services!"
            },
            {
                "name": "Andrew Mitchell",
                "content": "They provided excellent maintenance services for my roof. Their team was quick to address my concerns and performed a detailed inspection. It's comforting to know I have such a reliable service in my area."
            }
        ]
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow:true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="pb-10  relative">
      <h2 className="text-first text-3xl font-bold text-center text-main mt-20 mb-10">Testimonials</h2>
    <Slider {...settings} >
      {
        testimonials.map((item:any ,index:number) => (
          
          <div className="p-5 lg:h-80 mb-10  lg:bg-main lg:text-white relative" key={index+1}>
            <div className="flex justify-center items-center"><Image src="/5Star.png" alt="review" width={1000} height={500} className="w-40 "/></div>
            
            <h3 className="text-xl font-semibold mt-4  text-center">{item.name}</h3>
            <p className="mt-4 ">{item.content}</p>
          </div>
        ))
      }
      
    </Slider>
    </div>
  );
}

export default ReviewWidget;

