const Footer = () => {
    return (
        <section className="footer_container">
            <div className="footer">
                <div className="topBox">
                    <img src="../../public/image/footer/logo.png" alt="Image" />
                    <h4>আল হাদিস</h4>
                </div>

                <div className="Box">
                <div className="footer_box1">
                    <h2>হাদিস পড়ুন,শিখুন এবং জানুন</h2>
                    <p>আমাদের লক্ষ্য ও উদ্দেশ্য হল সবচেয়ে উত্তম উৎস থেকে বিশুদ্ধ হাদীস সকলের জন্য উন্মুক্ত করে দেয়া। আমরা এই ওয়েবসাইটটি সর্বাধিক গুরুত্বের সাথে তৈরি করেছি যাতে যে কেউ সহজেই হাদিস শিখতে ও শিখাতে পারে। আমরা আপনাদের একান্ত সহযোগিতা চাই এই ওয়েবসাইটটি সহ আমাদের পুরো প্রজেক্টের পরিসর বাড়িয়ে এগিয়ে যেতে। আমাদের একটি মোবাইল অ্যাপ রয়েছে যাতে আপনি যেকোনো স্থানে যেকোন সময় স্বাচ্ছন্দ্যে হাদীস পড়তে পারেন।</p>
                </div>
            
                <div className="footer_box2">
                    <h2>নেভিগেট</h2>
                    <div className="box2">
                    <div className="box_left">
                        <ul>
                            <li><a href="#">হাদিস গ্রন্থসমূহ</a></li>
                            <li><a href="#">বিষয়ভিত্তিক হাদিস</a></li>
                            <li><a href="#">প্রাইভেসি পলিসি</a></li>
                            <li><a href="#">সাপোর্ট করুন</a></li>
                        </ul>
                    </div>
                    <div className="box_right">
                        <ul>
                            <li><a href="#">আমাদের প্রজেক্ট</a></li>
                            <li><a href="#">তাহকিক</a></li>
                            <li><a href="#">লেখক</a></li>
                            <li><a href="#">ফেসবুক পেইজ</a></li>
                        </ul>
                    </div>
                    </div>
                    </div>

                <div className="footer_box3">
                    <h2>আমাদের প্রজেক্টসমূহ</h2>
                    <div className="box_3">
                        <div className="text">
                            <ul>
                                <li><a href="#">আল হাদিস</a></li>
                                <li><a href="#">কুরআন মাজিদ</a></li>
                                <li><a href="#">দোয়া ও রুকাইয়াহ</a></li>
                                <li><a href="#">আইআরডি ফাউন্ডেশন</a></li>
                            </ul>
                        </div>
                       
                           
                       <div className="img">
                            <ul>
                                <li><a href="#"> <img src="../../public/image/footer/img1.png" alt="image" /></a></li>
                                <li><a href="#"> <img src="../../public/image/footer/img2.png" alt="image" /></a></li>
                                <li><a href="#"><img src="../../public/image/footer/img3.png" alt="image" /></a></li>
                                <li><a href="#"><img src="../../public/image/footer/img4.png" alt="image" /></a></li>
                            </ul>
                            
                        </div>
                    </div>

                </div>
                <div className="footer_box4">
                    <h2>জনপ্রিয় সাইটসমূহ</h2>
                    <div className="box_4">
                       <ul>
                        <li><a href="#">quran.com</a></li>
                        <li><a href="#">sunnah.com</a></li>
                        <li><a href="#">islamhouse.com</a></li>
                        <li> <a href="#">response-anti-islam</a></li>
                       </ul>
                    </div>
                </div>
                </div>

            </div>
            <img className="footer_img" src="../../public/image/footer/img5.png" alt="Image" />


        </section>
    );
};

export default Footer;