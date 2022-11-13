import React, { useEffect, useState } from "react"
import Card from "../../shared/card/Card"
import { allPokimon, Ipokimon } from "../../../types/types"
import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState<allPokimon>([])
  const [nextUrl, setNextUrl] = useState<string>("")
  const [searchName, setsearchName] = useState<string>("")

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon"
    fetchData(url)
  }, [])

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url)
      const json = await response.json()

      json.results.forEach((element: any) => {
        fetchPoki(element.url)
      })
      if (json.next !== "") {
        setNextUrl(json.next)
      } else {
        setNextUrl("")
      }
    } catch (error) {
      console.log("error", error)
    }
  }
  async function fetchPoki(url: string) {
    try {
      const response = await fetch(url)
      const json = await response.json()
      setPokemonsList((allPokemons) => [...allPokemons, json])
    } catch (error) {
      console.log(error)
    }
  }

  const loadMore = async () => {
    await fetchData(nextUrl)
  }

  const fetchAllRelatedPoke = async () => {
    setPokemonsList([])
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1200"
      )
      const json = await res.json()
      json.results.forEach((element: any) => {
        if (element.name.match(searchName)) fetchPoki(element.url)
      })
    } catch (error) {console.log(error)}
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          id="search-box"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setsearchName(e.currentTarget.value)
          }
        />
        <input
          type="button"
          value="Search"
          id="search-btn"
          onClick={fetchAllRelatedPoke}
        />
      </div>
      <div className="pokiGrid">
        {pokemonsList &&
          pokemonsList.map((pokemon: any) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                state={{ pokemon: pokemon }}
                to={"/details/" + pokemon.id}
              >
                <Card {...pokemon} key={pokemon.id} />
              </Link>
            )
          })}
      </div>
      {nextUrl && (
        <button className="loadMore-btn" onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  )
}

export default Home
