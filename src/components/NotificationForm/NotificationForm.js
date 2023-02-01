import {useEffect, useState} from "react";
import {getCategories, createMessage} from "../../services/api";

function NotificatioForm() {
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState({category: "", message: ""});
  const [category, setCategory] = useState("");

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
    setNotification({
      category: event.target.value,
      message: notification.message,
    });
  };

  const handleTextChange = (e) =>
    setNotification({
      category,
      message: e.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(category);
    createMessage(category, notification.message);
  };

  return (
    <div>
      <h1>Message</h1>
      <form>
        <div>
          <label>
            Category
            <select name="category" id="category" onChange={handleSelectChange}>
              <option value="choose" disabled selected="selected">
                Select Category
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Message
            <textarea
              value={notification.message}
              onChange={handleTextChange}
            />
          </label>
        </div>
        <button onClick={handleSubmit}>Send Message</button>
      </form>
    </div>
  );
}

export default NotificatioForm;
