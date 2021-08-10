import React from "react"

function BreakTime({ breakDuration, increaseBreakTime, decreaseBreakTime, disableButton}) {
    return (
        <div className="float-right">
        <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-break">
          {/* TODO: Update this text to display the current focus session duration */}
          Break Duration: {("0" + breakDuration).substr(-2)}:00
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-break"
            onClick={decreaseBreakTime}
            disabled={disableButton}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-break"
            onClick={increaseBreakTime}
            disabled={disableButton}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
      </div>
      );
}

export default BreakTime;