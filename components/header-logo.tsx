import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/Logo2.png" alt="logo" height={58} width={58} />
                <p className="font-semibold text-white text-2xl ml-2.5">
                    Personal Finance
                </p>
            </div>
        </Link>
    )
}