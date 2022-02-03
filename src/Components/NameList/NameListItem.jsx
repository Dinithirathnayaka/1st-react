import React from 'react';

import moment from 'moment';

function NameListItem(props) {

    return(
        <li>
            <p>
                <img src={props.avatar} alt={props.name}/>{props.name}
            </p>

            <p>City: {props.city}</p>
            <p>Email: {props.email}</p>
           
           
        </li>
    );
     
}
export default NameListItem;