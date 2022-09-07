import '../css/Section02.css'

const Section02 = () => {
    return (
        <section className="business">
            <h2><span className="t_b">Our</span> Business</h2>
            <p>새로운 미래를 열어가는 산리오</p>
            <div className="container">
                <figure>
                    <div className="inbox">
                        <img src="./img/responsive02.jpg" alt="" />
                    </div>

                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam, cum facere voluptate
                            error itaque.</p>

                        <a href="">자세히보기</a>
                    </div>
                </figure>

                <figure>
                    <div className="inbox">
                        <img src="./img/responsive01.jpg" alt="" />
                    </div>

                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam, cum facere voluptate
                            error itaque.</p>

                        <a href="">자세히보기</a>
                    </div>
                </figure>

                <figure>
                    <div className="inbox">
                        <img src="./img/responsive02.jpg" alt="" />
                    </div>

                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam, cum facere voluptate
                            error itaque.</p>

                        <a href="">자세히보기</a>
                    </div>
                </figure>

                <figure>
                    <div className="inbox">
                        <img src="./img/responsive03.jpg" alt="" />
                    </div>

                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam, cum facere voluptate
                            error itaque.</p>

                        <a href="">자세히보기</a>
                    </div>
                </figure>
            </div>

            <div className="inner">
                <div className="tit">
                    <strong>산리오 친구들</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi molestiae modi id dolorum?
                        Doloremque!</p>
                </div>
                <div>
                    <ul className="dotList">
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio?</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default Section02;