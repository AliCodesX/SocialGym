import {Card, CardHeader, CardBody, Image, Button, Divider} from "@heroui/react";
import {CardFooter} from "@heroui/card";

export interface CardItemProps {
    image ?: string;
    title ?: string;
    description ?: string;

}

export default function CardItemDark(props: CardItemProps) {
    return (
        <Card isFooterBlurred  fullWidth={false} className="p-0 max-w-sm bg-black/50   ">
            <CardBody className="overflow-visible py-0">
                <Image
                    alt="Card background"
                    className="w-full object-cover  rounded-xl"
                    src={props.image}
                    height={250}
                    width="100%"
                />
            </CardBody>

            <CardFooter className="pb-2 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large text-lakers">{props.title}</h4>
                <small className=" text-left  text-white">
                    {props.description}
                </small>

            </CardFooter>
        </Card>
    );
}
