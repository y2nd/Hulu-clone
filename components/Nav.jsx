import requests from "../utils/requests";

const Nav = () => {
  return (
    <nav className="relative">
      <ul className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <li
              key={key}
              className="cursor-pointer transition duration-200 transform hover:scale-125 hover:text-white active:text-red-500"
            >
              {title}
            </li>
          );
        })}
      </ul>
      <div className="absolute top-0 right-0 w-1/12 h-full bg-gradient-to-l from-[#06202A] "/>
    </nav>
  );
};

export default Nav;
