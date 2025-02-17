

function Feedback() {
  const feed = [
    {
      img: 'feedback.png',
      header:
        'MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business',
      para: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      button: 'Explore MyFeedback business',
    },
  ];
  return (
    <section className="bg-[#F2F2F2] mt-20">
      <div>
        {feed.map(items => (
          <div key={items} className="md:flex justify-center mx-24 p-5 gap-15">
            {/* left */}
            <div className="pt-10">
              <h1 className="text-2xl font-semibold">{items.header}</h1>
              <p className="text-[14px] mt-[20px] text-[#5E5E5E]">
                {items.para}
              </p>
              <button className="bg-black text-white px-10 p-2 rounded-full mt-10">{items.button}</button>
            </div>
            {/* right */}
            <div>
              <img className="md:w-[612px] lg:h-[300px] pt-4 " src={items.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
