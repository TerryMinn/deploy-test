import "./style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const StaggersDemo = () => {
  useGSAP(() => {
    gsap.from(".card", {
      scale: 0,
      ease: "elastic.out(1,1)",
      stagger: 0.06,
    });
  });

  return (
    <main>
      <header className="nav">
        <a href="/">
          <img src="/logo.svg" alt="logo" />
        </a>
        <a href="https://jsmastery.com/all-courses" target="_blank">
          GSAP Course
        </a>
      </header>

      <div className="wrapper">
        <img className="card card-1" src="/stagger-demo/img1.jpg" />
        <img className="card card-2" src="/stagger-demo/img2.jpg" />
        <img className="card card-3" src="/stagger-demo/img3.jpg" />
        <img className="card card-4" src="/stagger-demo/img4.jpg" />
        <img className="card card-5" src="/stagger-demo/img5.jpg" />
      </div>

      <script type="module" src="./script.js"></script>
    </main>
  );
};

export default StaggersDemo;
