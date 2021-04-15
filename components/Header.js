import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Logo>
          <Link href="/">Job Board</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <Nav />
      </div>
    </header>
  );
}

const Logo = styled.h1`
  font-size: 3rem;
`;
