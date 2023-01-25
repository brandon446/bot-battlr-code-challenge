import React from "react";

function BotCollection({ bot }) {
  return (
    <div>
      <h1>Bot Collection</h1>
      <div className="row" style={{gap: "3%"}}>
        {Array.isArray(bot)
          ? bot.map((bots, index) => {
              return (
                <div className="col-2 mb-4">
                  <div className="row no-gutters">
                    <div
                      key={index}
                      className="card p-0 m-1"
                      style={{ width: "100%" }}
                    >
                      <div className="col md-3">
                        <img
                          src={bots.avatar_url}
                          class="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <p className="text-danger">{bots.name}</p>
                        <p className="card-text">{bots.catchphrase}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
export default BotCollection;