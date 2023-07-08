
import  { useState,useEffect } from "react";
import { faker } from "@faker-js/faker";
import Advertise from "./advertise";

const Advertises = () => {
    const [advertises, setAdvertises] = useState([
        {
            id: "",
            advertiserName:"",
            advertiseImage: "",
            website: "",
        }
    ]);
    const createRandomAdvertise = () => {
        return {
            id: faker.datatype.uuid(),
            advertiserName :`${faker.company.companySuffix()} ${faker.company.bs()}`,
            advertiseImage: faker.image.image(),
            website: faker.internet.url(),
        }
    }
    useEffect(() => {
        const ADVERTISE = faker.helpers.multiple(createRandomAdvertise, {
            count: 2,
        });
        setAdvertises(ADVERTISE);
    }, []);
    return (
        <>
        <h3>Sponsored</h3>
        {
            advertises.map((advertise) => (
                <Advertise key={advertise.id} advertise={advertise} />
            ))
        }
      
        </>
    )
}
export default Advertises;