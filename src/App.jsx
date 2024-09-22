import "./App.css";
import Button from "./Components/Button";
import ImagePageCard from "./Components/ImagePageCard";
import Navbar from "./Components/Navbar";
import Secondnav from "./Components/Secondnav";
import { MdArrowOutward } from "react-icons/md";
import VideoPageCard from "./Components/VideoPageCard";
import HalfImageCard from "./Components/HalfImageCard";

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

const videoCardsData = [
  {
    heading : "Explore more features in ChatGPT",
    subHeading : "Type, talk, and use it your way",
    para : "With ChatGPT, you can type or start a voice conversation by tapping the headphone icon in the mobile app. ",
    src : "../src/assets/video01.mp4",
  },
  {
    heading:"",
    subHeading:"Browse the web",
    para: "ChatGPT can answer your questions using its vast knowledge and with information from the web.",
    src:"../src/assets/video02.mp4"
  },
  {
    heading:"",
    subHeading:"Analyze data and create charts",
    para: "Upload a file and ask ChatGPT to help analyze data, summarize information or create a chart. ",
    src:"../src/assets/video03.mp4"
  },
]
const ImageCarddata = [
  {
    subHeading:"Talk about an image",
    para: "Take or upload an image and ask ChatGPT about it.",
    src:"../src/assets/3a.webp"
  },
  {
    subHeading:"Customize ChatGPT for work, daily tasks or inspiration with GPTs",
    para: "​​Explore the GPT store and see what others have made. ChatGPT Plus users can also create their own custom GPTs. ",
    src:"../src/assets/3b.webp"
  },
  {
    subHeading:"Create images",
    para: "​Ask ChatGPT to create images using a simple sentence or detailed paragraph. ",
    src:"../src/assets/3c.webp"
  },
  {
    subHeading:"Apple & ChatGPT",
    para: "At WWDC in June 2024, we announced a partnership with Apple to integrate ChatGPT into experiences within iOS, iPadOS, and macOS.",
    src:"../src/assets/3d.webp"
  },

]

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
      {/* <VideoPageCard/> */}
      {videoCardsData.map((items,index)=>{
        return(
          <VideoPageCard key={index} videoCards={items}/>
        )
      })}
      {ImageCarddata.map((items,index)=>{
        return <HalfImageCard ImageData={items} />
      })}
    </>
  );
}

export default App;
