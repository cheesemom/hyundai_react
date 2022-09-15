import '../css/Section03.css'


const Section03 = () => {
    return (
        <section className="grid">

            <ul className="grid-container">
                <li className="grid-item">
                    <img src="./img/prod01.jpg" alt="" />
                    <div class="caption">
                        <p>Chou Chou Phonecase Silver</p>
                    </div>
                </li>
                <li className="grid-item">
                    <img src="./img/prod02.jpg" alt="" />
                    <div className="caption">
                        <p>Chou Chou Phonecase Black</p>
                    </div>
                </li>
                <li className="grid-item">
                    <img src="./img/prod03.jpg" alt="" />
                    <div className="caption">
                        <p>Chou Chou Phonecase Pink</p>
                    </div>
                </li>
                <li className="grid-item">
                    <img src="./img/prod04.jpg" alt="" />
                    <div className="caption">
                        <p>Chou Chou Phonecase Butter</p>
                    </div>
                </li>
            </ul>

        </section>
    )
}

export default Section03;