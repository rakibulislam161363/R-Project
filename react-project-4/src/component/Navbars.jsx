

export default function Navbars() {
  return (
    <>
      <section className="container mx-auto px-1 border-b-2 border-[#DCDCDC] pb-2">
        <div className="flex justify-around items-center">
          <img
            className="md:w-[100px] w-20 h-10 md:h-[49px] mt-2"
            src="Group(1).png"
            alt=""
          />

          {/* Step two */}
          <div className="border-1 border-[#ADADAD] flex items-center rounded-full h-8 lg:h-[51px] w-[100px] md:w-[400px] sm:w-[200px] lg:w-[625px] justify-between p-2 md:pl-3 overflow-hidden">
            <div className=" flex gap-5">
              <input
                className="border-none outline-none text-xs md:text-lg"
                type="text"
                placeholder="restaurant, hotel, service...."
              />
              <div className="w-[1px] pt-2 lg:mt-0 h-[19px] bg-[#7A7A7A] hidden md:flex"></div>
              <input
                className="text-[#7A7A7A] hidden md:flex border-none outline-none text-xs md:text-lg"
                type="text"
                placeholder="Singapour..."
              />
            </div>
            <div className="flex items-center">
              <button>
                <img
                  className="bg-[#1677BD] hover:bg-gray-400 hover:text-black p-1 lg:p-3 rounded-full hidden md:flex"
                  src="Vector.png"
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Step three */}
          <div className="flex gap-2 items-center">
            <img className="h-5 w-5 text-[#595959]" src="Group(2).png" alt="" />
            <button className="bg-black text-white md:p-4 p-2 rounded-full px-3 text-xs md:text-[15px] hover:bg-gray-300 hover:text-black">
              MyFeedback for business
            </button>
          </div>
        </div>
      </section>
    </>
  );
}