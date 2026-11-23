import React from "react";
import {
  IconChevronDoubleLeft,
  IconChevronDoubleRight,
  ViewButton,
  ViewButtonProps,
  ViewPanel,
  ViewSlider,
  ViewOptions,
  ViewSwitch,
} from "@tolokoban/ui";

export default function Demo() {
  const [variant, setVariant] = React.useState<ViewButtonProps["variant"]>("elevated");
  const handleVariantChange = (value: ViewButtonProps["variant"]) => {
    setVariant(value);
    // Reset the thickness to the default of the new variant.
    setThickness(undefined);
  };
  const [colorBase, setColorBase] = React.useState<
    "neutral" | "primary" | "secondary" | "tertiary"
  >("primary");
  const [colorLevel, setColorLevel] = React.useState<
    "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  >("5");
  const [enabled, setEnabled] = React.useState(true);
  const [waiting, setWaiting] = React.useState(false);
  const [leftIcon, setLeftIcon] = React.useState(false);
  const [rightIcon, setRightIcon] = React.useState(false);
  const [textAlign, setTextAlign] = React.useState<ViewButtonProps["textAlign"]>("center");
  const [thickness, setThickness] = React.useState<number | undefined>(undefined);
  const [borderRadius, setBorderRadius] = React.useState(0.125);
  return (
    <div>
      <ViewPanel display="flex" flexDirection="column" gap="S">
        <ViewOptions label="Button variant" value={variant} onChange={handleVariantChange}>
          <div key="elevated">elevated</div>
          <div key="filled">filled</div>
          <div key="outlined">outlined</div>
          <div key="text">text</div>
        </ViewOptions>
        <ViewOptions label="Color base" value={colorBase} onChange={setColorBase}>
          <div key="neutral">neutral</div>
          <div key="primary">primary</div>
          <div key="secondary">secondary</div>
          <div key="tertiary">tertiary</div>
        </ViewOptions>
        <ViewOptions label="Color level" value={colorLevel} onChange={setColorLevel}>
          <div key="1">1</div>
          <div key="2">2</div>
          <div key="3">3</div>
          <div key="4">4</div>
          <div key="5">5</div>
          <div key="6">6</div>
          <div key="7">7</div>
          <div key="8">8</div>
          <div key="9">9</div>
        </ViewOptions>
        <ViewOptions label="Text align" value={textAlign} onChange={setTextAlign}>
          <div key="left">left</div>
          <div key="center">center</div>
          <div key="right">right</div>
        </ViewOptions>
        <ViewPanel display="grid" gridTemplateColumns="auto 1fr" gap="S" alignItems="center">
          <div>Thickness:</div>
          <ViewSlider
            value={thickness ?? 0}
            onChange={setThickness}
            min={0}
            max={0.5}
            step={0.025}
            text={() => (thickness === undefined ? "default" : `${thickness}em`)}
            wide
          />
          <div>Border radius:</div>
          <ViewSlider
            value={borderRadius}
            onChange={setBorderRadius}
            min={0}
            max={2}
            step={0.125}
            text={(v) => `${v}em`}
            wide
          />
        </ViewPanel>
        <ViewPanel display="flex" justifyContent="space-between" flexWrap="wrap">
          <ViewSwitch value={enabled} onChange={setEnabled}>
            Enabled
          </ViewSwitch>
          <ViewSwitch value={leftIcon} onChange={setLeftIcon}>
            Left icon
          </ViewSwitch>
          <ViewSwitch value={rightIcon} onChange={setRightIcon}>
            Right icon
          </ViewSwitch>
          <ViewSwitch value={waiting} onChange={setWaiting}>
            Waiting
          </ViewSwitch>
        </ViewPanel>
        <hr />
        <ViewPanel display="grid" gridTemplateColumns="92px 2fr 1fr" gap="M">
          <ViewButton
            variant={variant}
            enabled={enabled}
            waiting={waiting}
            icon={leftIcon ? IconChevronDoubleLeft : undefined}
            iconRight={rightIcon ? IconChevronDoubleRight : undefined}
            color={`${colorBase}-${colorLevel}`}
            textAlign={textAlign}
            thickness={thickness}
            borderRadius={borderRadius}
            onClick={() => alert("You dared... Unbelivable!!!")}
          >
            Click me, if you dare!
          </ViewButton>
          <div>
            <ViewButton
              variant={variant}
              enabled={enabled}
              waiting={waiting}
              icon={leftIcon ? IconChevronDoubleLeft : undefined}
              iconRight={rightIcon ? IconChevronDoubleRight : undefined}
              color={`${colorBase}-${colorLevel}`}
              textAlign={textAlign}
              thickness={thickness}
              borderRadius={borderRadius}
              onClick="#/view"
            >
              Click me, if <big>you</big> dare!
            </ViewButton>
          </div>
          <ViewButton
            variant={variant}
            enabled={enabled}
            waiting={waiting}
            icon={leftIcon ? IconChevronDoubleLeft : undefined}
            iconRight={rightIcon ? IconChevronDoubleRight : undefined}
            color={`${colorBase}-${colorLevel}`}
            textAlign={textAlign}
            thickness={thickness}
            borderRadius={borderRadius}
            onClick="#/view"
          >
            Click me, if <big>you</big> dare!
          </ViewButton>
        </ViewPanel>
      </ViewPanel>
    </div>
  );
}
