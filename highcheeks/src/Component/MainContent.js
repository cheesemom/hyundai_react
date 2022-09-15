const CONTENT = [
    { id: 1, title: "", dec: "", link: "/" },
    { id: 2, title: "", dec: "", link: "/" },
    { id: 3, title: "", dec: "", link: "/" },
    { id: 4, title: "", dec: "", link: "/" }
]

const MainContent = () => {
    return (
        <section className="MainContent csc">
            <div className="inner">
                {
                    CONTENT.map(content => {
                        return (
                            <figure key={content.id}>
                                <div className="box">
                                    <img src={process.env.PUBLIC_URL + "/assets/prod0" + content.id + ".jpg"} alt="" />
                                </div>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default MainContent;