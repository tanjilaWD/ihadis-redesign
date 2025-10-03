const Search_ber = () => {
    return (
       <section className="search_ber">
            <div className="search_box">
                <input type="text" placeholder="হাদিস খুঁজুন..." />
                <span className="arabic">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
                <button className="filter_btn">☰</button>
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