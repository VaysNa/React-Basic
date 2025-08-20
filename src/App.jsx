import { Component, useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/tabButton";
import { EXAMPLES } from "./data";

// komponen induk y
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent = "silahkan klik a button";

  function handleSelect(selectedButton) {
    // selectedButton => "components", "jsx", "props", "state"
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  console.log("App Component rendering.. ");

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
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* cara pake method map */}
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
            {/* cara manual mengakses datanya satu2 ke props sebagai value */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            /> */}
            {/* alternatif pake spread operator agar penulisan syntaxnya lebih pendek. either way, works */}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
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
      </main>
    </>
  );
}

export default App;
