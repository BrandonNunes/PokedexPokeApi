import axios from "axios";
import {useState, useEffect } from "react";

export  default function Pokedex(){
    const [pokemon, setPokemon] = useState([])
    const [result, setResult] = useState([])
    const [currentUrl,setCurrentUrl] =useState(`https://pokeapi.co/api/v2/pokemon/`)
    const [nextPage,setNextPage] = useState('')
    const [previousPage, setPreviousPage] = useState('')
    const [loading, setLoading] = useState()
   //optional fetch... 
//     function getAllPokemons(){    
//      fetch(`https://pokeapi.co/api/v2/pokemon`)
//     .then(response=>response.json())
//     .then(data=>setPokemon(data))
// }
  
useEffect(()=>{
    setLoading(false)
axios.get(currentUrl)
.then(res=>{
    setLoading(true)
    setPokemon(res.data)
    setResult(res.data.results)
    setNextPage(res.data.next)
    setPreviousPage(res.data.previous)
})
},[pokemon])


const next=()=>{
    setCurrentUrl(nextPage)
}
const previous=()=>{
    if(previousPage==null){
        return null
    }else{
        setCurrentUrl(previousPage)
    }
}


    return(
        <>
            <div className='pokeList'>
                <ul>
                    {loading?'Loading...':result.map(p=><li key={p.id}>{p.id}{p.name}</li>)}
           </ul>
               <div className='buttons'>
                <button onClick={()=>previous()} >Prev</button>
                <button onClick={()=>next()} >Next</button>
              </div>
             
          </div>
        </>
    )
}
