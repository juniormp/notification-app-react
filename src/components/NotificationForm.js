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
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
            <div class="column">
              <form class="box">
                <div class="field has-text-centered">
                  <label class="label">Notification App</label>
                </div>
                <div class="field">
                  <label class="label">Category</label>
                  <div class="select is-primary">
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
                  </div>
                  <br />
                  <br />
                  <div class="field">
                    <label class="label">
                      Message
                      <textarea
                        class="textarea"
                        placeholder="Describe your message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                      />
                    </label>
                  </div>
                  <div class="field">
                    <button
                      class="button is-success"
                      onClick={handleSubmit}
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <LogHistory log={log} />
    </section>
  );
}

export default NotificatioForm;
