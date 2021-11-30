import Link from 'next/link'


function Dashboard() {
    const handleClick = (tab) => {
        console.log("tab name", tab)
    }
  return (
    <div className="dashbord-left">
        <div className="dashbord-left-containt">
            <div className="dasbord-left-user">
                <div className="dasbord-left-user-img">
                    <a href="#"><img src="/images/user.png" alt=""/></a>
                </div>
                <div className="dasbord-left-user-text">
                    <h3>Dianne Stewrd</h3>
                    <span>Grade 02</span>
                </div>
            </div>
            <div className="dashbord-left-menu">
                <ul>
                    <li className="activve" onClick={() => handleClick("class")}>
                        <img src="/images/m-s.png" alt="" className="ms1"/>
                            <Link href="/myClass">
                                <a>
                                    <img src="/images/m1.png" alt=""/>
                                    My class
                                </a>
                            </Link> 
                        <img src="/images/m-s2.png" alt="" className="ms2"/>
                    </li>
                    
                    <li onClick={() => handleClick("practice")}>
                       
                            <Link href="/practiceTest">
                                <a>
                                    <img src="/images/m2.png" alt=""/>
                                    Practice Test
                                </a>
                            </Link> 
                        
                    </li>

                    <li onClick={() => handleClick("leaderboard")}>
                        
                            <Link href="/leaderboard">
                                <a>
                                    <img src="/images/m3.png" alt=""/>
                                    Leaderboard
                                </a>
                            </Link>
                        
                    </li>
                    
                    <li onClick={() => handleClick("performance")}>
                        
                            <Link href="/performance">
                                <a>
                                    <img src="/images/m4.png" alt=""/>
                                    Performance
                                </a>
                            </Link>
                        
                    </li>

                    <li  onClick={() => handleClick("notes")}>
                        
                            <Link href="/myNotes">
                                <a>
                                    <img src="/images/m5.png" alt=""/>
                                    My Notes
                                </a>
                            </Link> 
                        
                    </li>
                    
                    <li  onClick={() => handleClick("bookmark")}>
                        
                            <Link href="/bookmarks">
                                <a>
                                    <img src="/images/m6.png" alt=""/>
                                    Bookmarks
                                </a>
                            </Link>
                        
                    </li>

                    <li onClick={() => handleClick("account")}>
                        
                            <Link href="/myAccount">
                                <a>
                                    <img src="/images/m7.png" alt=""/>
                                    My Account
                                </a>
                            </Link>
                         
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Dashboard