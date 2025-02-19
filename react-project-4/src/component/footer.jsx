



const footeritem = {
  itemss: [
    {
      title: 'About',
      item: [
        'About MyFeedback',
        'Investor Relations',
        'Trust & Safety',
        'Content Guidelines',
        'Terms of Service',
        'Privacy Policy',
        'Your Privacy Choices',
      ],
    },
    {
      title: 'MyFeedback',
      item: [
        'MyFeedback for business',
        'Collections',
        'Talk',
        'Events',
        'MyFeedback blog',
        'Support',
        'Developers',
      ],
    },
  ],
  secondtitle: [
    {
      hedar: 'Languages',
      lang: ['English', 'Bangla', 'hindi'],
    },
    {
      hedar: 'Countries',
      lang: ['Singapour', 'Bangladesh', 'india'],
    },
  ],
};

// const Footerlast = ({ title, item }) => {
//       return (
//       <div>
//         <h1>{title}</h1>
//           <ul>{item.map((allitem, index) => (
//             <li key={index}>{allitem}</li>
//           ))}</ul>
//       </div>
//      )
//     };
function Footer() {
  const { itemss, secondtitle } = footeritem;
  return (
    <footer className="mt-10 border-t-[1px] border-[#DCDCDC] mx-3 pt-10">
      <div className="md:flex md:justify-around grid grid-cols-1 justify-center mx-5">
        {itemss.map((items, inx) => (
          <div key={inx} className="space-y-2">
            <h1 className="text-2xl font-semibold mt-3">{items.title}</h1>
            <ul className="pt-4">
              {items.item.map((realli, inddx) => (
                <li className="text-[#5E5E5E]" key={inddx}>
                  {realli}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-3">
          {secondtitle.map((value, idendy) => (
            <div key={idendy}>
              <h1 className="text-xl font-semibold">{value.hedar}</h1>
              <select className="mb-5 text-[#5E5E5E]">
                {value.lang.map((langs, lanin) => (
                  <option className="text-[#5E5E5E]" key={lanin} value={langs}>
                    {langs}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-3 gap-1 items-center font-semibold">
        {/* copyright section */}
        <h1>Copyright</h1>
        <img className="h-4" src="c.png" alt="" />
        <h1>Septembre 2023 myfeedback, designed by scott</h1>
      </div>
    </footer>
  );
}

export default Footer;
