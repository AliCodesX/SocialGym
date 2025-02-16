import React from 'react';
import CardItem from "@/app/Components/CardItem";


const CardGridItem = () => {

const CardItemData = [
    {
        image: "https://heroui.com/images/hero-card-complete.jpeg",
        title: "Wrestle",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicin"
    },
    {
        image: "https://heroui.com/images/hero-card-complete.jpeg",
        title: "Wrestle",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicin"
    },
    {
        image: "https://heroui.com/images/hero-card-complete.jpeg",
        title: "Wrestle",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicin"
    },
    {
        image: "https://heroui.com/images/hero-card-complete.jpeg",
        title: "Wrestle",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicin"
    }
]

    return (


        <div className="flex justify-center mt-10">
            <div className="grid grid-cols-2 gap-4">
                {CardItemData.map((item, index) => (
                    <CardItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}
export default CardGridItem;
