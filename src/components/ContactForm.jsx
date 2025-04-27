import React from "react";
import "./css/ContactForm.css";

function ContactForm({ name, email, editingIndex, onNameChange, onEmailChange, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={onNameChange}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      
      <button type="submit">
        {editingIndex !== null ? "Update" : "Add Contact"}
      </button>
    </form>
  );
}

export default ContactForm;