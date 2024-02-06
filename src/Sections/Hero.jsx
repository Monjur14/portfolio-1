
const Hero = () => {
  
  return (
    <div className="w-full h-screen bg-black ">
      <nav className="w-full max-w-[1200px] m-auto py-5 flex justify-between items-center">
        <img src="logo.svg" alt="" className="w-40 logo" />
        <ul className="text-white flex gap-6 text-lg font-semibold">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="contain flex items-center flex-col md:flex-row gap-5">
        <div className="basis-1/2  w-full border-white mt-16">
        <div className="flex flex-col -space-y-24 sm:-space-y-20 -mt-12  border-white">
        <svg className="svg1">
		        <text x="0px" y="50%" dy=".35em" className="text1">
			        Hi, I am
		        </text>
	      </svg>
        <svg className="svg2">
		        <text x="0px" y="50%" dy=".35em" className="text2">
			        Monjur Hossen
		        </text>
	      </svg>
        <svg className="svg3">
		        <text x="0px" y="50%" dy=".35em" className="text3">Frontend Web
		        </text>
	      </svg>
        <svg className="svg4">
		        <text x="0px" y="50%" dy=".35em" className="text4">
			      Developer
		        </text>
	      </svg>
        </div>
        </div>
        <p></p>
        <div className="basis-1/2">
          <div className="w-full  bg-white"></div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
