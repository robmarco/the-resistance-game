import { GameConfiguration } from './game_configuration';
import { GameState } from './game_state';
import { Player } from './player';
import { User } from './user';

class Game {
  id: number;
  name: string;
  host: User;
  created_at: number;
  players: Player[];
  configuration: GameConfiguration;
  state: GameState;
}

export { Game };
