import React from "react";
import "./css/ContactItem.css";

function ContactItem({ contact, onEdit, onDelete }) {
  return (
    <li className="contact-item">
      <div>
        <strong>{contact.name}</strong> - {contact.email}
      </div>
      <div className="buttons">
        <button onClick={onEdit}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default ContactItem;