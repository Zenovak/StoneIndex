import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

import { v4 as uuid } from "uuid";

export const Cards = ({ dataArray }) => {
    return (
        <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
            {dataArray.map((item) => (
                <Card key={uuid()} className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage src={item.image} alt="history_image" />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            {item.title}
                        </CardHeader>
                        <p>{item.description}</p>
                    </CardBody>
                </Card>
            ))}
        </CardGroup>
    );
};
