import { useEffect } from "react";


export  const useDarkMode=(theme)=>{
    const element = document.documentElement;
    const darkQury = window.matchMedia("(prefers-color-scheme:dark)");
    const onWindowMatch = () => {
      if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQury.matches)) {
        element.classList.add("dark")
      } else {
        element.classList.remove("dark")
      }
    }
    
    useEffect(() => {
      switch (theme) {
        case "dark":
          element.classList.add("dark");
          localStorage.setItem(`theme`, `dark`)
          console.log(theme);
          break;
        case "light":
          element.classList.remove("dark");
          localStorage.setItem(`theme`, `light`)
          console.log(theme);
          break;
        default:
          localStorage.removeItem(`theme`);
          onWindowMatch();
          break;
      }
    }, [theme]);
    darkQury.addEventListener("change", (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          element.classList.add("dark")
        } else {
          element.classList.remove("dark")
        }
      }
    })
}

