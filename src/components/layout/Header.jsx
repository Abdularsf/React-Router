export const Header = () => {
    return (
        <>
            <header className="section-navbar">
                <section className="top-txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>Get ARSF Membership</p>
                        </div>
                        <div className="sign_in_up">
                            <a href="#">SING IN</a>
                            <a href="#">SIGN UP</a>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <a href="index">
                            <p>ARSF</p>
                        </a>
                    </div>

                    <div className="navbar">
                        <ul>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className="nav-link">
                                    about
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/movie" className="nav-link">
                                    movie
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link">
                                    contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}