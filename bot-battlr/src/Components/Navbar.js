import React from "react";
import { Link } from "react-router-dom"

function Navbar(){
    return(
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <Link class="nav-link" to = "/bots"  >BotCollection</Link>
        //     <Link class="nav-link" to = "/yourbots" >Your Bot Army</Link>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class="nav-link" to ="/bots" >BotCollection</Link>
      </li>
      <li class="nav-item active">
      <Link class="nav-link" to = "/yourbots" >Your Bot Army</Link>
      </li>

    </ul>

  </div>
</nav>



        // </nav>
    )
}

export default Navbar;
