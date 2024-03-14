export const Hero = ({ id, title, description, metaText, image, children }) => {
    return (
        <section className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt=""
                src={image}
                class="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative bg-gradient-to-t from-black-900/90 to-gray-900/50 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6 max-w-lg">
                    <h1 className="font-serif text-7xl text-white/90">
                        {title}
                    </h1>
                    <p className="mt-2 line-clamp-7 font-light text-white/75">
                        {description}
                    </p>
                    {children}
                </div>
            </div>
        </section>
    );
};
