
function Notes (props) {
    return ( 
        <>
        {props.mark?
            <div class="intu-note-box">
                <div class="note-title">
                    <h3>My Notes</h3>
                </div>
                <div class="intu-note-box-top">
                    <a href="Dashboard%20(Notes%20empty).html">Create a new note at 2:01<i class="fal fa-plus-circle"></i></a>
                </div>
                <div class="note-list">
                    <div class="single-note-list">
                        <div class="note-list-titel">
                            <h3>Created at 01:34</h3>
                        </div>
                        <div class="note-list-text-box">
                            <p>Post votum promissa memini cuius adeptione cupis; quem pollicitus est aversione aversi et fuga.</p>
                            <a href="#" class="trastt"><i class="fas fa-trash"></i></a>
                        </div>
                    </div>
                    <div class="single-note-list">
                        <div class="note-list-titel">
                            <h3>Created at 01:34</h3>
                        </div>
                        <div class="note-list-text-box">
                            <p>Post votum promissa memini cuius adeptione cupis; quem pollicitus est aversione aversi et fuga.</p>
                            <a href="#" class="trastt"><i class="fas fa-trash"></i></a>
                        </div>
                    </div>
                    <div class="single-note-list">
                        <div class="note-list-titel">
                            <h3>Created at 01:34</h3>
                        </div>
                        <div class="note-list-text-box">
                            <p>Post votum promissa memini cuius adeptione cupis; quem pollicitus est aversione aversi et fuga.</p>
                            <a href="#" class="trastt"><i class="fas fa-trash"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div class="intu-note-box">
                <div class="note-title">
                    <h3>My Notes</h3>
                </div>
                <div class="intu-note-box-top">
                    <a href="Dashboard%20(Notes%20filled).html">Create a new note at 2:01<i class="fal fa-plus-circle"></i></a>
                </div>
                <div class="intu-note-box-text">
                    <div class="intu-note-box-img">
                        <img src="assets/img/nit.png" alt=""/>
                    </div>
                    <div class="note-box-text-con">
                        <h3>No notes created yet!</h3>
                        <p>Notes are essential to boost your last moment <br/> preparations</p>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Notes