function Head() {
  return (
    <div className="flex justify-between p-4">
      <Head1 />
      <Head2 />
      <Head3 />
    </div>
  );
}

function Head1() {
  return (
    <div className="mt-2">
      <h1 className="text-slate-300 text-xl">LOGO</h1>
    </div>
  );
}

function Head2() {
  return (
    <div className="mt-2">
      <ul className="flex text-slate-500">
        <li className="mx-2 cursor-pointer">Home</li>
        <li className="mx-2 cursor-pointer">Articles</li>
        <li className="mx-2 cursor-pointer">Pricing</li>
        <li className="mx-2 cursor-pointer">About</li>
        <li className="mx-2 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}

function Head3() {
  return (
    <div className="text-sl">
      <button className="bg-zinc-100 text-slate-500 mx-2 p-2 rounded">
        Log In
      </button>
      <button className="bg-slate-800 text-slate-200  p-2 rounded">
        Start Free Trial
      </button>
    </div>
  );
}
export default Head;
