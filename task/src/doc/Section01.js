import '../css/Section01.css'


const Section01 = () => {
    return (
        <section className="about header">

            <nav>
                <ul class="left">
                    <div className="country">
                        <li><a href=""><img src="./img/kor.gif" alt="KOR" /></a></li>
                        <li><a href=""><img src="./img/eng.gif" alt="ENG" /></a></li>
                    </div>
                    <li><a href="">ABOUT</a>
                        <ul>
                            <li><a href="">BRAND STORY</a></li>
                            <li><a href="">STOCKIST</a></li>
                        </ul>
                    </li>
                    <li><a href="">ONLINE SHOP</a>
                        <ul>
                            <li><a href="">NEW</a></li>
                            <li><a href="">ALL</a></li>
                            <li><a href="">BEST</a></li>
                            <li><a href="">MOBILE ACC</a></li>
                            <li><a href="">REFURB</a></li>
                            <li><a href="">SET</a></li>
                            <li><a href="">BAG</a></li>
                            <li><a href="">WALLET</a></li>
                            <li><a href="">SALE</a></li>
                        </ul>
                    </li>
                    <li><a href="">COLLECTION</a></li>
                </ul>

                <h1>
                    <a href=""><img src="./img/logo.png" alt="LOGO" /></a>
                </h1>

                <ul class="right">
                    <li><a href="">PRESS</a></li>
                    <li><a href="">BOARD</a>
                        <ul>
                            <li><a href="">NOTICE</a></li>
                            <li><a href="">Q&A</a></li>
                            <li><a href="">REVIEW</a></li>
                        </ul>
                    </li>
                    <li><a href="">MY PAGE</a>
                        <ul>
                            <li><a href="">ORDER</a></li>
                            <li><a href="">WISH LIST</a></li>
                            <li><a href="">MILEAGE</a></li>
                            <li><a href="">MY BOARD</a></li>
                            <li><a href="">DELIVERY</a></li>
                        </ul>
                    </li>
                    <li><a href="">LOGIN</a></li>
                    <li><a href=""><img src="./img/cart.png" alt="" /> BAG</a></li>
                    <li class="icon"><a href=""><i class="xi-search"></i></a></li>
                </ul>
            </nav>

        </section>
    )
}


export default Section01;