import {Card, CardBody, Image,} from "@heroui/react";
import {CardFooter} from "@heroui/card";

export interface CardItemProps {
    image ?: string;
    title ?: string;
    description ?: string;

}

export default function CardItemDark(props: CardItemProps) {
    return (
        <Card isFooterBlurred fullWidth={true} className=" max-w-sm pb-3 m-0 bg-/50  ">
            <CardBody className="overflow-visible p-0">
                <Image
                    alt="Card background"
                    className="w-full object-cover  rounded-xl"
                    src={props.image}
                    height={250}
                    width="100%"
                />
            </CardBody>


            <CardFooter className="pb-2 p px-4 flex-col items-start">
                <h4 className="font-bold text-large text-lakers">{props.title}</h4>
                <small className=" text-left  text-white">
                    {props.description}
                </small>

            </CardFooter>
        </Card>
    );
}
