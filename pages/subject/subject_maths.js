import Dashboard from '../../components/Dashboard'
import Header from '../../components/header'
import SubjHeader from '../dashboardHome/subject_header'
import SubjBody from '../dashboardHome/subject_body'


function SubjectMath() {
  return (
    <>
        <div className="overlay">
            <div className="dashbord-wrapper">
                <Dashboard/>
                <div className="dashbord-mid">
                    {/* <div className="dash-bord-mid-fl"> */}
                        <div className="dashbord-body">
                            <Header/>
                            {/* subject header */}
                            <SubjHeader name="MATHEMATICS"/>

                            {/* subject body */}
                            <div className="overview-area">
                                <SubjBody/>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default SubjectMath