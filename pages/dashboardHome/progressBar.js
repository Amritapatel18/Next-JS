
function ProgressBar () {
    return (
        <div className="dashbord-overall-area">
            <div className="dashbord-overall-title-fl">
                <div className="dashbord-overall-title-left-text">
                    <h3>Overall Progress</h3>
                </div>
                <div className="dashbord-overall-title-progressbar">
                    <div className="dashbord-overall-title-progressbar-all">
                        <div className="progress"></div>
                        <span>33%</span>
                    </div>
                </div>
            </div>
            <div className="dashbord-overall-mid">
                <div className="dashbord-overall-mid-single-time">
                    <div className="dashbord-overall-mid-single-time-img">
                        <img src="/images/o1.png" alt=""/>
                    </div>
                    <div className="dashbord-overall-mid-single-time-text">
                        <h3>30mins</h3>
                        <p>Total Learning Time</p>
                    </div>
                </div>
                <div className="dashbord-overall-mid-single-time">
                    <div className="dashbord-overall-mid-single-time-img">
                        <img src="/images/o2.png" alt=""/>
                    </div>
                    <div className="dashbord-overall-mid-single-time-text">
                        <h3>75%</h3>
                        <p>Accuracy</p>
                    </div>
                </div>
                <div className="dashbord-overall-mid-single-time">
                    <div className="dashbord-overall-mid-single-time-img">
                        <img src="/images/o3.png" alt=""/>
                    </div>
                    <div className="dashbord-overall-mid-single-time-text">
                        <h3>16</h3>
                        <p>Questions Practiced</p>
                    </div>
                </div>
            </div>
            <div className="dashbord-your-progres-fl collapse" id="collapseExample">
                <div className="your-progress-left">
                    <div className="your-progress-title">
                        <h3>Your progress</h3>
                    </div>
                    <div className="your-progress-bar-fl">
                        <div className="your-progress-bar-single">
                            <div className="dashbord-overall-title-left-text wd">
                                <h3>Computer science</h3>
                            </div>
                            <div className="dashbord-overall-title-progressbar wd">
                                <div className="dashbord-overall-title-progressbar-all">
                                    <div className="progress"></div>
                                    <span>85%</span>
                                </div>
                            </div>
                        </div>
                        <div className="your-progress-bar-single">
                            <div className="dashbord-overall-title-left-text wd">
                                <h3>Computer science</h3>
                            </div>
                            <div className="dashbord-overall-title-progressbar wd">
                                <div className="dashbord-overall-title-progressbar-all">
                                    <div className="progress"></div>
                                    <span>85%</span>
                                </div>
                            </div>
                        </div>
                        <div className="your-progress-bar-single">
                            <div className="dashbord-overall-title-left-text wd">
                                <h3>Computer science</h3>
                            </div>
                            <div className="dashbord-overall-title-progressbar wd">
                                <div className="dashbord-overall-title-progressbar-all">
                                    <div className="progress"></div>
                                    <span>85%</span>
                                </div>
                            </div>
                        </div>
                        <div className="your-progress-bar-single">
                            <div className="dashbord-overall-title-left-text wd">
                                <h3>Computer science</h3>
                            </div>
                            <div className="dashbord-overall-title-progressbar wd">
                                <div className="dashbord-overall-title-progressbar-all">
                                    <div className="progress"></div>
                                    <span>85%</span>
                                </div>
                            </div>
                        </div>
                        <div className="your-progress-bar-single">
                            <div className="dashbord-overall-title-left-text wd">
                                <h3>Computer science</h3>
                            </div>
                            <div className="dashbord-overall-title-progressbar wd">
                                <div className="dashbord-overall-title-progressbar-all">
                                    <div className="progress"></div>
                                    <span>85%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="your-progress-bar-right">
                    <div className="your-progress-bar-right-top">
                        <h3>Bloom’s Taxonomy</h3>
                        <a href="#">All Subjects<i className="fal fa-chevron-down"></i></a>
                    </div>
                    <div className="your-progress-bar-right-img">
                        <a href="#"><img src="/images/tax-img.png" alt=""/></a>
                    </div>
                </div>
            </div>
            <div className="dashbord-overall-view-area">
                <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" data-target="#collapseExample">view more<i className="fal fa-chevron-down"></i></a>
            </div>
        </div>
    )
}

export default ProgressBar