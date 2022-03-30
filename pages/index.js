import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'


const imgURL = "https://purecous.s3.us-east-2.amazonaws.com/3.webp"

const Main = () => (  
  
<div className="overflow-auto bg-cover" style={{backgroundImage: `url(${imgURL})`,}}>
<Head>
        <title>Nick Achee</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" /> <meta property="og:Nick Achee" content="Who is Nick?" key="Nick Achee" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💡</text></svg>" />

      </Head>
<div className="pt-2">
  <h1 className="pt-40 text-4xl text-center font-prag font-bold text-white flex fixed w-screen justify-center items-center">Nick Achee</h1>
<div className="content-center flex  sm:flex items-center justify-center flex-wrap space-x-4 h-screen ">
  
<div className="p-2">
  <a class="relative inline-block text-xl font-prag font-bold text-black group active:text-black focus:outline-none focus:ring" href="https://susanchase.com/agents/nick-achee">
  <span class="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

  <span class="relative  block px-4 py-3 bg-white border-2 border-current">
    Real Estate<span aria-hidden="true" className="ml-2" role="img">🏡</span>
  </span>
</a></div><div className="p-2">
<a class="relative inline-block text-xl font-prag font-bold text-black group active:text-black focus:outline-none focus:ring" href="https://nickachee.xyz">
  <span class="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

  <span class="relative block px-4 py-3 bg-white border-2 border-current">
   Digital Strategy<span aria-hidden="true" className="ml-2" role="img">🎯</span>
  </span>
</a></div>


</div>
</div>
</div>
);


export default Main; 