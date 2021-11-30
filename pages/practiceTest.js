import Dashboard from '../components/Dashboard'
import Header from '../components/header'

function PracticeTest() {
  return (
    <>
        <div className="overlay">
            <div className="dashbord-wrapper">
                <Dashboard/>
                <div className="dashbord-mid">
                    {/* <div className="dash-bord-mid-fl"> */}
                        <div className="dashbord-body">
                            <Header/>
                            <div className="dashbord-wass-banner" style={{backgroundImage: `url("/images/was-bg.png")`}}>
                                <a href="#">Wassup! <img src="/images/Wink-Icon.png" alt=""/></a>
                                <h3>John doe - Practice Test</h3>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default PracticeTest