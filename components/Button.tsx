import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

console.log("start sleep");
await sleep();
console.log("end sleep");
export const Button = (props: JSX.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
    />
  );
};
