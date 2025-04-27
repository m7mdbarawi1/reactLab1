import React, { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    if (editingIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editingIndex] = { name, email };
      setContacts(updatedContacts);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, { name, email }]);
    }
    setName("");
    setEmail("");
  };

  const handleEdit = (index) => {
    setName(contacts[index].name);
    setEmail(contacts[index].email);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="container">
      <h1 className="title">Contact Manager App</h1>
      <ContactForm
        name={name}
        email={email}
        editingIndex={editingIndex}
        onNameChange={(e) => setName(e.target.value)}
        onEmailChange={(e) => setEmail(e.target.value)}
        onSubmit={handleSubmit}
      />
      <ContactList
        contacts={contacts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;