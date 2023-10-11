function Head({ show, setShow }) {
  return (
    <div className="sm:flex justify-between p-4">
      <Head1 show={show} setShow={setShow} />
      <Head2 show={show} />
      <Head3 show={show} />
    </div>
  );
}

function Head1({ show, setShow }) {
  function handleshow() {
    setShow((show) => !show);
    console.log(show);
  }
  return (
    <div className="mt-3 cursor-pointer ">
      <h1
        className="text-slate-300 text-xl hover:text-slate-600"
        onClick={handleshow}
      >
        LOGO
      </h1>
    </div>
  );
}

function Head2({ show }) {
  return (
    <div className={"mt-3 sm:block " + (show ? "block" : "hidden")}>
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

function Head3({ show }) {
  return (
    <div
      className={
        "text-sl sm:block mt-2 float-right " + (show ? "block" : "hidden")
      }
    >
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
