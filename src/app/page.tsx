import Image from "next/image";
import soon from "../../public/soon.svg";
export default function Home() {
  return (
    <div>
     <Image src={soon} alt="Comming Soon" className="h-screen w-screen object-fit" />
    </div>
  );
}
