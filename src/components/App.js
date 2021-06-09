import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";
const items = [
  { title: "What is React?", content: "A front end" },
  { title: "What is React2?", content: "A front end2" },
  { title: "What is React3?", content: "A front end3" },
];
const options = [
  { label: "The color Red", value: "red" },
  { label: "The color Green", value: "green" },
  { label: "The color Blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <React.Fragment>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </React.Fragment>
  );
};
