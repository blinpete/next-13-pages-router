import { useRouter } from "next/router";
import Title from "./components/Title";
import Link from "next/link";

export default function Main() {
  const router = useRouter();

  if (router.asPath.includes("deprecated")) {
    router.replace("/404");
  }

  return (
    <>
      <Title>Main page</Title>
      <ul>
        <li>
          <Link href="/routes">routes</Link>
        </li>
      </ul>
    </>
  );
}
