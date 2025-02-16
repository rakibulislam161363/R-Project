import { NavLink } from 'react-router-dom';

function NavLast() {
  const NavData =
    [
      {
        img: 'one.png',
        title: 'All',
        link: '/All',
      },
      {
        img: 'two.png',
        title: 'Restaurants',
        link: '/Restaurants',
      },
      {
        img: 'three.png',
        title: 'Hotels',
        link: '/Hotels',
      },
      {
        img: '/four.png',
        title: 'Home services',
        link: '/HomeServices',
      },
      {
        img: 'five.png',
        title: 'Shopping',
        link: '/Shopping',
      },
      {
        img: '/six.png',
        title: 'Car location',
        link: '/CarLocation',
      },
      {
        img: 'saven.png',
        title: 'Beauty & Spa',
        link: '/Beauty&Spa',
      },
      {
        img: 'eight.png',
        title: 'Park',
        link: '/Park',
      },
      {
        img: 'nine.png',
        title: 'museum',
        link: '/museum',
      },
      {
        img: 'ten.png',
        title: 'Car wash',
        link: '/CarWash',
      },
      {
        img: 'eleven.png',
        title: 'Bars',
        link: '/Bars',
      },
      {
        img: 'twelve.png',
        title: 'Gyms',
        link: '/Gyms',
      },
    ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:flex justify-center xl:grid-cols-12 px-4 pt-5 items-center xl:gap-8 mx-auto gap-5 container md:gap-5 ">

      {NavData.map((items, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center"
        >
          <NavLink
            to={items.link}
            className={'flex flex-col items-center justify-center mx-auto'}
          >
            <img className="text-[#1677BD]" src={items.img} alt="" />
            <h1 className="">{items.title}</h1>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default NavLast;
