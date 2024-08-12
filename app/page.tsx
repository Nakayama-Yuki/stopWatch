export default function Page() {
  return (
    <div className="stopwatch">
      <div className="time-display">00:00:00</div>
      <div className="controls">
        <button id="start">Start</button>
        <button id="stop">Stop</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
}
