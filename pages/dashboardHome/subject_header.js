

function SubjHeader (props) {
    return (
        <div class="dashbord-wass-banner dde" style={{backgroundImage: `url(/images/math-bg.png)`}}>
            <div class="math-baner-fl">
                <div class="math-baner-img">
                    <img src="/images/s3.png" alt=""/>
                </div>
                <div class="math-banner-text">
                    <h3>{props.name? props.name : "MATHEMATICSsss"}</h3>
                    <div class="math-banner-text-fl">
                        <a href="#"><i class="fas fa-lightbulb-on"></i>10 Chapters</a>
                        <a href="#"><i class="far fa-clock"></i>52 Hours</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjHeader