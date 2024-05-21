function Navbar() {
  const Social = {
    FaceBook: {
      herf: "#",
    },

    LinkedIn: {
      herf: "#",
    },

    Instagram: {
      herf: "#",
    },

    Youtube: {
      herf: "#",
    },

    Discord: {
      herf: "#",
    },
  };

  return (
    <nav className=" text-amber-50 h-[3.5rem]  bg-gray-700 z-[100] flex justify-between items-center px-12 fixed w-full  select-none top-0 left-0">
      <a className="flex relative  " href="#" target="_blank">
        <h1>Resume Builder</h1>
      </a>

      <div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center gap-4">
            <a
              href={Social.Youtube.herf}
              target="_blank"
              className="text-sm p-2 hover:bg-gray-500/40 duration-300 rounded-full font-semibold leading-6 text-gray-200 flex items-center gap-2"
            >
              <svg
                className="h-5 w-5"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 461.001 461.001"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    style={{ fill: "white" }}
                    d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
