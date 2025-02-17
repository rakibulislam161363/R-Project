

function Frend() {
  const friends = [
    {
      imgs: 'f1.png',
      heading: 'Arabia Nights',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r1.png',
      ratingnumber: '3.5 (334 reviews)',
    },
    {
      imgs: 'f2.png',
      heading: 'Lokma',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r2.png',
      ratingnumber: '5.0 (253 reviews)',
    },
    {
      imgs: 'f3.png',
      heading: 'The snug',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r3.png',
      ratingnumber: '4.5 (654 reviews)',
    },
    {
      imgs: 'f4.png',
      heading: 'Starbelly',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r2.png',
      ratingnumber: '5.0 (253 reviews)',
    },
    {
      imgs: 'f5.png',
      heading: 'Marafuku Ramen',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r1.png',
      ratingnumber: '3.5 (334 reviews)',
    },
    {
      imgs: 'f6.png',
      heading: 'Bottega',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r2.png',
      ratingnumber: '5.0 (253 reviews)',
    },
    {
      imgs: 'f7.png',
      heading: 'Arabia Nights',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r1.png',
      ratingnumber: '3.5 (334 reviews)',
    },
    {
      imgs: 'f8.png',
      heading: 'Bella Italia',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r2.png',
      ratingnumber: '5.0 (253 reviews)',
    },
    {
      imgs: 'f9.png',
      heading: 'Iori',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r3.png',
      ratingnumber: '4.5 (654 reviews)',
    },
    {
      imgs: 'f10.png',
      heading: 'Ngalley',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r2.png',
      ratingnumber: '5.0 (253 reviews)',
    },
    {
      imgs: 'f11.png',
      heading: 'diogonal',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r3.png',
      ratingnumber: '4.5 (654 reviews)',
    },
    {
      imgs: 'f12.png',
      heading: 'Kitoko',
      paragraph:
        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      ratingimg: 'r2.png',
      ratingnumber: '5.0 (253 reviews)',
    },
  ];
  return (
    <section className="mx-5 mt-15">
      <h1 className="text-4xl font-semibold mb-6">The latest trends</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {friends.map((items, index) => (
          <div key={index} className="gap-4">
            <div className="relative">
              <img className="" src={items.imgs} alt="" />
              <div className="absolute bottom-2 left-0 right-0 mx-auto flex justify-center gap-1">
                <button className="w-2 h-2 rounded-full bg-white"></button>
                <button className="w-2 h-2 rounded-full bg-white"></button>
                <button className="w-2 h-2 rounded-full bg-white"></button>
                <button className="w-2 h-2 rounded-full bg-white"></button>
              </div>
            </div>
            <div className="bg-white rounded-2xl px-2 mt-[-20px] pt-5">
              <h1 className="text-xl font-semibold">{items.heading}</h1>
              <p className="text-xs text-[#8F8F8F] leading-3.5">
                {items.paragraph}
              </p>
              <div className="flex items-center gap-2 mt-3 pb-4 text-xs">
                <img className="h-5 w-25" src={items.ratingimg} alt="" />
                <h2>{items.ratingnumber}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="mx-auto text-xl font-semibold flex justify-center mt-10">
        Discover more cool restaurants
      </h1>
      <button className="bg-[#1677BD] flex mx-auto justify-center text-white px-6 mt-5 p-2 rounded-full">Show more</button>
    </section>
  );
}

export default Frend;
