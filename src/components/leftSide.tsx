
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import home from '../assets/home.svg'
import watch from '../assets/watch.png'
import marketplace from '../assets/marketplace.png'
import game from '../assets/game.png'
import menu from '../assets/menu.png'
import profile from '../assets/profile.jpg'
import Group from './group';

const LeftSide = () => {
    const [groups, setGroups] = useState([{
        id: "",
        name: "",
        image: ""
    }
    ]);
    const createGroups = () => {
        return {
            id: faker.datatype.uuid(),
            name: faker.lorem.words(2),
            image: faker.image.avatar()
        }
    }

    useEffect(() => {
        const GROUPS = faker.helpers.multiple(
            createGroups,
            {
                count: 10
            }
        )
        setGroups(GROUPS);

    }, [])
    return (
        <aside className='left-aside'>
            <ul>
                <li>
                    <img src={home} alt="Home Icon" />
                    Home
                </li>
                <li>
                    <img src={profile} alt="profile" className="avater" />
                    Farah Shaqoura
                </li>
                <hr />
                <li>
                    <img src={watch} alt="watch icon" />
                    Watch
                </li>
                <li>
                    <img src={marketplace} alt="marketplace" />
                    marketplace
                </li>
                <li>
                    <img src={game} alt="game" />
                    Gaming
                </li>
                <li>
                    <img src={menu} alt="seeMore" className="seeMore" />
                    See all
                </li>
                <hr />
                {
                    groups.map((group) => {
                        return (
                            <Group key={group.id} group={group} />
                        )
                    }
                    )
                }


            </ul>
        </aside >
    );
}
export default LeftSide;