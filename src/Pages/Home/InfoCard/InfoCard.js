import React from 'react';

const InfoCard = ({card}) => {
    const {image,description,id} = card;
    return (
        <div className='transition duration-300 ease-in-out hover:scale-110'>
            <div>
            <img src={image} className='rounded-lg lg:h-[300px] md:h-[300px]' alt="" srcset="" />
            </div>
            <div>
                <p className='text-center p-2'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;