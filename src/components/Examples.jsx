import TabButton from "./TabButton.jsx";
import React from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples() {
    const [ selectedTopic, setSelectedTopic] = React.useState();
    function handleSelect(topic) {
      setSelectedTopic(topic);
      //console.log("Hello");
    }

    return (
        <Section title="Examples" id="examples">
          {/* <h2>Examples</h2> */}
          <Tabs 
            buttons = {
            <>
                <TabButton onSelect={() => handleSelect('components')} isActive={selectedTopic === "components"}>Components</TabButton>
                <TabButton onSelect={() => handleSelect('jsx')} isActive={selectedTopic === "jsx"}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect('props')} isActive={selectedTopic === "props"}>Props</TabButton>
                <TabButton onSelect={() => handleSelect('state')} isActive={selectedTopic === "state"}>State</TabButton>
            </>}

            ButtonWrapper = "menu">

                {(selectedTopic) ? <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                        {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                    </div> : "Please Select a topic..."}
          </Tabs>
              

        </Section>
    );
}