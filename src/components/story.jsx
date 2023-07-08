import arrowright from '../assets/arrowright.svg';
const Story = ({story,index}) => {
    const { username, profilePicture, storyImage } = story;
    
    return (
        <div className='story'>
            <img src={storyImage} alt="profile" className='story-image' />
            <img src={profilePicture} alt="avater" className='avater' />
            {
                index === 3 &&  <img src={arrowright} alt="avater" className='arrow' />
            }
            <p className='title'>{username}</p>

         
        </div>
    )
}
export default Story;