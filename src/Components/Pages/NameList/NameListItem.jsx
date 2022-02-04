import React from 'react';

import moment from 'moment';



function NameListItem(props) {

    return(
        <li className='list-group-item shadow-sm'>
            <div className='row items-align-center'>
                <div className='col-4'>
                <img src={props.avatar} alt={props.name} className='border border-dark rounded-circle shadow-sm '/>
                </div>

                <div className='col-8'>
                <h4> {props.name}</h4>
                <p>{props.city}|{props.email}</p>
                <small>{moment(props.birthday).format('DD-MM-YYYY')}</small>
                </div>
            </div>
            
           
           
        </li>
    );
     
}
export default NameListItem;