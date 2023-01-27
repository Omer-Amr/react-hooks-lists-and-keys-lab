import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElement = links.map((li)=>{
    return <a key={li} href={'#'+li}>{li}</a>
  })
  return <nav>{linksElement}</nav>;
}

export default NavBar;
