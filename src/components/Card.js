import {FcLike , FcLikePlaceholder} from "react-icons/fc"
import './Card.css'
import { toast } from "react-toastify"

function Card({course ,likedCourses , setLikedCourses}){
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev) => prev.filter((cid) =>cid !== course.id))
            toast.warning("Like removed")
        }else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id])
            }else{
                setLikedCourses((prev) => [...prev , course.id])
            }
            toast.success("Liked successfully")
        }
    }
    return (
        <div className="w-[300px] bg-purple-800 rounded-md overflow-hidden card">
            <div className="relative">
                <img src= {course.image.url}></img>

                <div className="w-[30px] j-[30px] bg-white rounded-full absolute right-2 bottom-[-11px] grid place-items-center ">
                    <button onClick={clickHandler}>
                       {
                        likedCourses.includes(course.id) ? ( <FcLike fontSize="1.7rem"/>) : ( <FcLikePlaceholder fontSize="1.7rem"/>)
                       }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                   {course.description.length >100 ? (course.description.substr(0,100)) + "..." : (course.description)}
                    
                    </p>
            </div>
        </div>
    )
}

export default Card;