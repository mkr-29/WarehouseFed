import React, { useEffect } from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../WarehouseNetwork.css";

export default function Circle() {
  const handleScrollToSection = () => {
    const element = document.getElementById("ambala-circle");
    if (element) {
      const offset = -100; // Offset from the top
      const duration = 1000; // Scroll duration in milliseconds
      scroll.scrollTo(element.offsetTop + offset, {
        duration: duration,
        smooth: true,
      });
    }
  };

  useEffect(() => {
    handleScrollToSection();
  }, []);

  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h6>Warehouse Network</h6>
        <h1>Circle Wise</h1>
        <div className="ppdf-links w-netw-links">
          <Link to="/warehouse-network/networks" onClick={handleScrollToSection}>
            Ambala Circle
          </Link>
          <ScrollLink
            to="kurukshetra-circle"
            smooth={true}
            duration={1000}
            onClick={() => scroll.scrollToTop()}
          >
            Kurukshetra Circle
          </ScrollLink>
          {/* Add more circle links here */}
        </div>
      </section>
      <Footer />
    </div>
  );
}
