
function Video (props) {
    return (
        <div class="intu-containt">
            <div class="intu-img">
            <iframe width="100%" height="500px" src={props.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            <div class="intu-text">
                <h3>Concept Explanation</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Video