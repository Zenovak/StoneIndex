import Image from "next/image";
import clsx from "clsx";

const ImageSizes = {
    medium: {},
    default: {},
    small: {}
};

export const CardImage = ({ src, className, imageClassName, alt }) => {
    return (
        <div className={`card--image ${className && className}`}>
            <Image
                src={src}
                width={280}
                height={280}
                alt={alt}
                objectFit="fill"
                loading="lazy"
                className={`w-full h-full ${imageClassName && imageClassName}`}
            />
        </div>
    );
};
