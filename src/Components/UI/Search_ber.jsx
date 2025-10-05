const Search_ber = () => {
    return (
       <section className="search_ber">
            <div className="search_box">

                <div className="search">
                    <img src="../../public/image/search_ber/search.png" alt="Image" />
                <input type="text" placeholder="হাদিস খুঁজুন..." />
                 </div>
                <span className="arabic">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
                <button className="search_btn"> Search</button>
            </div>

            <div className="background-decorations">
                <div className="mosque"></div>
                <div className="desert_ground"></div>

            </div>
       

       </section>
    );
};

export default Search_ber;