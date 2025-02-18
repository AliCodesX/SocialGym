
import React from 'react';
import CardItem from "@/app/Components/CardItem";
import CardItemDark from "@/app/Components/CardItemDark";

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
                    <CardItemDark
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
