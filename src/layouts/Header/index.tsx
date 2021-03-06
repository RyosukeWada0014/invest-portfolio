import { FC } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Index",
  },
  { href: "/piechart", label: "円グラフ" },
  { href: "/barchart", label: "線グラフ" },
];

export const Header: FC = () => {
  return (
    <header className="flex justify-center items-center h-24 w-full">
      {NAV_ITEMS.map((item, index) => {
        return (
          <Link href={item.href} key={index.toString()}>
            <a className="inline-block text-xl p-3 mx-2 hover:text-blue-600 active:text-blue-600">
              {item.label}
            </a>
          </Link>
        );
      })}
    </header>
  );
};
