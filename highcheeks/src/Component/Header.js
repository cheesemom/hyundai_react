import { useEffect, useRef, useState } from 'react';

const NAVLINK = [
    { id: 1, menu: "ABOUT", link: '/' },
    { id: 2, menu: "ONLINE SHOP", link: '/' },
    { id: 3, menu: "COLLECTION", link: '/' },
    { id: 4, menu: "PRESS", link: '/' },
    { id: 5, menu: "BOARD", link: '/' },
    { id: 6, menu: "MY PAGE", link: '/' },
    { id: 7, menu: "LOGIN", link: '/' },
    { id: 8, menu: "BAG", link: '/' },
]

const Header = () => {
    const [TG, setTG] = useState([false, false]);
    const HL = useRef();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let sct = window.scrollY;
            sct > 0
                ? HL.current.classList.add('on')
                : HL.current.classList.reomove('on')
            console.log(HL.current, Window.scrollY)
        })
    }, [])

    return (
        <header className="Header" ref={HL}>

            <div class="hd_wrap">
                <h1>
                    <a href="/" ></a>
                </h1>
                <nav className="Gnb inner">
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={it.link}>{it.menu}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

                <div className="right">
                    <ul className="project">
                        <li><a href="#!">주요프로젝트</a></li>
                        <li><a href="#!">IR</a></li>
                    </ul>

                    <div className={'lang ' + (TG ? 'on' : '')}>
                        <strong onClick={() => setTG(!TG)}><i className="xi-globus"></i> KOR <i className="xi-angle-down arrow"></i></strong>
                        <ul className="lang_box">
                            <li><a href="#!">KOR</a></li>
                            <li><a href="#!">ENG</a></li>
                            <li><a href="#!">CHN</a></li>
                        </ul>
                    </div>

                    <div className={'top_search ' + (TG[1] ? 'on' : '')}>
                        <strong onClick={() => setTG([false, !TG[1]])}><i className="xi-search"></i></strong>
                        <div className="search_box">
                            <form action="#!">
                                <input type="text" placeholder="검색어를 입력하세요" required />
                                <button>
                                    <i className="xi-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
