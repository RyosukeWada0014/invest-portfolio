import { FC, ReactNode } from "react";
import { Header } from "src/layouts/Header";

type Props = {
  children: ReactNode;
};

export const AppLayout: FC<Props> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
