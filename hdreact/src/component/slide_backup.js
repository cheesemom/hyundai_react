import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";


const Slide = [
    { slideid: 1, content: "01 슬라이드 제목", des: "01 슬라이드 내용", link: "/1" },
    { slideid: 2, content: "02 슬라이드 제목", des: "02 슬라이드 내용", link: "/2" },
    { slideid: 3, content: "03 슬라이드 제목", des: "03 슬라이드 내용", link: "/3" },
]

const MainSlider = () => {
    const [num, setNum] = useState(0);
    const slideRef = useRef();
    useEffect(() => {
        setNum(0)
    }, [])
    const slideSet = {
        dots: true,
        afterChange: index => console.log(index),
    }

    return (
        <>
            <Slider {...slideSet} ref={slideRef}>
                {
                    Slide.map(
                        (slide, idx) =>
                            <figure className={`item0${slide.slideid} ${idx === num ? 'on' : ''}`} key={slide.slideid}>
                                <div className='slide-box'>
                                    <h2>{slide.content}</h2>
                                    <p>{slide.des}</p>
                                    <a href={slide.link}>more</a>
                                </div>
                            </figure>
                    )
                }
            </Slider>

            {console.log(slideRef.current)}
            <div>0{num + 1} / <span>0{Slide.length}</span></div>
            <div className="arrows">
                <button onClick={() => slideRef.current.slickPrev()}>prev</button>
                <button onClick={() => slideRef.current.slickNext()}>next</button>
            </div>

            <ul class="dots">
                {
                    Slide.map((dots, idx) => <li className={idx === num ? 'on' : ''}
                        onClick={() => slideRef.current.slickGoTo(idx)}
                        key={dots.slideid}>{dots.slideid}</li>)
                }
            </ul>

            <div className="content">
                <div>
                    {Slide[num]?.des}
                </div>
            </div>
        </>

    )
}

export default MainSlider;