function LogHistory({log}) {
  return (
    <ul>
      {log?.map((log) => (
        <li key={Math.random()}>
          <strong>Category:</strong> {log.category}
          <br />
          <strong>Message:</strong> {log.content}
        </li>
      ))}
    </ul>
  );
}

export default LogHistory;
