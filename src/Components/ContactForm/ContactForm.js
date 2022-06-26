import { useState } from 'react';
import propTypes from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm({ createNewContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // отслеживает инпуты формы
  const handleChange = e => {
    // const { name, value } = e.currentTarget;
    // this.setState({ [name]: value });

    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'number') {
      setNumber(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    createNewContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.name}>
        Name
        <input
          type="text"
          placeholder="Enter some name"
          name="name" // для паттерна обновления state
          value={name} // для очистки инпута после submit
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          placeholder="Enter phone number"
          name="number" // для паттерна обновления state
          value={number} // для очистки инпута после submit
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.submit} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  createNewContact: propTypes.func.isRequired,
};

export default ContactForm;
