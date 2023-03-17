import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
export const appVer = [

    {
        id: 'name',
        title: "name",
        level: "CheckMan"

    }
    ,
    {
        id: 'version',
        title: "version",
        level: "V 1.0"

    },
    {
        id: "Madeby",
        title: "Made by",
        level: <Link className="bg-gray-400 p-1 rounded-md hover:bg-sky-400 " to={`https://sobhanhadikhah.netlify.app`} >Sobhan Hadikhah</Link>,
    },


    {
        id: "status",
        title: "status",
        level: "stable"
    }

    ,
    {
        id: "repository",
        title: "repository",
        level: "stable"
    }
    ,
    {
        id: "github",
        title: "src",
        level: <Link className="underline decoration-sky-500 hover:text-sky-700" to={`https://github.com/sobhanhadikhah/toDoList/tree/stable`} >GitHub  </Link>
    }


]