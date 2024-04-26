
function ProfilePicture(){
    const imageUrl = './src/assets/dog.jpg';
    const handleClick = (e) => {
        e.target.style.display = "none";
    }
    return(
        <img onClick={(e)=> handleClick(e)} src={imageUrl} alt="Dog"/>
    );
}
export default ProfilePicture;
