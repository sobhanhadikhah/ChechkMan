import {useEffect  } from 'react';

export const saveToDo=(item)=>{
    useEffect(()=>{
        localStorage.setItem('items', JSON.stringify(item));
    },[item])
}