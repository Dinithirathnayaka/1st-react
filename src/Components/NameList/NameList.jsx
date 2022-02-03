import React from "react";

import NameListItem from "./NameListItem";

function NameList() {

    const nameList =[{
        name:{
            title:'mrs',
            first:'Dinithi',
            last:'Rathnayaka',
        },

        location:{
            city:'Bandarawela',
        },

        email:'dinithinayanamali98@gmail.com',

        dob:{
            date:'1998-02-19',
            age:'23',
        },

        picture:{
            medium:'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
        },

        name:{
            title:'mr',
            first:'Supun',
            last:'Rathnayaka',
        },

        location:{
            city:'Kurunegala',
        },

        email:'supun98@gmail.com',

        dob:{
            date:'1998-11-30',
            age:'22',
        },

        picture:{
            medium:'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
        },

        name:{
            title:'mr',
            first:'kapila',
            last:'Rathnayaka',
        },

        location:{
            city:'Nigambo',
        },

        email:'kapila98@gmail.com',

        dob:{
            date:'1993-01-19',
            age:'27',
        },

        picture:{
            medium:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nicepng.com%2Fourpic%2Fu2w7a9o0u2i1r5y3_jack-bayley-avatar-vector-icon-boy%2F&psig=AOvVaw1LUVeeTP1exGQaseyoypsm&ust=1643863975332000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiT4rbZ4PUCFQAAAAAdAAAAABAl',
        },
    }];

    return(
        <React.Fragment>
            <h1>Name list</h1>
        <hr/>
        <ul>
          <NameListItem 
          name={nameList[0].name.first + ' ' + nameList[0].name.last}
          city={nameList[0].location.city}
          email={nameList[0].email}
          birthday={nameList[0].dob.date + ' ' + nameList[0].dob.age }
          avatar={nameList[0].picture.medium}
          />

            <NameListItem 
          name={nameList[1].name.first + ' ' + nameList[1].name.last}
          city={nameList[1].location.city}
          email={nameList[1].email}
          birthday={nameList[1].dob.date + ' ' + nameList[1].dob.age }
          avatar={nameList[1].picture.medium}
          />

            <NameListItem 
          name={nameList[2].name.first + ' ' + nameList[2].name.last}
          city={nameList[2].location.city}
          email={nameList[2].email}
          birthday={nameList[2].dob.date + ' ' + nameList[2].dob.age }
          avatar={nameList[2].picture.medium}
          />
          
        
        </ul>
        </React.Fragment>
        
    );
    
}

export default NameList;