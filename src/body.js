import img1 from "./img/data1.jpg";
import img2 from "./img/html.png";
import img3 from "./img/nextjs3.webp";
import img4 from "./img/react.webp";
function Body() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-zinc-400">
        We share our thoughts on design
      </h1>
      <Bodyimg />
    </div>
  );
}

function Bodyimg() {
  return (
    <div className="flex mt-6 justify-between mx-4 flex-wrap">
      <div className="sm:w-1/5 w-5/12 mb-7">
        <img src={img1} width="100%" className=" h-40" />
        <p className="text-sm  mt-3">
          Redesigning my site increased sales by over 400% in one week.
        </p>
        <p className="mt-2 text-sm text-slate-500">Jul 1,2009</p>
      </div>
      <div className="sm:w-1/5  w-5/12 mb-7">
        <img src={img2} width="100%" className="h-40" />
        <p className="text-sm  mt-3">
          Redesigning my site increased sales by over 400% in one week.
        </p>
        <p className="mt-2 text-sm text-slate-500">Jul 1,2009</p>
      </div>
      <div className="sm:w-1/5  w-2/5 mb-7 ">
        <img src={img3} width="100%" className="h-40" />
        <p className="text-sm  mt-3">
          Redesigning my site increased sales by over 400% in one week.
        </p>
        <p className="mt-2 text-sm text-slate-500">Jul 1,2009</p>
      </div>
      <div className="sm:w-1/5  w-2/5 mb-7">
        <img src={img4} width="100%" className="h-40" />
        <p className="text-sm  mt-3">
          Redesigning my site increased sales by over 400% in one week.
        </p>
        <p className="mt-2 text-sm text-slate-500">Jul 1,2009</p>
      </div>
    </div>
  );
}
export default Body;
