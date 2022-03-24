import Link from 'next/link';
import Head from 'next/head'


const imgURL = "https://purecous.s3.us-east-2.amazonaws.com/3.jpg"

const Main = () => (  
  
<div className="overflow-auto bg-cover" style={{backgroundImage: `url(${imgURL})`,}}>
<Head>
        <title>Nick Achee</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" /> <meta property="og:Nick Achee" content="Who is Nick?" key="Nick Achee" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💡</text></svg>" />

      </Head>
<div className="pt-2">
  <h1 className="pt-40 text-4xl text-center font-prag font-bold text-white flex fixed w-screen justify-center items-center">Nick Achee</h1>
<div className="flex items-center justify-center h-screen ">
  <div className="border-2 border-black m-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-black font-prag text-lg px-6 py-3 font-bold rounded-sm hover:transition duration-700 hover:text-white hover:bg-black">
    <Link href="//susanchase.com">
    <a>Real Estate<span aria-hidden="true" className="ml-2" role="img">🏡</span></a>
    </Link>
  </div>
  <div className="border-2 border-black m-4 bg-white text-black font-prag text-lg px-6 py-3 font-bold rounded-sm transform hover:transition duration-700 hover:text-white hover:bg-black hover:scale-125">
    <Link href="//nickachee.xyz">
    <a>Digital Strategy <span aria-hidden="true" className="ml-1.5" role="img">🎯</span></a>
    </Link>
  </div>
</div>
</div>
</div>
);


export default Main; 