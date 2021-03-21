import * as React from "react";
import Campaigns from "../campaigns";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props: React.PropsWithChildren<IHomeProps>) => {
  return (
    <>
      <div className="navMargin"> </div>
      <Campaigns />
    </>
  );
};

export default Home;
