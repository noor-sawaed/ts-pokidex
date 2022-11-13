import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { PokiDetails } from "../../../types/pokemondetails"
import "./details.css"
interface pokiType{
  "slot": number,
  "type": {
    "name": string,
    "url": string
  }
}

const Details = () => {
  const pokiState = useLocation()
  const { pokemon }: any = pokiState.state
  const finPoki: PokiDetails = pokemon
  const [finpokiDisc, setFinpokiDisc] = useState<any>()
  const [TotalStat, setTotalStat] = useState<number>(0)
  function addLeadingZeros(num: number, totalLength: number) {
    return String(num).padStart(totalLength, "0")
  }

  useEffect(() => {
    fetchDisc(finPoki.species.url)
    calcTotal()
  })

  const calcTotal = () => {
    let total = 0
    finPoki.stats.map((stats) => (total += stats.base_stat))
    setTotalStat(total)
  }

  const fetchDisc = async (url: string) => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      setFinpokiDisc(json)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="BigPokiContainter">
      <div className="leftDiv">
        <div className="pokiId2">#{addLeadingZeros(finPoki.id, 3)}</div>
        {finPoki && (
          <img
            className="pokiImg2"
            src={finPoki.sprites.front_default}
            alt={finPoki.name}
          />
        )}
        <div className="pokiName">{finPoki.name}</div>
        <div className="pokiTypes">
          {finPoki.types.map((type:pokiType) => <div className={type.type.name+" typesCard"}>{type.type.name}</div>)}
        </div>
      </div>
      <div className="borderLine"></div>
      <div className="rightDiv">
        <div className="disc">
          <h1 className="header">Discription</h1>
          <p className="disc-panel">
            {finpokiDisc && finpokiDisc.flavor_text_entries[0].flavor_text}
          </p>
        </div>
        <div className="statsDiv">
          <h2 className="header">Stats</h2>
          <div className="stats">
            {finPoki.stats.map((perStat) => (
              <p className="perStat">
                {perStat.stat.name}: {perStat.base_stat}{" "}
              </p>
            ))}
            <p className="perStat">Total: {TotalStat}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
