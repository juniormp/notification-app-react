import {useEffect, useState} from "react";
import {getMessages} from "../services/api";

function LogHistory() {
  const [log, setLog] = useState([]);

  useEffect(() => {
    getMessages(setLog);
  }, [log]);

  return (
    <div>
      <div className="container">
        <section className="section">
          <div className="rows">
            {log.map((log) => (
              <div className="row is-3">
                <div key={log.date + Math.random()}>
                  <p>Category: {log.category}</p>
                  <p>Message: {log.content}</p>
                  <p>Date: {new Date(log.dateTime).toLocaleString()}</p>
                </div>
                <br />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default LogHistory;
