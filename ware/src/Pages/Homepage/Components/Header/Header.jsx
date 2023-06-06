import React from "react";
import "./Header.css";
import Logo1 from "./Assets/logo1.png";
import Logo2 from "./Assets/logo2.png";
import { Link } from "react-router-dom";
import Drop from "./Assets/drop.svg";

export default function Header() {
  return (
    <div id="header">
      <div className="h-logos">
        <img src={Logo1} alt="logo1" />
        <img src={Logo2} alt="logo2" />
      </div>
      <div className="h-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <p>
              One Stop solution
              <br />
              for everything
            </p>
          </li>
          <li>
            <Link to="/">
              Gallery 
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
                Glimpse of our
                <br/>
                heritage and pride
            </p>

            <div class="dropdown-menu">
              <ul>
                <li>
                  <a href="#">
                    About <i class="fas fa-caret-right"></i>
                  </a>
                  <div class="dropdown-menu-1">
                    <ul>
                      <li>
                        <a href="#">News and Events</a>
                      </li>
                      <li>
                        <a href="">FAQ's</a>
                      </li>
                      <li>
                        <a href="#">Manufacturing</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">
                    Product Categorization <i class="fas fa-caret-right"></i>
                  </a>
                  <div class="dropdown-menu-1">
                    <ul>
                      <li>
                        <a href="./Pages/ProductCategorisation/Absorption.html">
                          Absorption
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/ProductCategorisation/Insulation.html">
                          Insulation
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/ProductCategorisation/Vibration.html">
                          Vibration
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/ProductCategorisation/Diffusion.html">
                          Diffusion
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">
                    Product Range <i class="fas fa-caret-right"></i>
                  </a>
                  <div class="dropdown-menu-1">
                    <ul>
                      <li>
                        <a href="./Pages/ProductRange/Ceiling.html">Ceiling</a>
                      </li>
                      <li>
                        <a href="./Pages/ProductRange/Walls.html">Walls</a>
                      </li>
                      <li>
                        <a href="./Pages/ProductRange/Floor.html">Floor</a>
                      </li>
                      <li>
                        <a href="./Pages/ProductRange/Door.html">Door</a>
                      </li>
                      <li>
                        <a href="./Pages/ProductRange/Windows.html">Windows</a>
                      </li>
                      <li>
                        <a href="./Pages/ProductRange/MovablePartitions.html">
                          Movable Partitions
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">
                    Applications <i class="fas fa-caret-right"></i>
                  </a>
                  <div class="dropdown-menu-1">
                    <ul>
                      <li>
                        <a href="./Pages/Applications/Auditoriums.html">
                          Auditorium
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/Applications/Banquet.html">
                          Banquel Halls
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/Applications/Conference.html">
                          Conference Halls
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/Applications/Disco.html">
                          Discos and Launges
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/Applications/Gymnasiums.html">
                          Gymnasiums
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/Applications/HomeTheater.html">
                          Home Theaters
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/Applications/Multipurpose.html">
                          Multi-Purpose Halls
                        </a>
                      </li>
                      <li>
                        <a href="./Pages/Applications/Office.html">Office</a>
                      </li>
                      <li>
                        <a href="./Pages/Applications/Studios.html">Studios</a>
                      </li>
                      <li>
                        <a href="./Pages/Applications/Worship.html">
                          Worship Places
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/administration">
              Administration
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Our office bearers for
              <br />
              you
            </p>
          </li>
          <li>
            <Link to="/mis-dashboard">
              MIS Dashboard
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Recent Procurement
              <br />
              information
            </p>
          </li>
          <li>
            <Link to="/finance">
              Finance
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Collaboration and
              <br />
              business opportunities
            </p>
          </li>
          <li>
            <Link to="/procurement">
              Procurement
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Collaboration and
              <br />
              business opportunities
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
