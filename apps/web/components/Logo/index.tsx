import Image from "next/image";
import logo from "../../public/tb_logo.svg";

export default function Logo() {
  return <Image src={logo} alt="Tadjh Brooks Logo" width={384} height={384} />;
}
