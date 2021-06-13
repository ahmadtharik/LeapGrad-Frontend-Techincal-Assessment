import React from "react";
import Accordion from "./Accordion.jsx";

let tempDate = "";
const DisplayResultItem = ({ result }) => {
  return (
    <Accordion>
      <div className="dateHeader" id={result.id}>
        {tempDate != new Date(result.created_at).toLocaleDateString()
          ? [
              <div className="dashed">
                <span>
                  {
                    (tempDate = new Date(
                      result.created_at
                    ).toLocaleDateString())
                  }
                </span>
              </div>,
            ]
          : null}
      </div>
      <div className="accor">
        <div className="box">
          {new Date(result.created_at)
            .toLocaleTimeString("en-US")
            .includes("PM") ? (
            <span>PM</span>
          ) : (
            <span>AM</span>
          )}
        </div>
        <div className="head">
          <div className="ui grid">
            <div className="one wide column">
              <div className="callType ">
                {result.call_type == "missed" && (
                  <i className="red phone icon"></i>
                )}
                {result.call_type == "answered" && (
                  <i className="green phone icon"></i>
                )}

                {result.call_type == "voicemail" && (
                  <i className="yellow envelope icon"></i>
                )}
              </div>
            </div>
            <div className="ten wide column">
              <div className="header">{result.from}</div>
              <span className="callFrom">tried to call on {result.via} </span>
            </div>
            <div className="one wide column">
              <div className="aside">
                <span>&#8942;</span>
                {new Date(result.created_at).toLocaleTimeString(
                  navigator.language,
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="data">
          <div className="ui grid">
            <div className="eight wide column">
              <div>
                {result.direction == "outbound" && <span>Outgoing </span>}
                {result.direction == "inbound" && <span>Incoming</span>}
                <p>
                  Call Duration: &nbsp;
                  {new Date(result.duration * 1000).toISOString().substr(11, 8)}
                </p>
              </div>
            </div>
            <div className="eight wide column">
              <div className="from">
                {result.to == null && [
                  <p id="unknown">Call From</p>,
                  <span>Unknown</span>,
                ]}
                {result.to != null && [<p>Call From</p>, result.to]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default DisplayResultItem;
