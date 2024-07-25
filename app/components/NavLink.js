import Link from "next/link";

function NavLink({ href, title })
{
  return (
    <Link href={href} className="block py-2 pl-5 pr-5 text-xl rounded-full hover:bg-[#2EA8C8]">{title}</Link>
);
};

export default NavLink;