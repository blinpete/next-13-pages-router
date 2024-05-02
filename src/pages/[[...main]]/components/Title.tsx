import { PropsWithChildren } from "react";

export default function Title(props: PropsWithChildren) {
  return <h1>{props.children}</h1>;
}
