function LogHistory({log}) {
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="content">
          {log?.map((log) => (
            <div
              className="columns is-gapless"
              key={log.category + log.content}
            >
              <div className="card">
                <div className="card-content is-large">
                  <label className="label">
                    <strong>{log.category}</strong>
                    <br />
                    <strong>{log.content}</strong>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogHistory;
