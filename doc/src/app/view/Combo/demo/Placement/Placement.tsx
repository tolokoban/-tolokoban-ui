import React from "react";
import { ViewButton, ViewCombo, ViewInputText, ViewPanel } from "@tolokoban/ui";

export default function Demo() {
  const [animal, setAnimal] = React.useState("fox");
  const [name, setName] = React.useState("Foxy");
  return (
    <ViewPanel display="flex" flexDirection="column" gap="L">
      <ViewPanel display="flex" flexDirection="row" alignItems="flex-end" gap="S">
        <ViewInputText value={name} onChange={setName} />
        <ViewCombo value={animal} onChange={setAnimal} label="Hello world!">
          {makeItems()}
        </ViewCombo>
        <ViewButton thickness="1px">Save</ViewButton>
      </ViewPanel>
      <ViewPanel display="flex" flexDirection="row" justifyContent="space-between">
        <ViewCombo value={animal} onChange={setAnimal}>
          {makeItems()}
        </ViewCombo>
        <ViewCombo value={animal} onChange={setAnimal}>
          {makeItems()}
        </ViewCombo>
      </ViewPanel>
    </ViewPanel>
  );
}

function makeItems() {
  return [
    <div key="monkey">🐵 - Monkey</div>,
    <div key="dog">🐶 - Dog</div>,
    <div key="fox">🦊 - Fox</div>,
    <div key="lion">🦁 - Lion</div>,
    <div key="frog">🐸 - Frog</div>,
    <div key="crab">🦀 - Crab, the one with a very long name</div>,
    <div key="tiger">🐯 - Tiger</div>,
    <div key="koala">🐨 - Koala</div>,
  ];
}
