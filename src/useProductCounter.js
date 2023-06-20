// TODO
import {useState} from "react";
export default function useProductCounter(){
    const[count, setCount] = useState(0);

    function increment(){
        setCount(prev=>prev+1);
    }

    function decrement(){
        setCount(prev=>{
            if(prev>0)
                return prev-1;
            return 0;
        });
    }
    return {increment, decrement, count};
}