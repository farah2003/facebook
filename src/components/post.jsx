import options from '../assets/options.svg'
import golbal from '../assets/global.jpg'
import close from '../assets/close.png'
import like from '../assets/like.svg'
import comment from '../assets/comment.jpg'
import share from '../assets/share.svg'
import footerLike from '../assets/footer-like.svg'
const Post = ({ post }) => {
    const {  profilePicture,userName,description,postImage,publishHour,shareCount,commentCount,likeCount }=post;
  
    return (
        <article className='post'>
            <div className="post-header">
                <div className="post-header-left-section">
                    <img src={profilePicture} alt="" className="avater" />
                    <div>
                        <strong>
                            {userName}
                        </strong>
                        <div className='post-time-info'>
                            <p>{publishHour}</p>
                            <img src={golbal} alt="global" className="global" />
                        </div>
                    </div>
                </div>
                <div className="post-header-right-section">
                    <img src={options} alt="menu" />
                    <img src={close} alt="close" />
                </div>
            </div>
            <p className='post-description'>{description}</p>
            <img src={postImage} alt="PostImage" className="post-img" />
            <div className="post-info">
                <div className="post-reactions-number">
                    <img src={like} alt="like" />
                    <p>{likeCount}</p>

                </div>
                <div className="comment-number">
                    <div>
                        <p>{commentCount}</p>
                        <img src={comment} alt="comment" />
                    </div>
                    <div>
                        <p>{shareCount}</p>
                        <img src={share} alt="share" />
                    </div>

                </div>
            </div>
            <div className="post-footer">
                <div>
                    <img src={footerLike} alt="like" />
                    <p>Like</p>
                </div>

                <div>
                    <img src={comment} alt="comment" />
                    <p>Comment</p>
                </div>
                <div>
                    <img src={share} alt="share" />
                    <p>Share</p>
                </div>
            </div>
        </article>
    )
}
export default Post;