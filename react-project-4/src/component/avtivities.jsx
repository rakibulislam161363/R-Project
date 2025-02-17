

function Avtivities() {
  const activities = [
    {
      manimg: 'man.png',
      names: 'Leslie sakho',
      country: 'Canada, toronto',
      rating: 'rating.png',
      tarik: '09/11/2023',
      p1: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      p2: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      active: 'active1.png',
      link: 'Discover',
    },
    {
      manimg: 'man.png',
      names: 'Chris macari',
      country: 'Singapour',
      rating: 'rating.png',
      tarik: '14/09/2023',
      p1: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      p2: 'The lorem ipsum is, in printing.',
      active: 'active2.png',
      link: 'Discover',
    },
    {
      manimg: 'man.png',
      names: 'Jojo alba',
      country: 'Kuala lumpur',
      rating: 'rating.png',
      tarik: '28/09/2023',
      p1: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      p2: 'The lorem ipsum is, in printing.',
      active: 'active3.png',
      link: 'Discover',
    },
  ];
  return (
    <section className="mx-10 mt-20 p-4 relative">
      <h1 className="text-3xl font-semibold">Recents avtivitiesc</h1>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
        {activities.map((items, index) => (
          <div key={index} className="bg-[#F8F8F8] rounded-2xl p-2">
            {/* man section */}
            <div className="flex gap-6 items-center pl-3">
              <img className="w-6 h-7" src={items.manimg} alt="" />
              <div className="">
                <h1>{items.names}</h1>
                <h3 className="text-[#8A8A8A]">{items.country}</h3>
              </div>
            </div>
            {/* rating section */}
            <div className="mt-10 gap-3 flex">
              <img src={items.rating} alt="" />
              <h1>{items.tarik}</h1>
            </div>
            {/* paragraph section */}
            <div className="pt-8">
              <p className="text-[#5E5E5E] text-xs">{items.p1}</p>
              <p className="text-[#5E5E5E] text-xs pt-3">{items.p2}</p>
            </div>
            {/* img section */}
            <div>
              <img className="mt-10 mb-5" src={items.active} alt="" />
              <a className="underline" href="">
                {items.link}
              </a>
            </div>
          </div>
        ))}
        <button className="bg-[#FFFFFF] p-3 rounded-full hover:bg-amber-100 absolute right-0 top-[50%] bottom-0 h-14 hidden lg:flex">
          <img src="right.png" alt="" />
        </button>
      </div>
    </section>
  );
}

export default Avtivities;
