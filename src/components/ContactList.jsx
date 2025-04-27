import React from "react";
import ContactItem from "./ContactItem";
import "./css/ContactList.css";

function ContactList({ contacts, onEdit, onDelete }) {
  if (contacts.length === 0) {
    return <p className="no-contacts">No contacts yet.</p>;
  }

  return (
    <ul className="contact-list">
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          contact={contact}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}

export default ContactList;