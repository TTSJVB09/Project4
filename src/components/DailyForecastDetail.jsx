import React from "react";

function DailyForecastDetail() {
  return (
    <div>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="modal fade show d-block"
        id="exampleModal"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Hello</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-base">Integer nec odio. Praesent libero.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyForecastDetail;
