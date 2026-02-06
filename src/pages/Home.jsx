import React from "react";

const Home = () => {
  const courses = [
    {
      href: "pages/01a_your-first-animation/index.html",
      img: "cover1.png",
      title: "Your First Animation",
      desc: "Learn how to create your first animation with GSAP",
    },
    {
      href: "pages/01b_challenge/index.html",
      img: "cover2.png",
      title: "Basic Challenge",
      desc: "Practice your skills by creating a pulsing glow animation",
    },
    {
      href: "pages/02a_understanding-properties/index.html",
      img: "cover3.png",
      title: "Understanding Properties",
      desc: "Learn how GSAP interprets and animates different types of properties to create visually rich motion.",
    },
    {
      href: "pages/02b_understanding-methods/index.html",
      img: "cover4.png",
      title: "Understanding Methods",
      desc: "Learn how to control GSAP animations using built-in methods to create complex motion sequences.",
    },
    {
      href: "pages/03a_power-easing/index.html",
      img: "cover5.png",
      title: "Power Easing",
      desc: "Learn how Power Easing in GSAP offers progressively stronger acceleration and deceleration for snappier or smoother motion control.",
    },
    {
      href: "pages/04a_sine-easing/index.html",
      img: "cover6.png",
      title: "Sine Easing",
      desc: "Learn how Sine Easing in GSAP creates smooth, natural motion by mimicking the curve of a sine wave",
    },
    {
      href: "pages/05a_back-easing/index.html",
      img: "cover7.png",
      title: "Back Easing",
      desc: "Learn how Back Easing in GSAP creates motion that briefly overshoots before settling, adding a dynamic, elastic feel to animations.",
    },
    {
      href: "pages/06a_bounce-easing/index.html",
      img: "cover8.png",
      title: "Bounce Easing",
      desc: "Learn how Bounce Easing in GSAP simulates realistic bouncing effects by mimicking gravity and collision dynamics.",
    },
    {
      href: "pages/07a_elastic-easing/index.html",
      img: "cover9.png",
      title: "Elastic Easing",
      desc: "Learn how Elastic Easing in GSAP produces spring-like motion with dramatic overshoot and recoil for high-energy animations.",
    },
    {
      href: "pages/08a_expo-easing/index.html",
      img: "cover10.png",
      title: "Expo Easing",
      desc: "Learn how Expo Easing in GSAP creates dramatic animations that accelerate or decelerate exponentially for a powerful impact.",
    },
    {
      href: "pages/09a_apple-dock/index.html",
      img: "cover11.png",
      title: "Apple Dock",
      desc: "Learn how to recreate Apple Dock–style animations in GSAP using a mix of easing functions for smooth, responsive, and playful motion.",
    },
    {
      href: "pages/10a_learn-to/index.html",
      img: "cover12.png",
      title: "Learn Gsap To",
      desc: [
        "Learn how ",
        "gsap.to()",
        " lets you animate any property to a desired value with full control over timing, easing, and callbacks.",
      ],
    },
    {
      href: "pages/10b_challenge-to/index.html",
      img: "cover13.png",
      title: "Gsap To Challenge",
      desc: [
        "Put your skills to the test by using ",
        "gsap.to()",
        " to create a multi-property, interactive animation with custom easing and sequencing.",
      ],
    },
    {
      href: "pages/11a_learn-from/index.html",
      img: "cover14.png",
      title: "Learn Gsap From",
      desc: [
        "Learn how ",
        "gsap.from()",
        " animates elements from a starting state to their current state, ideal for entrance animations.",
      ],
    },
    {
      href: "pages/11b_challenge-from/index.html",
      img: "cover15.png",
      title: "Gsap From Challenge",
      desc: [
        "Put your skills to the test by creating engaging entrance animations using ",
        "gsap.from()",
        " to reveal elements with flair.",
      ],
    },
    {
      href: "pages/12a_learn-fromto/index.html",
      img: "cover16.png",
      title: "Learn Gsap fromTo",
      desc: [
        "Learn how ",
        "gsap.fromTo()",
        " gives you precise control by defining both the start and end states of an animation explicitly.",
      ],
    },
    {
      href: "pages/12b_challenge-fromto/index.html",
      img: "cover17.png",
      title: "Gsap fromTo Challenge",
      desc: [
        "Put your skills to the test by building a precise animation using ",
        "gsap.fromTo()",
        ", defining both start and end states.",
      ],
    },
    {
      href: "pages/13a_learn-set/index.html",
      img: "cover18.png",
      title: "Learn Gsap Set",
      desc: [
        "Learn how ",
        "gsap.set()",
        " instantly applies property values without animation, perfect for setup, state resets, or quick style tweaks.",
      ],
    },
    {
      href: "pages/13b_challenge-set/index.html",
      img: "cover19.png",
      title: "Gsap Set Challenge",
      desc: [
        "Put your skills to the test by using ",
        "gsap.set()",
        " to initialize animation states, and control visibility.",
      ],
    },
    {
      href: "pages/14a_learn-timeline/index.html",
      img: "cover20.png",
      title: "Gsap Timeline",
      desc: [
        "Learn how ",
        "gsap.timeline()",
        " lets you sequence multiple animations with precise control over timing, overlap, and orchestration.",
      ],
    },
    {
      href: "/pages/15_staggers-demo",
      img: "cover20.png",
      title: "Gsap staggers",
      desc: [
        "Learn ",
        "staggers",
        ", a special property that spaces out the starting time of animations across multiple elements automatically.",
      ],
    },
    {
      href: "pages/16_preloader-timeline-demo/index.html",
      img: "cover20.png",
      title: "Preloader Timeline",
      desc: [
        "Learn ",
        "staggers",
        ", a special property that spaces out the starting time of animations across multiple elements automatically.",
      ],
    },
    {
      href: "pages/17_first-scroltrigger-demo/index.html",
      img: "cover20.png",
      title: "First ScrollTrigger Animation",
      desc: [
        "Learn how ",
        "ScrollTrigger",
        " brings animations to life on scroll, triggering motion when elements enter the viewport with precise start positions and smooth sequencing.",
      ],
    },
    {
      href: "pages/18_apple-scrub-marquee-demo/index.html",
      img: "cover20.png",
      title: "ScrollTrigger Scrub",
      desc: [
        "Learn how ",
        "Scrub",
        " brings animations to life on scroll, syncing motion to the scrollbar with precise start positions and smooth, natural sequencing.",
      ],
    },
  ];

  return (
    <main>
      <header className="nav">
        <a href="/">
          <img src="logo.svg" alt="logo" />
        </a>
        <a href="https://jsmastery.com/all-courses" target="_blank">
          GSAP Course
        </a>
      </header>

      <section className="container">
        <h1>The Ultimate GSAP Course Workshop</h1>

        <ul>
          {courses.map((course, i) => (
            <li key={i}>
              <a href={course.href}>
                <img src={course.img} alt="animation-cover" />
                <div>
                  <h3>{course.title}</h3>
                  <p>
                    {Array.isArray(course.desc) ? (
                      <>
                        {course.desc[0]}
                        <code>{course.desc[1]}</code>
                        {course.desc[2]}
                      </>
                    ) : (
                      course.desc
                    )}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
