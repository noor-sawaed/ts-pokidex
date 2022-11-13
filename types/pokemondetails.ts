export interface PokiDetails {
    "abilities": [],
    "base_experience": number,
    "forms": [],
    "game_indices": [],
    "height": number,
    "held_items": [],
    "id": number,
    "is_default": boolean,
    "location_area_encounters": string,
    "moves": [],
    "name": string,
    "order": number,
    "past_types": [],
    "species": {
        "name": string,
		"url": string
    },
    "sprites": {
        "back_default": string,
        "back_female": null,
        "back_shiny": string,
        "back_shiny_female": null,
        "front_default": string,
        "front_female": null,
        "front_shiny": string,
        "front_shiny_female": null,
        "other": {
            "dream_world": {
                "front_default": string,
                "front_female": null
            },
            "home": {
                "front_default": string,
                "front_female": null,
                "front_shiny": string,
                "front_shiny_female": null
            },
            "official-artwork": {
                "front_default": string
            }
        },
        "versions": {
            "generation-i": string
            "red-blue": {
                "back_default": string,
                "back_gray": string,
                "back_transparent": string,
                "front_default": string,
                "front_gray": string,
                "front_transparent": string
            },
            "yellow": {
                "back_default": string,
                "back_gray": string,
                "back_transparent": string,
                "front_default": string,
                "front_gray": string,
                "front_transparent": string
            }
        },
        "generation-ii": {
            "crystal": {
                "back_default": string,
                "back_shiny": string,
                "back_shiny_transparent": string,
                "back_transparent": string,
                "front_default": string,
                "front_shiny": string,
                "front_shiny_transparent": string,
                "front_transparent": string
            },
            "gold": {
                "back_default": string,
                "back_shiny": string,
                "front_default": string,
                "front_shiny": string,
                "front_transparent": string
            },
            "silver": {
                "back_default": string,
                "back_shiny": string,
                "front_default": string,
                "front_shiny": string,
                "front_transparent": string
            }
        },
        "generation-iii": {
            "emerald": {
                "front_default": string,
                "front_shiny": string
            },
            "firered-leafgreen": {
                "back_default": string,
                "back_shiny": string,
                "front_default": string,
                "front_shiny": string
            },
            "ruby-sapphire": {
                "back_default": string,
                "back_shiny": string,
                "front_default": string,
                "front_shiny": string
            }
        },
        "generation-iv": {
            "diamond-pearl": {
                "back_default": string,
                "back_female": null,
                "back_shiny": string,
                "back_shiny_female": null,
                "front_default": string,
                "front_female": null,
                "front_shiny": string,
                "front_shiny_female": null
            },
            "heartgold-soulsilver": {
                "back_default": string,
                "back_female": null,
                "back_shiny": string,
                "back_shiny_female": null,
                "front_default": string,
                "front_female": null,
                "front_shiny": string,
                "front_shiny_female": null
            },
            "platinum": {
                "back_default": string,
                "back_female": null,
                "back_shiny": string,
                "back_shiny_female": null,
                "front_default": string,
                "front_female": null,
                "front_shiny": string,
                "front_shiny_female": null
            }
        },
        "generation-v": {
            "black-white": {
                "animated": {
                    "back_default": string,
                    "back_female": null,
                    "back_shiny": string,
                    "back_shiny_female": null,
                    "front_default": string,
                    "front_female": null,
                    "front_shiny": string,
                    "front_shiny_female": null
                },
                "back_default": string,
                "back_female": null,
                "back_shiny": string,
                "back_shiny_female": null,
                "front_default": string,
                "front_female": null,
                "front_shiny": string,
                "front_shiny_female": null
            }
        },
        "generation-vi": {
            "omegaruby-alphasapphire": {
                "front_default": string,
                "front_female": null,
                "front_shiny": string,
                "front_shiny_female": null
            },
            "x-y": {
                "front_default": string,
                "front_female": null,
                "front_shiny": string,
                "front_shiny_female": null
            }
        },
        "generation-vii": {
            "icons": {
                "front_default": string,
                "front_female": null
            },
            "ultra-sun-ultra-moon": {
                "front_default": string,
                "front_female": null,
                "front_shiny": string,
                "front_shiny_female": null
            }
        },
        "generation-viii": {
            "icons": {
                "front_default": string,
                "front_female": null
            }
        }
    },
    "stats": {
        "base_stat": number,
        "effort": number,
        "stat":any
    }[],
    "types": [],
    "weight": number
}
