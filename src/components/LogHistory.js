function LogHistory({log}) {
  return (
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="content">
          {log?.map((log) => (
            <div class="columns is-gapless">
              <div class="card">
                <div class="card-content is-large">
                  <label class="label">
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
