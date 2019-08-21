import React, {useState} from 'react';

const Form = props => {
    console.log(props)
    return (
        <div>
            {props.formLists.map(form => {
                return (
                    <div>
                        <h2>{form.name}</h2>
                        <p>{form.email}</p>
                        <p>{form.role}</p>
                       

                    </div>
                )
            })}
        </div>
    );
};
export default Form;

