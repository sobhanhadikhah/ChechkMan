import { useEffect } from "react";
export const useTitle = (title)=>{
        useEffect(()=>{
            document.title = `toDO | ${title}`
        },[title])
}