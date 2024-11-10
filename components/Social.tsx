import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/rozy97" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/firmansyah-rozy-387332197" },
]

const Social = ({containerStyles, iconStyles}: {containerStyles: string, iconStyles: string}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social