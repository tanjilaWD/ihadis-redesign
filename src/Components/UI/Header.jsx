
const Header = () => {
    return (
        <div>
            <section className="container">
                <div className="header_Container">

                    <div className="logo_container">
                        <img src="../../public/image/header/Headerlogo.png" alt="Logo" />
                        <h2>আল হাদিস</h2>
                    </div>

                    <div className="menu_container">
                        <ul>
                            <li><a href="#"><img src="../../public/image/header/home.png" alt="image"/>হোম </a></li>
                            <li><a href="#">হাদিসে যান </a></li>
                            <li><a href="#">হাদিস গ্রন্থসমূহ </a></li>
                            <li><a href="#">আমাদের প্রজেক্ট</a></li>
                        </ul>
                    </div>

                    <div className="btn_container">
                        <ul>
                            <li><a href="#"><img src="../../public/image/header/darkMode.png" alt="Image" /></a></li>
                            <li><a href="#">সাপোর্ট করুন <img src="../../public/image/header/Frame.png" alt="" /></a></li>
                            <li><a href="#">ডাউনলোড করুন</a></li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Header;