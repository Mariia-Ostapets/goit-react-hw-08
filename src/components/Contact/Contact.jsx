import css from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openModal, openEditModal } from "../../redux/contacts/slice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openModal(contact.id));
  };

  const handleEdit = () => {
    dispatch(openEditModal(contact));
  };

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.text}>
          <AiOutlineUser />
          {contact.name}
        </p>
        <p className={css.text}>
          <AiOutlinePhone />
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleEdit}>
        Edit
      </button>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
