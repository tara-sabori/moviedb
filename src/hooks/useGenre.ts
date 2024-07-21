import axios from "axios";
import { useEffect, useState } from "react";

interface List{
    id:number;
    name:string;
}

const UseGenre = () => {
   const [list,setList]=useState<List[]>([]);

   useEffect(() => {
    axios.get<List[]>("https://moviesapi.ir/api/v1/genres")
    .then(res=>setList(res.data))
   }, []);

   return {list};
}

export default UseGenre;
