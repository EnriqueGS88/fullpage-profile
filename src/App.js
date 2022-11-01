import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Page4 from "./components/Page4";

const anchors = [ "firstPage", "secondPage", "thirdPage", "pageFour" ];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    // sectionsColor={["#7fff00","#00ffff","#29ab87", "#FFCCFF" ]}
    sectionsColor={["#CBD2FA","#F9FDFD","#E3E3E4", "#F9FDFD" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section"><h3>Page 1</h3></div>
          <div className="section"><h3>Page 2</h3></div>
          <div className="section"><h3>Page 3</h3></div>
          <Page4/>
        </div>
      );
    }}
  />
);
export default App;