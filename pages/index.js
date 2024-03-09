import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer, SectionView } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card,
    CardSimple
} from "@components/Card";

import data from "../data.json";
import { Button } from "@components/Button";

export default function Home() {
    return (
        <Layout className="">
            <SEO title={data.seo.title} description={data.seo.description} />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner
                    main_text={data.home_banner.main_text}
                    sub_text={data.home_banner.sub_text}
                    tiny_text={data.home_banner.tiny_text}
                    image={data.home_banner.image}
                />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    {data.sections.map((item) => (
                        <MotionBTTContainer
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <SectionView
                                id={item.id}
                                mainText={item.main_text}
                                subText={item.sub_text}
                                tinyText={item.tiny_text}
                                contentArray={item.contents}
                                type={item.type}
                                image={item.image}
                            />
                        </MotionBTTContainer>
                    ))}
                    <CardSimple
                        image="/cobbleStone.avif"
                        title="Stone cards"
                        description="A very simple card displayed with upmost precision"
                    />
                </SectionContainer>
            </div>
        </Layout>
    );
}
