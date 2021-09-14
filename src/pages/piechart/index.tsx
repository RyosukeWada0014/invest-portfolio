import { NextPage } from "next";
import Link from "next/link";

const PieChart: NextPage = () => {
  return (
    <div>
      <div>pie Chart</div>
      <Link href="/">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default PieChart;
