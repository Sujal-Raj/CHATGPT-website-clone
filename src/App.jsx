import "./App.css";
import Button from "./Components/Button";
import ImagePageCard from "./Components/ImagePageCard";
import Navbar from "./Components/Navbar";
import Secondnav from "./Components/Secondnav";
import { MdArrowOutward } from "react-icons/md";

const cards = [
  {
    text: "Writes, brainstorms, edits, and explores ideas with you",
    imgSrc: "../src/assets/01.webp",
  },
  {
    text: "Summarize meetings. Find new insights. Increase productivity.",
    imgSrc: "../src/assets/02.webp",
  },
  {
    text: "Generate and debug code. Automate repetitive tasks. Learn new APIs.",
    imgSrc: "../src/assets/03.webp",
  },
  {
    text: "Learn something new. Dive into a hobby. Answer complex questions.",
    imgSrc: "../src/assets/04.webp",
  },
];

function App() {
  return (
    <>
      {/* Firstnav  */}
      <Navbar />
      {/* Secondnav */}
      <div className="h-[8vh] flex items-center justify-between px-4">
        <Secondnav />
      </div>
      {/* Page-1-Content   */}
      <div className="Page1-content h-[60vh]">
        <div className="mt-2 pt-20 py-2 h-[90%] w-[50%] m-auto flex flex-col items-center gap-5">
          <h1>ChatGPT</h1>
          <div className="text-center font-semibold text-5xl">
            <p>Get answers. Find inspiration.</p>
            <p>Be more productive.</p>
          </div>
          <p className="w-[50%] text-center">
            Free to use. Easy to try. Just ask and ChatGPT can help with
            writing, learning, brainstorming, and more.
          </p>
          <div className="btns flex gap-5">
            <Button value="Start now" />
            <Button value="Download the app" />
          </div>
        </div>
      </div>
      {/* First-page-links  */}
      <div className="w-[50%] m-auto px-56 mb-2 ">
        <p>
          <a href="" className="flex items-center underline">
            Learn more about writing with ChatGPT <MdArrowOutward />
          </a>
        </p>
      </div>
      {/* Image-card-page  */}
      {/* 
      <ImagePageCard text="Writes, brainstorms, edits, and explores ideas with you" imgSrc="../src/assets/01.webp"/>
      <ImagePageCard text="Summarize meetings. Find new insights. Increase productivity." imgSrc="../src/assets/02.webp"/>
      <ImagePageCard text="Generate and debug code. Automate repetitive tasks. Learn new APIs." imgSrc="../src/assets/03.webp"/>
      <ImagePageCard text="Learn something new. Dive into a hobby. Answer complex questions." imgSrc="../src/assets/04.webp"/>
       */}
      {/* Doing-same-using-map-function  */}
      {cards.map((items, index) => (
        <ImagePageCard key={index} text={items.text} imgSrc={items.imgSrc} />
      ))}
      ;
    </>
  );
}

export default App;
