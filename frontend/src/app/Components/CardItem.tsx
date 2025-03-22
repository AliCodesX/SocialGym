import { Card, CardBody, Image } from "@heroui/react";
import { CardFooter } from "@heroui/card";

export interface CardItemProps {
    image?: string;
    title?: string;
    description?: string;
    email?: string;
    telefone?: string;
}

export default function CardItem(props: CardItemProps) {
    return (
        <Card isFooterBlurred fullWidth={true} className="max-w-xs h-[450px] pb-3 m-0 bg-opacity-50 rounded-lg shadow-lg">
            <CardBody className="overflow-hidden p-0">
                <Image
                    alt="Card background"
                    className="w-full h-80 object-cover rounded-t-lg"
                    src={props.image}
                    height={320}
                    width="100%"
                />
            </CardBody>

            <CardFooter className="p-4 flex flex-col items-start">
                <h4 className="font-bold text-lg text-black">{props.title}</h4>
                <small className="text-left text-gray-700">{props.description}</small>
                <small className="text-left text-gray-700 font-bold"> E-Mail: {props.email}</small>
                <small className="text-left text-gray-700 font-bold"> Telefon:{props.telefone}</small>
            </CardFooter>
        </Card>
    );
}
