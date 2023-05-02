import React from 'react';
import { ImFacebook, ImGithub, ImLinkedin} from "react-icons/im"
export default function Socials() {
  return(
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li><a href="https://www.facebook.com/juhn.kim" target="_blank">
          <ImFacebook />
          </a>
          </li>
        <li><a href="https://github.com/Juhniel" target="_blank">
          <ImGithub />
          </a>
          </li>
        <li><a href="https://www.linkedin.com/in/juhn-kim-7872a5251/" target="_blank">
          <ImLinkedin />
          </a>
          </li>
      </ul>
    </div>
  )
}
