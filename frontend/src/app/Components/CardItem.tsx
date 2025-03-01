import {Card, CardHeader, CardBody, Image} from "@heroui/react";

export interface CardItemProps {
    image ?: string;
    title ?: string;
    description ?: string;

}

export default function CardItem(props: CardItemProps) {
    return (
        <Card fullWidth={false} className="p-8 max-w-sm  bg-white ">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={props.image}
                    width={270}
                    height={250}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{props.title}</h4>
                <small className="text-default-500">
                    {props.description}
                </small>
            </CardHeader>

        </Card>
    );
}
