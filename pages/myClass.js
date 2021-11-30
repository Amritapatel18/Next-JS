import Link from 'next/link'
import Dashboard from '../components/Dashboard'
import Header from '../components/header'
import SubDashboard from './subject/subject_dashboard'
import ProgressBar from './dashboardHome/progressBar'
import Activity from './dashboardHome/activity'
import ContinueLearning from './dashboardHome/learningC'
import ContinueWatching from './dashboardHome/watchingC'

function MyClass() {
  return (
    <>
        <div className="overlay">
            <div className="dashbord-wrapper">
                <Dashboard/>
                <div className="dashbord-mid">
                    <div className="dash-bord-mid-fl">
                        <div className="dashbord-body">
                            <Header/>
                            <div className="dashbord-wass-banner" style={{backgroundImage: `url("/images/was-bg.png")`}}>
                                <a href="#">Wassup! <img src="/images/Wink-Icon.png" alt=""/></a>
                                <h3>John doe</h3>
                            </div>

                            <SubDashboard/>

                            {/* progress bar */}
                            <ProgressBar/>  

                            {/* continue learning section */}
                            <ContinueLearning/>

                            {/* continue watching section */}
                            <ContinueWatching/>

                        </div>

                        {/* activity section */}
                        <Activity/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyClass