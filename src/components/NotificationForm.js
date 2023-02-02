import {useEffect, useState} from "react";
import {createMessage, getCategories, getMessages} from "../services/api.js";
import LogHistory from "../components/LogHistory.js";

function NotificatioForm() {
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
  const [log, setLog] = useState();

  useEffect(() => {
    getMessages(setLog);
  }, []);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message || !category) {
      alert("Please enter a message and category.");
      return;
    }
    createMessage(category, message);
  };

  return (
    <div>
      <form>
        <label>
          Category:
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option hidden value="">
              Select Category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <br />
        <button onClick={handleSubmit} type="button">
          Submit
        </button>
      </form>
      <hr />
      <LogHistory log={log} />
    </div>
  );
}

export default NotificatioForm;
