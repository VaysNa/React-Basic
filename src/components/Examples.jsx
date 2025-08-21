import { Component, useState } from "react";
import TabButton from "./tabButton";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent = "silahkan klik a button";

  function handleSelect(selectedButton) {
    // selectedButton => "components", "jsx", "props", "state"
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  //   console.log("App Component rendering.. ");

  // conditional rendering dengan variabel
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  // pake destructuring ambil data EXAMPLESNYA
  // if (selectedTopic) {
  //   const { title, description, code } = EXAMPLES[selectedTopic];
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{title}</h3>
  //       <p>{description}</p>
  //       <pre>
  //         <code>{code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

  return (
    <section id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
