
const Books = () => {
    return (
       <section className="books">
        <div className="book">
            <div className="book_heading">
              <h2>হাদিসের বইসমূহ</h2>
              <p>হাদিসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি গুরুত্বপূর্ণ উৎস। এই কিতাবগুলো মহানবী <br /> মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সালাম)-এর সীরাত(জীবনী) ও দিক-নির্দেশনার প্রতি অন্তর্দৃষ্টি প্রদান করে।</p>  
            </div>
            <div className="book_content">
                <div className="book_des">
                    <div className="book_name">
                        <h3>সহীহ বুখারী</h3>
                        <p>হাদিসের রেঞ্জ ৭০৫৩</p>
                    </div>
                    <div className="book_img">
                        <img src="/Image/books/book.png" alt="Book Image" />
                    </div>
                </div>

                <div className="book_des">
                    <div className="book_name">
                        <h3>সহীহ মুসলিম</h3>
                        <p>হাদিসের রেঞ্জ ৭৪৫৩</p>
                    </div>
                    <div className="book_img">
                        <img src="/Image/books/book1.png" alt="Book Image" />
                    </div>
                </div>
                <div className="book_des">
                    <div className="book_name">
                        <h3>সুনানে আবু দাউদ</h3>
                        <p>হাদিসের রেঞ্জ ৫২৭৪</p>
                    </div>
                    <div className="book_img">
                        <img src="/Image/books/book2.png" alt="Book Image" />
                    </div>
                </div>
                <div className="book_des">
                    <div className="book_name">
                        <h3>জাল যয়ীফ হাদিস সিরিজ</h3>
                        <p>হাদিসের রেঞ্জ ১০২</p>
                    </div>
                    <div className="book_img">
                        <img src="/Image/books/book3.png" alt="Book Image" />
                    </div>
                </div>
                <div className="book_des">
                    <div className="book_name">
                        <h3>মুয়াত্তা ইমাম মালিক </h3>
                        <p>হাদিসের রেঞ্জ ১৮৩২</p>
                    </div>
                    <div className="book_img">
                        <img src="/Image/books/book4.png" alt="Book Image" />
                    </div>
                </div>
                <div className="book_des">
                    <div className="book_name">
                        <h3>সুনানে ইবনে মাজাহ</h3>
                        <p>হাদিসের রেঞ্জ ৪৩৪১</p>
                    </div>
                    <div className="book_img">
                        <img src="/Image/books/book5.png" alt="Book Image" />
                    </div>
                </div>

            </div>

            <button className="book_btn">
                <img src="/Image/books/Group.png" alt="Book Image" />
                <h4>সকল হাদিস গ্রন্থসমূহ</h4>
                <img src="/Image/books/Frame.png" alt="Book Image" />

            </button>

        </div>

       </section>
    );
};

export default Books;