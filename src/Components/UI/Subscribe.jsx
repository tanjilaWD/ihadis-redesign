

const Subscribe = () => {
    return (
       <section className="subscribe">
          <div className="sub_container">
            <div className="sub_left">
                <img className="sub_img" src="/Image/subscribe/subscribe.png" alt="Image" />
                <h3>প্রতিদিন ইমেইলে হাদিস পেতে আমাদের সাবস্ক্রাইব করুন</h3>
            </div>
            <div className="sub_right">
                <input className="input" type="text" placeholder="Enter your email address" />
                <button className="sub_btn">Subscribe</button>
            </div>
          </div>

       </section>
    );
};

export default Subscribe;