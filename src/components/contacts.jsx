import {useState,useEffect} from 'react';
import {faker} from '@faker-js/faker';
import Contact from './contact';
import viedocall from '../assets/viedocall.png';
import srarch from '../assets/search.svg';
import options from '../assets/options.svg';

const   Contacts = () => {

    const [contacts, setContacts] = useState([
        {
            id: "",
            username: "",
            profilePicture: "",
        }
    ]);
    const createRandomContact = () => {
        return {
            id: faker.datatype.uuid(),
            userName: faker.internet.userName(),
            profilePicture: faker.image.avatar(),
        }
    }
    
    useEffect(() => {
        const CONTACTS = faker.helpers.multiple(createRandomContact, {
            count: 10,
        });
        setContacts(CONTACTS);
   
    }, []);
    return (
        <div className="contact-section">
        <div className='contact-header'>
            <h3>Contacts</h3>
            <ul >
                <li>
                    <img src={viedocall} alt="viedocall" />
                </li>
                <li>
                    <img src={srarch} alt="search" />
                </li>

                <li>
                    <img src={options} alt="options" />
                </li>
            </ul>
        </div>

        <ul className='contacts'>
                    { contacts.map((contact) => (
                        <Contact key={contact.id} contact={contact} />
                    ))}
                </ul>                 
        </div>
    )
}

export default Contacts