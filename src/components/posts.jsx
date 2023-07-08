import { useState,useEffect } from "react";
import { faker } from "@faker-js/faker";
import Post from "./post";

const Posts = () => {
    const [posts, setPosts] = useState([
        {
            postId: "",
            userName: '',
            profilePicture: '',
            description: '',
            postImage: '',
            publishHour: '',
            commentCount: 0,
            likeCount: 0,
            shareCount: 0,
        },
    ]);

    const createRandomPost = () => {
        return{
             postId : faker.datatype.uuid(),
             userName : faker.internet.userName(),
             profilePicture : faker.image.avatar(),
             description : faker.lorem.sentences(3),
             postImage : faker.image.image(),
             publishHour : faker.number.int({ min: 0, max: 23 }),
             commentCount : faker.number.int({ min: 0, max: 100 }),
             likeCount : faker.number.int({ min: 0, max: 1000 }),
             shareCount : faker.number.int({ min: 0, max: 500 }),

        }
    }

    useEffect(() => {
        const POST = faker.helpers.multiple(createRandomPost, {
            count: 5,
        });
        setPosts(POST);
           
      
    }, []);
    return (
        <main className='posts-container' >
          {posts.map((post) => {
                  return <Post key={post.postId} post={post} />
          })
          }
        </main>
    )
}
export default Posts;