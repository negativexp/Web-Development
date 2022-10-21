import { react } from "react";
import KUTE from "kute.js"

// components
import WelcomeSign from "./components/WelcomeSign";

function tween1() {
}


function App() {

  KUTE.fromTo(
    "#bruh",
    { path: "#bruh" },
    { path: "#bruh2" },
    { repeat: 999, duration: 5000, yoyo: true }
  ).start();

  tween1.start();
  return (
    <div className="App">
      <div class="spacer layer1 flip"></div>
      <WelcomeSign />
      <svg
        id="visual"
        viewBox="0 0 1080 100"
        width="1080"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g>
        <path
          id="bruh"
          d="M0 52L25.7 50C51.3 48 102.7 44 154.2 41.8C205.7 39.7 257.3 39.3 308.8 40.5C360.3 41.7 411.7 44.3 463 48.5C514.3 52.7 565.7 58.3 617 62.5C668.3 66.7 719.7 69.3 771.2 69.2C822.7 69 874.3 66 925.8 61.3C977.3 56.7 1028.7 50.3 1054.3 47.2L1080 44L1080 101L1054.3 101C1028.7 101 977.3 101 925.8 101C874.3 101 822.7 101 771.2 101C719.7 101 668.3 101 617 101C565.7 101 514.3 101 463 101C411.7 101 360.3 101 308.8 101C257.3 101 205.7 101 154.2 101C102.7 101 51.3 101 25.7 101L0 101Z"
          fill="#0066FF"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
        </g>
        <g>
        <path
        id="bruh2"
          d="M0 31L25.7 38.2C51.3 45.3 102.7 59.7 154.2 59.8C205.7 60 257.3 46 308.8 37.8C360.3 29.7 411.7 27.3 463 30.2C514.3 33 565.7 41 617 48.2C668.3 55.3 719.7 61.7 771.2 62.5C822.7 63.3 874.3 58.7 925.8 56.5C977.3 54.3 1028.7 54.7 1054.3 54.8L1080 55L1080 101L1054.3 101C1028.7 101 977.3 101 925.8 101C874.3 101 822.7 101 771.2 101C719.7 101 668.3 101 617 101C565.7 101 514.3 101 463 101C411.7 101 360.3 101 308.8 101C257.3 101 205.7 101 154.2 101C102.7 101 51.3 101 25.7 101L0 101Z"
          fill="green"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
        </g>
      </svg>
    </div>
  );
}

export default App;
