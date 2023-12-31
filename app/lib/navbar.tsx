import Link from "next/link";

export default function Navbar() {


    return(
        <nav>
          <Link href="/">Home</Link>
          <Link href="/semester/1">1</Link>
          <Link href="/semester/2">2</Link>
          <Link href="/semester/3">3</Link>
          <Link href="/semester/4">4</Link>
          <Link href="/semester/5">5</Link>
          <Link href="/semester/6">6</Link>
          <Link href="/semester/7">7</Link>
          <Link href="/semester/8">8</Link>
        </nav>
    );

}