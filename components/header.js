import Link from 'next/link'

function Header() {
  return (
    <div className="dashbord-header-area">
        <div className="dashbord-header-logo">
            <a href="index.html"><img src="/images/site-logo.png" alt=""/></a>
        </div>
        <div className="sps-ibt">
        <div className="dashbord-search-fl">
            <div className="dashbord-search-input">
                <input type="text" placeholder="Search"/>
                <a href="#"><i className="fa fa-search"></i></a>
            </div>
            
            <div className="dasbord-serch-noty">
                <a href="#"><i className="fas fa-bell"></i></a>
                <span></span>
            </div>
            <div className="bar">
                <a href="#"><i className="fal fa-bars"></i></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header