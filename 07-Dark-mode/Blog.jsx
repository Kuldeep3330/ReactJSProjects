import React, { useContext } from 'react'
import Title from './Title'
import Button from './Button'
import { ThemeContext } from './context/theme-context'

const Blog = () => {
    const {theme, changeTheme}=useContext(ThemeContext);
  return (
    <div className='container p-1'>
        <Title text={`My Blog with ${theme} Theme`}/>
        <span style={{position:"absolute", top:10, right:10}}>
            <Button text={theme==='dark'?'Light':'Dark'} 
            btnClass={`${theme==='dark' && 'btn-light'} btn-sm`}
            onClick={changeTheme}/>
            </span>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis incidunt cupiditate impedit, error rerum qui aspernatur exercitationem architecto odio ipsam. Sed explicabo rem, nulla, commodi dicta pariatur hic deserunt harum beatae in fugiat impedit, aliquid numquam. Officiis corrupti voluptas eius qui, earum, quas amet eveniet dignissimos quo consectetur velit cupiditate voluptates nulla non maxime ipsa molestias recusandae accusantium! Dignissimos omnis error officia beatae, totam optio velit aspernatur cum minima perspiciatis, voluptatibus enim accusantium! Quisquam, aliquid.
            </p>
    </div>
  )
}

export default Blog