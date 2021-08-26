import React,{useState,useEffect} from 'react'
import axios from 'axios';



export default function SinglePokemon(){

    const [poke,setPoke] = useState([])
    const [nameOrId,setNameOrId] = useState(25)
    const [pokeType, setType] = useState([])

    function getPokemon(){     
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
        .then(res=>{
            setPoke(res.data) 
            setType(res.data.types[0].type.name)        
       })

    }
    
    useEffect(()=>{ getPokemon() },)
    if(nameOrId===0||nameOrId===""){
        let random = Math.floor(Math.random()*899)
        setNameOrId(random)
    }
    const colorType=()=>{
       switch(pokeType){
           case 'grass':  return '#36EB3C'
           
           case 'bug':  return 'darkgreen'
           
           case 'poison':  return '#6F4ED4'
        
           case 'steel':  return '#EEFFE6'
           
           case 'fairy':  return 'white'
           
           case 'dark':  return 'black'
           
           case 'fire':  return '#FF130B'
           
           case 'water':  return '#A8E4FF'
           
           case 'electric':  return 'yellow'
           
           default: return '#F520E0'
       }
    }

    return(
        <>
           <div>
              {nameOrId===''?" ":<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} style={{width:'150px', backgroundColor:colorType()}} className="pokeimg" alt='imagem pokemon'/>}
                <h2>{poke.name} #{nameOrId===''?'pokemon': poke.id}</h2>  
                <p>Type: <span style={{color:colorType()}}>{pokeType}</span></p>               
          </div> 
                <input  type='text' onChange={(e)=>setNameOrId(e.target.value)} />
                <button onClick={()=>getPokemon()} >Search</button>           
        </>
    )
}