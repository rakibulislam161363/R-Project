import NavLast from "./secondnav";
function Restaurants() {
  const findResturent = [
    {
      img: 'fone.png',
      headers: 'Bottega',
      paragraps:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      rating: "rating.png",
      numbur: "5.0 (876 reviews)",
    },
    {
      img: 'ftwo.png',
      headers: 'Bottega',
      paragraps:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      rating: "rating.png",
      numbur: "5.0 (876 reviews)",
    },
    {
      img: 'fthree.png',
      headers: 'Bottega',
      paragraps:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      rating: "rating.png",
      numbur: "5.0 (876 reviews)",
    },
    {
      img: 'ffour.png',
      headers: 'Bottega',
      paragraps:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      rating: "rating.png",
      numbur: "5.0 (876 reviews)",
    },
    
  ];
  return (
    <div>
      <NavLast />
      <div className="bg-[#1677BD] mt-10 p-4 mx-5 rounded-2xl relative">
        <h1 className="text-2xl text-white mx-4">
          Find the best restaurant ratings below
        </h1>
        <div className="bg-[#1677BD] mt-6 flex justify-around  rounded-2xl container mx-1">
          {/* left button */}
          <button className="bg-[#FFFFFF99] h-14 top-44 bottom-44 absolute left-2 p-3 rounded-full hover:bg-amber-100 z-10">
            <img className="" src="left.png" alt="" />
          </button>
          <div className="flex rounded-2xl gap-5 mx-3 bg-[#1677BD]">
            {findResturent.map((items, index) => (
              <div key={index} className="gap-4">
                <div className="relative">
                  <img className="" src={items.img} alt="" />
                  <div className="absolute bottom-2 left-0 right-0 mx-auto flex justify-center gap-1">
                    <button className="w-2 h-2 rounded-full bg-white"></button>
                    <button className="w-2 h-2 rounded-full bg-white"></button>
                    <button className="w-2 h-2 rounded-full bg-white"></button>
                    <button className="w-2 h-2 rounded-full bg-white"></button>
                  </div>
                </div>
                <div className="bg-white rounded-2xl px-2 mt-[-20px] pt-5">
                  <h1 className="text-xl font-semibold">{items.headers}</h1>
                  <p className="text-xs text-[#8F8F8F] leading-3.5">
                    {items.paragraps}
                  </p>
                  <div className="flex items-center gap-2 mt-3 pb-4 text-xs">
                    <img className="h-5 w-25" src={items.rating} alt="" />
                    <h2>{items.numbur}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* right button */}
          <button className="bg-[#FFFFFF99] p-3 rounded-full h-14 top-44 bottom-44 absolute right-2 hover:bg-amber-100">
            <img src="right.png" alt="" />
          </button>
        </div>
        {/* small button */}
        <div className="flex mx-auto gap-1 mt-3 justify-center">
          <button className="w-2 h-2 rounded-full bg-white"></button>
          <button className="w-2 h-2 rounded-full bg-white"></button>
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
