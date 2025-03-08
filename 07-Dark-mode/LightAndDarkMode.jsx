import React, { createContext, useEffect, useState } from 'react'
import Blog from './Blog'
import { themes,ThemeContext } from './context/theme-context'

// const themes={
//     dark:"dark",
//     light:"light"
// }
// export const ThemeContext= createContext({})

const LightAndDarkMode = () => {
    const [theme, setTheme] = useState(themes.light);

    const changeTheme=()=>{
        setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
    }
    // let docBody = document.body.classList;
    useEffect(() => {
      switch (theme) {
        case themes.light:
          document.body.classList.remove("bg-dark");
          document.body.classList.remove("text-light");
          document.body.classList.add("bg-light");
          document.body.classList.add("text-dark");
          break;
        case themes.dark:
          document.body.classList.remove("bg-light");
          document.body.classList.remove("text-dark");
          document.body.classList.add("bg-dark");
          document.body.classList.add("text-light");
          break;
      }
    }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog />
    </ThemeContext.Provider>
  )
}

export default LightAndDarkMode