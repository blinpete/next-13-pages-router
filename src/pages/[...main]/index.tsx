import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();

  if (router.asPath.includes("deprecated")) {
    router.replace("/404");
  }

  return <div>Main page</div>;
}
