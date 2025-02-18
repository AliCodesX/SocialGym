import {Card, CardHeader, CardBody, Image, Button} from "@heroui/react";

export interface CardItemProps {
    image ?: string;
    title ?: string;
    description ?: string;

}

export default function CardItemDark(props: CardItemProps) {
    return (
        <Card fullWidth={false} className="p-5 max-w-sm bg-black/50   ">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={props.image}
                    width={600}
                    height={250}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large text-lakers">{props.title}</h4>
                <small className=" text-left  text-white">
                    {props.description}
                </small>

            </CardHeader>
        </Card>
    );
}
