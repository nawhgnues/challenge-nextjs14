export default function Home() {
  return (
    <div className="w-screen bg-emerald-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 lg:h-screen">
      <div className="bg-blue-100 p-8 flex flex-col justify-center box-border">
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl mb-7 text-blue-600">Weather</h1>
        <ul className="flex flex-col justify-center">
          <li className="flex border border-black rounded-md shadow-slate-950 shadow-md p-3 md:p-5 mb-3 justify-between items-center bg-blue-200">
            <div>
              <div className="font-extrabold text-xl text-blue-400">Casius</div>
              <div className="text-xs text-blue-500">Mars, 12AM</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="mr-3 text-2xl text-blue-300">Icon</div>
              <div className="text-2xl font-extrabold text-blue-600">85도</div>
            </div>
          </li>
          <li className="flex border border-black rounded-md shadow-slate-950 shadow-md  p-3 md:p-5 mb-3 justify-between items-center bg-blue-400">
            <div>
              <div className="font-extrabold text-xl text-blue-800">Casius</div>
              <div className="text-xs text-blue-500">Mars, 12AM</div>
            </div>
            <div className="flex">
              <div className="mr-3 text-2xl text-blue-300">Icon</div>
              <div className="text-2xl font-extrabold text-blue-600">85도</div>
            </div>
          </li>
          <li className="flex border border-black rounded-md shadow-slate-950 shadow-md  p-3 md:p-5 mb-3 justify-between items-center bg-blue-600">
            <div>
              <div className="font-extrabold text-xl text-blue-400">Casius</div>
              <div className="text-xs text-blue-500">Mars, 12AM</div>
            </div>
            <div className="flex">
              <div className="mr-3 text-2xl text-blue-300">Icon</div>
              <div className="text-2xl font-extrabold text-blue-400">85도</div>
            </div>
          </li>
          <li className="flex border border-black rounded-md shadow-slate-950 shadow-md  p-3 md:p-5 mb-3 justify-between items-center bg-blue-800">
            <div>
              <div className="font-extrabold text-xl text-blue-400">Casius</div>
              <div className="text-xs text-blue-500">Mars, 12AM</div>
            </div>
            <div className="flex">
              <div className="mr-3 text-2xl text-blue-300">Icon</div>
              <div className="text-2xl font-extrabold text-blue-600">85도</div>
            </div>
          </li>
        </ul>
        <div className="flex justify-center items-center mt-5">
          <div className="text-blue-600 bg-blue-300 rounded-full w-14 h-14 flex items-center justify-center">+</div>
        </div>
      </div>
      <div className="bg-red-100 p-8 h-auto flex flex-col justify-center items-center relative">
        <div className="absolute flex items-center justify-center p-5 text-white bg-red-400 rounded-full w-8 h-8 left-3 top-3">
          x
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-sm text-red-400 mb-3">SIMPLE TAG</div>
          <div className="text-2xl font-extrabold text-center mb-5 text-red-700 text-nowrap">
            Work with besyellow <br /> designers
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-10 w-full">
          <div className="p-12 bg-red-200 border border-black rounded-lg flex items-center justify-center text-red-800">
            Card
          </div>
          <div className="p-12 bg-red-400 border border-black rounded-lg flex items-center justify-center text-red-800">
            Card
          </div>
          <div className="p-12 bg-red-600 border border-black rounded-lg flex items-center justify-center text-red-800">
            Card
          </div>
          <div className="p-12 bg-red-800 border border-black rounded-lg flex items-center justify-center text-red-300">
            Card
          </div>
        </div>
        <div className="bg-red-400 p-5 border border-black rounded-lg w-full flex items-center justify-center text-white font-extrabold">
          Let`s get it done
        </div>
      </div>
      <div className="bg-yellow-100 p-8 h-auto flex flex-col justify-center items-center relative">
        <div className="absolute left-5 top-4 font-semibold text-lg bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center">
          x
        </div>
        <div className="mb-5 text-2xl font-extrabold text-yellow-600">Friends</div>
        <input
          type="text"
          placeholder="Search with love..."
          className="mb-3 py-3 px-5 w-full placeholder:text-yellow-600 bg-yellow-300"
        />
        <ul className="w-full">
          <li className="w-full border border-black p-3 flex  justify-between items-center mb-3 bg-yellow-500 rounded-lg">
            <div className="flex items-center">
              <div className="mr-3 w-5 p-5 bg-yellow-300 rounded-full"></div>
              <div>
                <div className="font-extrabold text-yellow-800">Bill Rizer</div>
                <div className="text-sm text-yellow-300">Planet Designer</div>
              </div>
            </div>
            <div className="p-2 bg-yellow-700 text-white text-xs border border-black rounded-xl">Invite</div>
          </li>
          <li className="w-full border border-black p-3 flex  justify-between items-center mb-3 bg-yellow-500 rounded-lg">
            <div className="flex items-center">
              <div className="mr-3 w-5 p-5 bg-yellow-300 rounded-full"></div>
              <div>
                <div className="font-extrabold text-yellow-800">Bill Rizer</div>
                <div className="text-sm text-yellow-300">Planet Designer</div>
              </div>
            </div>
            <div className="p-2 bg-yellow-700 text-white text-xs border border-black rounded-xl">Invite</div>
          </li>
          <li className="w-full border border-black p-3 flex  justify-between items-center mb-3 bg-yellow-500 rounded-lg">
            <div className="flex items-center">
              <div className="mr-3 w-5 p-5 bg-yellow-300 rounded-full"></div>
              <div>
                <div className="font-extrabold text-yellow-800">Bill Rizer</div>
                <div className="text-sm text-yellow-300">Planet Designer</div>
              </div>
            </div>
            <div className="p-2 bg-yellow-700 text-white text-xs border border-black rounded-xl">Invite</div>
          </li>
          <li className="w-full border border-black p-3 flex  justify-between items-center mb-3 bg-yellow-500 rounded-lg">
            <div className="flex items-center">
              <div className="mr-3 w-5 p-5 bg-yellow-300 rounded-full"></div>
              <div>
                <div className="font-extrabold text-yellow-800">Bill Rizer</div>
                <div className="text-sm text-yellow-300">Planet Designer</div>
              </div>
            </div>
            <div className="p-2 bg-yellow-700 text-white text-xs border border-black rounded-xl">Invite</div>
          </li>
          <li className="w-full border border-black p-3 flex  justify-between items-center mb-3 bg-yellow-500 rounded-lg">
            <div className="flex items-center">
              <div className="mr-3 w-5 p-5 bg-yellow-300 rounded-full"></div>
              <div>
                <div className="font-extrabold text-yellow-800">Bill Rizer</div>
                <div className="text-sm text-yellow-300">Planet Designer</div>
              </div>
            </div>
            <div className="p-2 bg-yellow-700 text-white text-xs border border-black rounded-xl">Invite</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
