
import { useState, useEffect } from 'react'
import { faker } from "@faker-js/faker";
import Story from './story'
import add from '../assets/add.png'
import profile from '../assets/profile.jpg'

const Stories = () => {
    const [stories, setStories] = useState([
        {
            id: "",
            username: "",
            profilePicture: "",
            storyImage: "",


        }
    ])
    const CreateRandomStory = () => {
        return {
            id: faker.datatype.uuid(),
            username: faker.internet.userName(),
            profilePicture: faker.image.avatar(),
            storyImage: faker.image.image()
        }
    }

    useEffect(() => {
        const stories = faker.helpers.multiple(CreateRandomStory, {
            count: 4
        })
        setStories(stories)

    }, []);
    return (
        <div className='stories'>
            <div className='story'>
                <img src={profile} alt="profile" className='profile' />
                <img src={add} alt="add" className='add' />
                <p className='create'>create story</p>

                </div>
            {
                stories.map((story,index) => (
                    <Story key={story.id} story={story} index={index} />
                ))

            }
        </div >
    )
}

export default Stories