import React, { useEffect,useState, useRef } from "react";
import Link from 'next/link'
import Dashboard from '../components/Dashboard'
import Header from '../components/header'
import Video from '../components/video'
import Notes from './notes'
import StudyResources from './studyResources'


function MyConcepts() {
    const [mark, setMark] = useState(false);

    const handleMark = (e) =>{
       setMark(!mark)
    }
    
    const videoDescription = "Post votum promissa memini cuius adeptione cupis; quem pollicitus est aversione aversi et fuga. Qui autem de re desit libido frustra miseri qui incurrit odium sui obiecti.Si ergo illa tantum fastidium compesce contra naturalem usum habili, quem habetis vestra potestate, non aliud quam aversantur incurrere. Sed si ipse aversaris, ad languorem: et mors, paupertas et tu miseros fore.Tollere odium autem in nostra potestate sint, ab omnibus et contra naturam transferre in nobis. Sed interim toto desiderio supprimunt: si vis aliqua quae in manu tua tibi necesse confundentur et quae, quod laudabile esset, nihil tamen possides."
    return (
    <>
        <div className="overlay">
            <div className="dashbord-wrapper">
                <Dashboard/>

                <div className="dashbord-mid">
                    <div className="dash-bord-mid-fl">
                        <div className="dashbord-body">
                            <Header/>
                            
                            <div class="intu-fl">
                                <div class="intu-left">

                                    <div class="back-area">
                                        <a href="#"><i class="fal fa-long-arrow-left"></i>Back</a>
                                    </div>

                                    <div class="intuduction-area">
                                        <div class="intu-title">

                                            <h3>Introduction to Motion and its Parameters</h3>
                                            <a href="#" onClick={handleMark}>{mark ? <img src="/images/v-icon2.png" alt=""/> : <img src="/images/v-icon.png" alt=""/>}</a>

                                        </div>
                                        
                                        {/* concepts video */}
                                        <Video src="https://www.youtube.com/embed/d-g25jF-IsM" description={videoDescription}/>

                                    </div>

                                </div>

                                <div class="intu-ri">
                                    <div class="intu-ri-btn">
                                        <a href="#" class="theme-btn">Take a test</a>
                                    </div>

                                    {/* Notes */}
                                    <Notes mark={mark}/>
                                    
                                    {/* Study Resources */}
                                    <StudyResources/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyConcepts