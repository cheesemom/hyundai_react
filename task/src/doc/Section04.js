import '../css/Section04.css'


const Section04 = () => {
    return (
        <section className="footer">

            <div className="inner">
                <div className="logo">
                    <a href=""><img src="./img/logo.png" alt="" /></a>
                </div>

                <div className="left">
                    <div className="info">
                        <p class="customer">COMPANY</p>
                        <ul>
                            <li>
                                <div className="same">
                                    <p>
                                        <span>OWNER & ADMIN</span>&nbsp;
                                        <a href="">서보람</a>
                                    </p>
                                    <p>
                                        <span>BUSINESS NO.</span>&nbsp;
                                        <a href="">111-00-22222</a>
                                    </p>
                                    <p>
                                        <span>ONLINE-ORDER NO.</span>&nbsp;
                                        <a href="">제2013-서울강남-01881호</a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p class="head">BUSINESS HOURS</p>
                        <ul>
                            <li>
                                <div className="same">
                                    <p>MON - FRI AM 10:00 - PM 6:00</p>
                                    <p>LUNCH BREAK PM 12:00 - PM 1:00</p>
                                    <p>SAT, SUN, HOLIDAY OFF</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mid">
                    <div className="info">
                        <p class="customer">CUSTOMER CARE</p>
                        <ul>
                            <li>
                                <div className="same">
                                    <p>
                                        <span>TEL</span>&nbsp;
                                        <a href="tel:02-777-0000">02-777-0000</a>
                                    </p>
                                    <p>
                                        <span>E.MAIL</span>&nbsp;
                                        <a href="mailto:highcheeks@vhdesign.kr">highcheeks@vhdesign.kr</a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p class="head">HEAD OFFICE</p>
                        <ul>
                            <li>
                                <div className="same">
                                    <span>서울시 강남구 테헤란로 623(삼성동) </span>
                                    <p>삼성빌딩 9층 (주)브이에이치디자인 [(우)06173]</p>
                                </div>
                            </li>
                        </ul>
                        <p class="copyright">COPYRIGHT (C) 2019 HIGH CHEEKS ALL RIGHTS RESERVED / DESIGNED BY GA09
                            DESIGN</p>
                    </div>
                </div>

                <div className="right">
                    <div className="info">
                        <p class="customer">COMPANY</p>
                        <p class="head">AGREEMENT</p>
                        <p class="customer">PRIVACY POLICY</p>
                        <p class="head">GUIDE</p>
                        <p class="head">BUSINESS LICENSE</p>
                    </div>
                    <div className="sns">
                        <p>FOLLOW US</p>
                        <a href=""><img src="./img/in.png" alt="" /></a>
                        <a href=""><img src="./img/ka.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section04;
