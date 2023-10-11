function Main({ show }) {
  return (
    <div className={"text-center py-28 bg-zinc-100 " + (show && "mt-12")}>
      <h1 className="text-3xl sm:text-5xl font-bold leading-30">
        A modern way to <br></br> build websites.
      </h1>
      <p className="mt-3 sm:mt-5 text-sm sm:text-xl">
        Empower designer to build professional,custom websites
        <br></br> in a completely visual canvas with no code.
      </p>
      <button className="bg-slate-800 mt-5 text-slate-200 mx-2 p-2 rounded">
        Start Free Trial
      </button>
    </div>
  );
}

export default Main;
