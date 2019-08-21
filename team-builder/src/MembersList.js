import React, {useState} from 'react';



const MembersList = props => {

    const [form, setForm] = useState({ name: "", email: "", role: ""});
    const changeHandler = event => {
        console.log(event.target.name);
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const submitForm = event => {
        event.preventDefault();
        const newForm = {
            ...form,
            
        };
        props.addMember(newForm);
        setForm({ name: "", email: "", role: ""});
    };
    return (
        <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
        type="text"
        name="name"
        placeholder="name goes here"
        value={form.name}
        onChange={changeHandler}
        />
        <label htmlFor="email">Email</label>
         <input
        type="text"
        name="email"
        placeholder="email goes here"
        value={form.email}
        onChange={changeHandler}
        />
        <label htmlFor="role">Role</label>
         <input
        type="text"
        name="role"
        placeholder="working on..."
        value={form.role}
        onChange={changeHandler}
        />
        <button type="submit">Submit Form</button>
        </form>
    )

}
export default MembersList;