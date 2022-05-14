import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Hero, MainContainer, Img, Container, H5, Border, H2, TextContainer, P, ButtonContainer, Button, Overlay } from "./style"

// Import Swiper styles
import "swiper/css";

// import required modules
import { Parallax, Autoplay, } from "swiper";

export const HeroSection = ({ videos }) => {
    // create an array where we can put the items that
    // fit our requirements
    const heroItems = []

    // map through our videos to find the ones having a diplayTag and
    // push theses to the heroItems array
    const getVideos = () => {
        videos.map(video => {
            const { displayTag } = video
            if (displayTag != null) { heroItems.push(video) }
        })
    }

    return (
        <Hero>
            <Swiper
                loop={true}
                speed={1500}
                parallax={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Parallax, Autoplay]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                {getVideos(heroItems),
                    heroItems.map(slide => {
                        const { id, bigThumbnail, title, displayTag, description, slug } = slide
                        return (
                            <SwiperSlide key={id} className="swiperSlide">
                                <MainContainer>
                                    <Img src={bigThumbnail.url} />
                                    <Container>
                                        <H5 data-swiper-parallax="-1000">
                                            {displayTag}
                                        </H5>
                                        <Border data-swiper-parallax="-1500" />
                                        <H2 data-swiper-parallax="-2000">
                                            {title}
                                        </H2>
                                        <TextContainer>
                                            <P data-swiper-parallax="-2500">
                                                {description}
                                            </P>
                                        </TextContainer>
                                        <ButtonContainer>
                                            <Link href={`/video/${slug}`} passHref scroll={false}>
                                                <Button data-swiper-parallax="-3000" className="watch" >
                                                    watch
                                                </Button>
                                            </Link>
                                            <Button data-swiper-parallax="-3500">
                                                add to list
                                            </Button>
                                        </ButtonContainer>
                                    </Container>
                                </MainContainer>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Hero>
    )
}
