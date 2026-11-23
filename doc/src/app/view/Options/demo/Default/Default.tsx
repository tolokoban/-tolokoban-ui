import React from "react";
import { ViewButton, ViewOptions, ViewPanel } from "@tolokoban/ui";

export default function Demo() {
  const [animal, setAnimal] = React.useState("M");
  const [value, setValue] = React.useState("M");
  const [format, setFormat] = React.useState("A4");
  return (
    <>
      <ViewPanel gap="M" display="flex" alignItems="flex-end">
        <ViewOptions
          label="Select a size"
          value={value}
          onChange={setValue}
          color="secondary-4"
          colorSelection="primary-6"
          variant="chips"
        >
          <div key="XS">Extra Small</div>
          <div key="S">Small</div>
          <div key="M">Medium</div>
          <div key="L">Large</div>
          <div key="XL">Extra Large</div>
        </ViewOptions>
        <ViewOptions value={format} onChange={setFormat}>
          <div key="A5">
            A5 - <small>148×210</small>
          </div>
          <div key="A4">
            A4 - <small>210×297</small>
          </div>
          <div key="A3">
            A3 - <small>297×240</small>
          </div>
        </ViewOptions>
        <ViewButton>Submit</ViewButton>
      </ViewPanel>
      <hr />
      <ViewOptions value={animal} onChange={setAnimal}>
        <div key="Anaconda">Anaconda</div>
        <div key="Brebis">Brebis</div>
        <div key="Chacal">Chacal</div>
        <div key="Dinosaure">Dinosaure</div>
        <div key="Élephant">Élephant</div>
        <div key="Faon">Faon</div>
        <div key="Girafe">Girafe</div>
        <div key="Héron">Héron</div>
        <div key="Iguane">Iguane</div>
        <div key="Jaguar">Jaguar</div>
        <div key="Kangourou">Kangourou</div>
        <div key="Lémurien">Lémurien</div>
        <div key="Marsupilami">Marsupilami</div>
        <div key="Narval">Narval</div>
        <div key="Ornythorinx">Ornythorinx</div>
        <div key="Panthère">Panthère</div>
        <div key="Quezalcoatl">Quezalcoatl</div>
        <div key="Rhinocéros">Rhinocéros</div>
        <div key="Serpent à sonnette">Serpent à sonnette</div>
        <div key="Tamarin">Tamarin</div>
        <div key="Urubu">Urubu</div>
        <div key="Vautour">Vautour</div>
        <div key="Wapiti">Wapiti</div>
        <div key="Xérus">Xérus</div>
        <div key="Yack">Yack</div>
        <div key="Zèbre">Zèbre</div>
      </ViewOptions>
      <hr />
      <ViewOptions value={animal} onChange={setAnimal} variant="chips">
        <div key="Anaconda">Anaconda</div>
        <div key="Brebis">Brebis</div>
        <div key="Chacal">Chacal</div>
        <div key="Dinosaure">Dinosaure</div>
        <div key="Élephant">Élephant</div>
        <div key="Faon">Faon</div>
        <div key="Girafe">Girafe</div>
        <div key="Héron">Héron</div>
        <div key="Iguane">Iguane</div>
        <div key="Jaguar">Jaguar</div>
        <div key="Kangourou">Kangourou</div>
        <div key="Lémurien">Lémurien</div>
        <div key="Marsupilami">Marsupilami</div>
        <div key="Narval">Narval</div>
        <div key="Ornythorinx">Ornythorinx</div>
        <div key="Panthère">Panthère</div>
        <div key="Quezalcoatl">Quezalcoatl</div>
        <div key="Rhinocéros">Rhinocéros</div>
        <div key="Serpent à sonnette">Serpent à sonnette</div>
        <div key="Tamarin">Tamarin</div>
        <div key="Urubu">Urubu</div>
        <div key="Vautour">Vautour</div>
        <div key="Wapiti">Wapiti</div>
        <div key="Xérus">Xérus</div>
        <div key="Yack">Yack</div>
        <div key="Zèbre">Zèbre</div>
      </ViewOptions>
    </>
  );
}
