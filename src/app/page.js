import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home Page</div>
      <Link href="/GetDataInDB"> GetDataInDB </Link>
      <br />
      <Link href="/AddDataInDB"> AddDataInDB </Link>
    </>
  );
}
