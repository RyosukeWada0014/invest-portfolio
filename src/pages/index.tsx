import type { NextPage } from "next";
import Image from "next/image";
import { Header } from "src/component/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="text-3xl h-96 text-center">資産管理や</div>
      <footer className="text-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
