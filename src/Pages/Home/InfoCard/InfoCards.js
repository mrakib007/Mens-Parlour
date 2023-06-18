import React from "react";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardInfo = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. nobis odit qui ducimus aperiam optio repudiandae iusto sit illo dolorem amet et quae.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. nobis odit qui ducimus aperiam optio repudiandae iusto sit illo dolorem amet et quae.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. nobis odit qui ducimus aperiam optio repudiandae iusto sit illo dolorem amet et quae.",
    },
  ];
  return (
    <div>
      <h1 className="lg:text-2xl md:text-2xl text-sm text-white text-center">
        We have many services according to your needs. <br /> Choose the best
        treatments as it suits to your face and skin type.
      </h1>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-56 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          {/* <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg> */}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid:cols-2 grid-cols-1 my-10 gap-5">
        {cardInfo.map((card) => (
          <InfoCard key={card.id} card={card}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
