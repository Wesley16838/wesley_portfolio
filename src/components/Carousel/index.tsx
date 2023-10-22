import Image from 'next/image'
import Props from "@/types/components/carousel";
import { useEffect, useRef } from "react";
import "./style.scss";

const Carousel = ({ data }: Props) => {
    const carouselElement = useRef<HTMLInputElement>(null);
    const carouselInnerElement = useRef<HTMLInputElement>(null);
    let pressed = false;
    let startx: number;
    let x: number;

    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            if (carouselElement.current) carouselElement.current.style.cursor = 'grabbing'
            if (carouselInnerElement.current) startx = e.offsetX - carouselInnerElement.current?.offsetLeft
            pressed = true;

        }
        carouselElement.current?.addEventListener('mousedown', handleMouseDown)
        return () => carouselElement.current?.removeEventListener('mousedown', handleMouseDown)
    }, [])

    useEffect(() => {
        const handleMouseEnter = (e: MouseEvent) => {
            if (carouselElement.current) carouselElement.current.style.cursor = 'grab'
        }
        carouselElement.current?.addEventListener('mouseenter', handleMouseEnter)
        return () => carouselElement.current?.removeEventListener('mouseenter', handleMouseEnter)
    }, [])

    useEffect(() => {
        const handleMouseUp = (e: MouseEvent) => {
            if (carouselElement.current) carouselElement.current.style.cursor = 'grab'
        }
        carouselElement.current?.addEventListener('mouseup', handleMouseUp)
        return () => carouselElement.current?.removeEventListener('mouseup', handleMouseUp)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!pressed) return;
            e.preventDefault;
            x = e.offsetX;
            if (carouselInnerElement.current) carouselInnerElement.current.style.left = `${x - startx}px`
            // setLeftPosition(`${x - startx}px`)
            checkBoundary()
        }
        carouselElement.current?.addEventListener('mousemove', handleMouseMove)
        return () => carouselElement.current?.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        const handleMouseUp = (e: MouseEvent) => {
            pressed = false;
        }
        window.addEventListener('mouseup', handleMouseUp)
        return () => window.removeEventListener('mouseup', handleMouseUp)
    }, [])

    const checkBoundary = () => {
        const outer = carouselElement.current?.getBoundingClientRect();
        const inner = carouselInnerElement.current?.getBoundingClientRect();
        if (carouselInnerElement.current && parseInt(carouselInnerElement.current.style.left) > 0) {
            carouselInnerElement.current.style.left = '0px'
        } else if (carouselInnerElement.current && inner && outer && inner?.right < outer?.right) {
            carouselInnerElement.current.style.left = `-${inner?.width - outer?.width}px`;
        }
    }

    return (
        <div className="carousel-container" ref={carouselElement}>
            <div className="carousel-inner-container" ref={carouselInnerElement} >
                {
                    data.map((item: any, index: Number) => {
                        return <Image key={index.toString()} src={item.imageUrl} alt={item.title} width={418} height={360} className="carousel-item" />
                    })
                }
            </div>
        </div>
    )
}

export default Carousel;