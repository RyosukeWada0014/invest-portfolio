import type { NextPage } from "next";
import Link from "next/link";
import { Line } from "react-chartjs-2";

const LineCart: NextPage = () => {
  return (
    <div>
      <div className="h-96 w-96 mx-auto">
        <Line
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={50}
          width={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <Link href="/">
        <a>戻る</a>
      </Link>
    </div>
  );
};

export default LineCart;
