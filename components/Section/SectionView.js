import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import { Cards } from "@components/Card";
import Image from "next/image";

function setContentContainer(containerType, contentArray) {
    var contentType = {
        ContentImage: <ContentImage dataArray={contentArray} />,
        Columns: <Columns dataArray={contentArray} />,
        Accordion: <Accordion dataArray={contentArray} />,
        Cards: <Cards dataArray={contentArray} />
    };

    return contentType[containerType];
}

const BannerImage = ({ image }) => {
    return (
        <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
            <div className="page-banner--image">
                <Image
                    src={image}
                    width={1024}
                    height={680}
                    alt="Page Banner"
                    objectFit="cover"
                    className="mx-auto"
                />
            </div>
        </MotionBTTContainer>
    );
};

export const SectionView = ({
    id,
    mainText,
    subText,
    tinyText,
    image,
    type,
    contentArray
}) => {
    return (
        <SectionContainer id={id} className="features">
            <BadgeGroup alignment="center">
                <BadgeMessage>{tinyText}</BadgeMessage>
            </BadgeGroup>
            <PageTitle className="text-center mx-auto" type="default">
                {mainText}
            </PageTitle>
            <Content className="text-center" alignment="center">
                <p>{subText}</p>
            </Content>
            <div className="mt-6 mb-16 text-center"></div>

            {image && <BannerImage image={image} />}
            {setContentContainer(type, contentArray)}
        </SectionContainer>
    );
};
