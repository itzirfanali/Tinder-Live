import { SwipeableDrawer } from '@mui/material';
import React,  { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
function TinderCards(){
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
        },
        {
            name: 'Jeff Bezos',
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"
        },
    ]);

    const swiped = (direction,nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };
    return( 
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
               <TinderCard 
               className="swipe"
               key={person.name}
               preventSwipe={["up", "down"]}
               onSwipe={(dir) => SwipeableDrawer(dir, person.name)}
               onCardLeftScreen={() => outOfFrame(person.name)}
               >
                   <div
                       style={{ backgroundImage: "url(" + person.url + ")" }}
                       className = "card"
                    >
                        <h3>{person.name}</h3>   
                   </div>
               </TinderCard>
            ))}
            </div>


            
        </div> 
    );
}

export default TinderCards;