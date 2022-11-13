import React, { useEffect, useState } from "react"
import { Ipokimon } from "../../../types/types"
// interface  pokemon { name: string; age?: number; id?: string; url?: string };
import "./Card.css"
const Card = (pokemon: any) => {
  function addLeadingZeros(num:number, totalLength:number) {
    return String(num).padStart(totalLength, '0');
  }
    return ({pokemon} && 
      <div className="card">
        <p className="pokiId">#{addLeadingZeros(pokemon.id,3)}</p>
        {pokemon && <img className="pokiImg" src={pokemon.sprites.front_default} alt={pokemon.name}/>}
        <h1>{pokemon.name}</h1>
      </div>
    )
    
}

export default Card


