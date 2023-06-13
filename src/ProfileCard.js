function ProfileCard(props){
    return(
        <div class="card">
            <div className="card-image">
                <figure>
                    <img src={props.img} alt="logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                    <p className="title is-4">{props.titulo}</p>
                    </div>
                </div>
            </div>
        </div>

    )    

}

export default ProfileCard;