import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-2">
        <HeaderItem title={"home"} Icon={HomeIcon} />
        <HeaderItem title={"trending"} Icon={LightningBoltIcon} />
        <HeaderItem title={"verified"} Icon={BadgeCheckIcon} />
        <HeaderItem title={"collections"} Icon={CollectionIcon} />
        <HeaderItem title={"search"} Icon={SearchIcon} />
        <HeaderItem title={"account"} Icon={UserIcon} />
      </div>

      <Image
        className="object-contain"
        src={"/Hulu_Logo.png"}
        width={100}
        height={50}
      />
    </header>
  );
};

export default Header;
