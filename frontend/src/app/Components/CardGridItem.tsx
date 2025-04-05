
import React from 'react';
import CardItem from "@/app/Components/CardItem";

export interface CardGridItemProps {
    items: {
        image?: string;
        title?: string;
        description?: string;
        email?: string;
        telefone?: string
    }[];
}

const CardGridItem = ({ items }: CardGridItemProps) => {
    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {items.map((item, index) => (
                    <CardItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        email={item.email}
                        telefone={item.telefone}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardGridItem;
