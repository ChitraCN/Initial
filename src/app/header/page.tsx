import Image from "next/image";
import Link from "next/link";

const Header = () => {



  return (
    <>
      <div className="flex w-[300] h-20 bg-blue-500">
        <Link className="m-5" href={"/"}>
          <Image
            src={"/images/star-wars.png"}
            alt="logo"
            width={100}
            height={100}
          />
       </Link>
        <Link className="ml-auto m-5" href={"/favorites"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 0 24 24"
            width="34px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Header;
