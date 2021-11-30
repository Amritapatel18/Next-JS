import Link from 'next/link'

function SubDashboard () {
    return (
        <div className="dashbord-subject-area">
            <div className="section-title">
                <h3>Subjects</h3>
            </div>
            <div className="dashbord-subject-fl">
                <Link href="/subject/subject_physics">
                    <div className="single-dashbord-subject">
                        <div className="single-sub">
                            <div className="single-dashbord-subject-img">
                                <img src="/images/s1.png" alt=""/>
                            </div>
                            <div className="single-dashbord-subject-text">
                                <a>Physics</a>
                            </div>
                        </div>
                    </div>
                </Link>

                                        
                <Link href="/subject/subject_chemistry">
                    <div className="single-dashbord-subject">
                        <div className="single-sub">
                            <div className="single-dashbord-subject-img">
                                <img src="/images/s2.png" alt=""/>
                            </div>
                            <div className="single-dashbord-subject-text">
                                <a>Chemistry</a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/subject/subject_maths">
                    <div className="single-dashbord-subject">
                        <div className="single-sub">
                            <div className="single-dashbord-subject-img">
                                <img src="/images/s3.png" alt=""/>
                            </div>
                            <div className="single-dashbord-subject-text">
                                <a>Mathematics</a> 
                            </div>
                        </div>
                    </div>
                </Link>
                                        
                <Link href="/subject/subject_CS">
                    <div className="single-dashbord-subject">
                        <div className="single-sub">
                            <div className="single-dashbord-subject-img">
                                <img src="/images/s4.png" alt=""/>
                            </div>
                            <div className="single-dashbord-subject-text">
                                <a>Computer science</a>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SubDashboard