import {useEffect, useState} from "react";
import {getCategories, createMessage} from "../../services/api";

function NotificatioForm() {
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState({category: "", message: ""});
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

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

  const handleTextChange = (event) =>
    setNotification({
      category,
      message: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(notification.category.trim().length);
    if (notification.message.trim().length !== 0) {
      createMessage(category, notification.message);
    } else if (notification.message.trim().length === 0) {
      setError(event.target.value ? null : "Message cannot be empty");
    } else if (notification.category.trim().length === 0) {
      setError(event.target.value ? null : "Category cannot be empty");
    }
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
            {error && <div style={{color: "red"}}>{error}</div>}
          </label>
        </div>
        <button onClick={handleSubmit}>Send Message</button>
      </form>
    </div>
  );
}

export default NotificatioForm;
