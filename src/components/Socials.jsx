import React from 'react';
import { ImFacebook, ImGithub, ImLinkedin} from "react-icons/im"
export default function Socials() {
  return(
    <div className='hidden xl:flex ml-24'>
      <ul>
        <li><a href="http://www.facebook.com" target="_blank">
          <ImFacebook />
          </a>
          </li>
        <li><a href="http://www.github.com" target="_blank">
          <ImGithub />
          </a>
          </li>
        <li><a href="http://www.linkedin.com" target="_blank">
          <ImLinkedin />
          </a>
          </li>
      </ul>
    </div>
  )
}
