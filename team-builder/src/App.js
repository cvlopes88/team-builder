import React, {useState} from 'react';

import './App.css';
import Form from './Form';
import MembersList from './MembersList';
import Data from "./Data";
function App() {

  const [forms, setForms] = useState(Data);
  const addMember = form => {
    setForms([...forms, form]);
  }

  return (
    <div className="App">
     
      <h1>Team Members</h1>
      <MembersList addMember={addMember} />
      <Form formLists={forms} />
    </div>
  );
}

export default App;
