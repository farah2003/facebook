const Contact = ({contact}) => {
    const {userName,profilePicture} = contact;
    return (
        <li >
        <img src={profilePicture} alt="profile" />
        <p className="name">{userName} </p>
    </li>
    );
    };

    export default Contact;