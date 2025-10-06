
const Header = () => {
    return (
        <div>
            <section className="container">
                <div className="header_Container">

                    <div className="logo_container">
                        <img src="/Image/header/Headerlogo.png" alt="Logo" />
                       
                        <h2>আল হাদিস</h2>
                    </div>

                    <div className="menu_container">
                        <ul>
                            <li className="menu_btn"><a href="#"><img src="/Image/header/home.png" alt="image"/>হোম </a></li>
                            <li><a href="#">হাদিসে যান </a></li>
                            <li><a href="#">হাদিস গ্রন্থসমূহ </a></li>
                            <li><a href="#">আমাদের প্রজেক্ট</a></li>
                        </ul>
                    </div>

                    <div className="btn_container">
                        <ul>
                            <li className="btn3"><a href="#"><img src="/Image/header/darkMode.png" alt="Image" /></a></li>
                            <li className="btn1"><a href="#">সাপোর্ট করুন <img src="/Image/header/Frame.png" alt="" /></a></li>
                            <li className="btn2"><a href="#">ডাউনলোড করুন</a></li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Header;