export default function Page() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-4xl font-mono mb-4">00:00:00</div>
      <div className="flex space-x-2">
        <button id="start" class="bg-blue-500 text-white px-4 py-2 rounded">
          Start
        </button>
        <button id="stop" class="bg-red-500 text-white px-4 py-2 rounded">
          Stop
        </button>
        <button id="reset" class="bg-gray-500 text-white px-4 py-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
