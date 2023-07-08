const Advertise=({advertise})=>{
    const {advertiserName,advertiseImage,website}=advertise;
    return(
        <div className='advertise'>
            <img src={advertiseImage} alt="advertise" className="advertise-image" />
            <div className="advertise-details">
                <p className="decription">{advertiserName}</p>
                <p className="website">{website}</p>
            </div>
        </div>
    )
}
export default Advertise;