import Image from "next/image";
import soon from "../../public/big.png";
export default function Home() {
  return (
    <div className="">
     <Image src={soon} alt="Comming Soon" className="h-screen w-screen" />
    </div>
  );
}
