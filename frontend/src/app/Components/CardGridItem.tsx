import React from 'react';
import CardItem from "@/app/Components/CardItem";

export interface CardGridItemProps {
    items: {
        image?: string;
        title?: string;
        description?: string;
    }[];
}

const CardGridItem = ({ items }: CardGridItemProps) => {
    return (
        <div className="flex justify-center mt-10">
            <div className="grid grid-cols-2 gap-5">
                {items.map((item, index) => (
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
};

export default CardGridItem;
