import { Player } from "./player"
import { Poll } from "./poll"

class Mission {
    players: Player[]
    suceeds_needed: number
    polls: Poll[]
}

export { Mission }