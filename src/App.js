import { useState } from "react";

import Head from "./head";
import Main from "./main";
import Body from "./body";
function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Head show={show} setShow={setShow} />
      <Main show={show} />
      <Body />
    </div>
  );
}

export default App;
