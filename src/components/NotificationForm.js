import {useEffect, useState} from "react";
import {getCategories, createMessage} from "../services/api";

function NotificatioForm() {
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState({category: "", message: ""});
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories(setCategories);
  }, [categories]);

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
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Notification System</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <form>
            <div>
              <label>
                Category
                <select
                  name="category"
                  id="category"
                  onChange={handleSelectChange}
                >
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
        </section>
      </div>
    </div>
  );
}

export default NotificatioForm;
