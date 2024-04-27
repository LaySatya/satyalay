import { useEffect, useState } from "react";

function DarkMode() {
    const [mode , setMode] = useState("dark");
    const element = document.documentElement;
    const options = [
        {
            icon: "sunny",
            text: "light",
        },
        {
            icon: "moon",
            text: "dark",
        },
    ]
    function handleModeTheme(text){
        setMode(text);
    }
    useEffect(()=>{
        switch(mode){
            case "dark":
                element.classList.remove("dark");
                break;
            case "light":
                element.classList.add("dark");
                break;
            default:
                element.classList.remove("dark");
                break;
        }
    }, [mode])
  return (
    <div className="mt-12 w-[95%] rounded-lg dark:bg-slate-800 bg-slate-50 mx-auto dark:text-white text-gray-800">
      <h1 className="text-[45px] font-medium text-center">Dark Mode</h1>
      <div className="w-[7rem] bg-slate-200 dark:bg-slate-700 mx-auto h-12 flex justify-center rounded-md mt-8">
        {
           options.map((opt , index) => (
                <button onClick={()=> handleModeTheme(opt.text)} key={opt.text} 
                className={`p-2 px-3 m-1 text-xl rounded-md ${mode === opt.text && "text-sky-500 bg-slate-500" }`}>
                    <ion-icon name={opt.icon}></ion-icon>
                </button>
           ))
        }
      </div>
      <div>
        <h1 className="text-center mt-5 text-3xl">Let talk about React JS</h1>
        <p className="m-12 text-md">
          <b className="text-2xl">React</b> has been designed from the start for gradual adoption, and you
          can use as little or as much React as you need. Whether you want to
          get a taste of React, add some interactivity to a simple HTML page, or
          start a complex React-powered app, the links in this section will help
          you get started. Online Playgrounds If you’re interested in playing
          around with React, you can use an online code playground. Try a Hello
          World template on CodePen, CodeSandbox, or Stackblitz. If you prefer
          to use your own text editor, you can also download this HTML file,
          edit it, and open it from the local filesystem in your browser. It
          does a slow runtime code transformation, so we’d only recommend using
          this for simple demos. Add React to a Website You can add React to an
          HTML page in one minute. You can then either gradually expand its
          presence, or keep it contained to a few dynamic widgets. Create a New
          React App When starting a React project, a simple HTML page with
          script tags might still be the best option. It only takes a minute to
          set up! As your application grows, you might want to consider a more
          integrated setup. There are several JavaScript toolchains we recommend
          for larger applications. Each of them can work with little to no
          configuration and lets you take full advantage of the rich React
          ecosystem. Learn how. Learn React People come to React from different
          backgrounds and with different learning styles. Whether you prefer a
          more theoretical or a practical approach, we hope you’ll find this
          section helpful. <br/>

        </p>
        <button className="mb-5 p-3 bg-blue-400 rounded-md ml-12 text-white hover:scale-105 hover:opacity-90">Learn more</button>
        
      </div>
    </div>
  );
}
export default DarkMode;
