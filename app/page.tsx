import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href={"/static"}>Static</Link>
        </li>
        <li>
          <Link href={"/client"}>Client</Link>
        </li>

        <li>
          <Link href={"/server"}>sever</Link>
        </li>

        <li>
          <Link href={"/parallel"}>parallel</Link>
        </li>
        <li>
          <Link href={"/sequential"}>sequential</Link>
        </li>
      </ul>
    </>
  );
}
