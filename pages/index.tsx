import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
     return (
          <>
               <Head>
                    <title>DLifeStyle | Coming soon</title>
               </Head>
               <main className="flex items-center px-5 justify-center h-screen flex-col w-screen bg-gradient-to-br bg-primary-300 via-gray-300 to-white">
                    <h6 className="text-2xl font-semibold">
                         <span className="text-gray-900">DLifestyle -</span>
                         <br />
                         <span className="text-white">
                              Traveller's Community, <br /> Holidays & Much More.
                         </span>
                    </h6>
                    <h1 className="text-5xl uppercase font-bold text-gray-100 my-5">Someting new is coming!</h1>
                    <p className="text-gray-500">Follow me on instagram - www.instagram.com/abc123</p>
               </main>
          </>
     );
};

export default Home;
