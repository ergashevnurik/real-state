import React, {useState, useRef, useEffect} from 'react'
import {SliderData} from '../../data/SliderData.js'
import { Button } from '../Navbar/Button.js'
import { HeroWrapper, HeroSlider, HeroSection, HeroSlide, HeroImage, HeroContent, Arrow, SliderButton, PrevArrow, NextArrow } from './HeroElements'

const Hero = ({slides}) => {

    const [current, setCurrent] = useState(0)

    const length = slides.length

    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current  + 1));
        }

        timeout.current = setTimeout(nextSlide, 3000)
        return function() {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }
    }, [current, length])

    const nextSlide = () => {

        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1)

        // console.log(current)
    };

    const prevSlide = () => {

        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
        // console.log(current)
    };

    // if (Array.isArray(slides) || slides.lenght <= 0) {
    //     return null;
    // }

    return (
        <HeroSection>
            <HeroWrapper>
                {SliderData.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                <HeroImage src={slide.image} alt= {slide.alt}/>
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path} primary="true" css={`max-width: 100px`}>
                                        {slide.labels}
                                        <Arrow />
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButton>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButton>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
