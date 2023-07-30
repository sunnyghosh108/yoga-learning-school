import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react";


const useMenu = () => {
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://b7a12-summer-camp-server-side-sunnyghosh108.vercel.app/menu');
            return res.json();
        }
    })
  
    return [menu, loading, refetch]
  }

export default useMenu;