const Group = ({ group }) => {
    const { name,image } = group;
    console.log(name,image);
    return (
        <li>
        <img src={image} alt="groupImage" className="avater" />
       {name}
    </li>
        )
    }

export default Group