import React from 'react';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardInfo = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. nobis odit qui ducimus aperiam optio repudiandae iusto sit illo dolorem amet et quae.'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. nobis odit qui ducimus aperiam optio repudiandae iusto sit illo dolorem amet et quae.'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. nobis odit qui ducimus aperiam optio repudiandae iusto sit illo dolorem amet et quae.'
        },
    ]
    return (
        <div>
            <h1 className='lg:text-2xl md:text-2xl text-sm text-white text-center'>We have many services according to your needs. <br/> Choose the best treatments as it suits to your face and skin type.</h1>
            <div className='grid lg:grid-cols-3 md:grid:cols-2 grid-cols-1 my-10 gap-5'>
                {
                    cardInfo.map(card => <InfoCard
                    key={card.id}
                    card={card}></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoCards;