
const App_Store = () => {
    return (
        <section className="app_store">
            <div className="store">
                <div className="store_left">

                    <div className="image_side">
                           <img className="Screen_img" src="../../public/image/app_store/Screen.png" alt="Image" />
                    </div>

                    <div className="content_side">
                        <div className="cont">
                            <h2>আল হাদিস সাইটে আপনাকে স্বাগতম</h2>
                            <p>আল হাদিস এপের মাধ্যমে হাদিস পড়া, বুকমার্ক, অনলাইন সিংকিং সহ আর ও<br/>  অনেক কিছু সহজেই পারবেন।</p>
                        </div>

                        <div className="img">
                            <h2>ডাউনলোড করুন <br />আল হাদিস মোবাইল আপ </h2>
                            <div className="play">
                                <div className="apple">
                                   <div className="icon">
                                        <img src="../../public/image/app_store/_Group_.png" alt="Image" />
                                    </div>
                                    <div className="text">
                                        <img src="../../public/image/app_store/download.png" alt="Image" />
                                        <img src="../../public/image/app_store/Group.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="google">
                                    <div className="icon">
                                        <img src="../../public/image/app_store/icon.png" alt="Image" />
                                    </div>

                                    <div className="text">
                                        <img src="../../public/image/app_store/get.png" alt="Image" />
                                        <img src="../../public/image/app_store/GooglePlay.png" alt="Image" />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="store_right">
                    <img className="store_img1" src="../../public/image/app_store/mobile2.png" alt="Image" />
                    <img className="store_img2" src="../../public/image/app_store/mobile1.png" alt="Image" />
                </div>

            </div>

        </section>
    );
};

export default App_Store;