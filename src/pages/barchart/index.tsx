import { NextPage } from "next";
import Link from "next/link";

const BarChart: NextPage = () => {
  return (
    <div>
      <div>Bar Chart</div>
      <Link href="/">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default BarChart;
