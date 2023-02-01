import {useEffect, useState} from "react";
import {getMessages} from "../../services/api";

function LogHistory() {
  const [log, setLog] = useState([]);

  useEffect(() => {
    getMessages(setLog);
  }, []);

  return (
    <div>
      <h1>Log History</h1>
      {log.map((log) => (
        <div key={log.date}>
          <p>Category: {log.category}</p>
          <p>Message: {log.content}</p>
          <p>Date: {new Date(log.dateTime).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default LogHistory;
