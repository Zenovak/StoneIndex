import Image from "next/image";

const Simple = ({ title, description, metaText, image, href }) => {
    return (
        <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg drop-shadow-xl"
            href={href}
        >
            <Image
                alt=""
                height="500"
                width="500"
                src={image}
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <time
                    datetime="2022-10-10"
                    className="block text-xs text-gray-500"
                >
                    {" "}
                    {metaText}{" "}
                </time>

                <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {description}
                </p>
            </div>
        </a>
    );
};

const CardFloating = ({ title, description, metaText, image, href }) => {
    return (
        <article class="group">
            <img
                alt=""
                src={image}
                class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
                <a href={href}>
                    <h3 class="text-lg font-medium text-gray-900">{title}</h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {description}
                </p>
            </div>
        </article>
    );
};

const CardBackground = ({ title, description, metaText, image, href }) => {
    return (
        <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt=""
                src={image}
                class="absolute inset-0 h-full w-full object-cover"
            />

            <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div class="p-4 sm:p-6">
                    <time
                        datetime="2022-10-10"
                        class="block text-xs text-white/90"
                    >
                        {" "}
                        {metaText}{" "}
                    </time>

                    <a href={href}>
                        <h3 class="mt-0.5 text-lg text-white">{title}</h3>
                    </a>

                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export const CardSimple = ({
    title,
    description,
    metaText,
    image,
    href,
    variant
}) => {
    var type = null;
    switch (variant) {
        case 1:
            type = <Simple title={title} description={description} />;
            break;

        default:
            type = "Simple";
            break;
    }

    return type;
};
