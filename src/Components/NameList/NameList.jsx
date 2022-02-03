import React, {useState} from "react";

import NameListItem from "./NameListItem";

function NameList() {

    const [nameList, setNameList]= useState([
        {
            id:1,
            name:{
                title:'Mrs',
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
         },

        {
            id:2,
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
        },

        {
            id:3,
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
                medium:'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',

            }
        },
 
    ]);

    

    //ARRAY MAP 

    const NameListComponent =() =>{
        return nameList.map((aName) =>{
            return(
                <NameListItem 
                key={aName.id}
                name={aName.name.first + ' ' + aName.name.last}
                city={aName.location.city}
                email={aName.email}
                birthday={aName.dob.date }
                avatar={aName.picture.medium}
                />
            );
        });
       
    };

    const addUserHandler=()=>{
       const newUser ={
        id:4,
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
            medium:'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',

        },

       };

       //setNameList((nameList) => nameList.concat(newUser));

       setNameList((nameList) => [...nameList, newUser]);
    };

    return(
        <React.Fragment>
       <div className="container mt-4">
           <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
       <ul className="list-group">{NameListComponent()}</ul>
       </div>
      
        </React.Fragment>
        
    );
    
}

export default NameList;