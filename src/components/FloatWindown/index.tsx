import { type } from '@testing-library/user-event/dist/type';
import * as C from './styles';

type Props  = {
  id: number,
  name: string,
  image: string,
  types: any[],
  abilities: any[],
  stats: {
      hp: number,
      attack: number,
      defense: number,
      spcAttack: number,
      spcDefense: number,
      speed: number
  },
  height: number,
  weight: number,
  description: string,
  onClick: () => void
}

export const PokeFloat = ({ id, name, image, types, abilities, stats, height, weight, description, onClick}: Props) => {
    return (
      <C.Container>          
        <div className="top-section">
          <div className="left-side">
            <img src={image} alt="..." />
          </div>
          <div className="right-side">
            <div className="poke-float-details">
              <div className='details-top'>
                <span className='board number'>
                    <span>Pokemon:</span>
                    <span>#{id}</span>
                </span>
                <span className='board'>
                    <b>{name}</b>
                </span>

                {types.length === 1 &&
                  <span className='board types'>
                      <span 
                          className={`type-item ${types[0]}`} 
                          style={{background: `var(--${types[0]})`}}>{types[0]}
                      </span>                        
                  </span>
                }
                  
                {types.length === 2 &&
                    <span className='board types'>
                        <span 
                            className={`type-item ${types[0]}`} 
                            style={{background: `var(--${types[0]})`}}>{types[0]}
                        </span>     
                        <span 
                            className={`type-item ${types[1]}`} 
                            style={{background  : `var(--${types[1]})`}}>{types[1]}
                        </span>     
                  </span>
                }
                <div className="board h-and-w">
                  <span><b>Height: </b>{height} m</span>
                  <span><b>Weight: </b>{weight} kg</span>
                </div>
              </div>
              <div className="stats">
                <div className="s-item">
                  <div className="s-item-box">
                    {stats.hp > 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.hp}%`, backgroundColor: 'orange'}}></div>
                    }
                    {stats.hp <= 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.hp}%`}}></div>
                    }  
                  </div>
                  <div className="s-item-name">HP<br />({stats.hp})
                  </div>
                </div>
                <div className="s-item">
                  <div className="s-item-box">
                    {stats.attack > 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.attack}%`, backgroundColor: 'orange'}}></div>
                    }
                    {stats.attack <= 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.attack}%`}}></div>
                    }  
                  </div>
                  <div className="s-item-name">Attack<br />({stats.attack})</div>
                </div>
                <div className="s-item">
                  <div className="s-item-box">
                    {stats.defense > 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.defense}%`, backgroundColor: 'orange'}}></div>
                    }
                    {stats.defense <= 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.defense}%`}}></div>
                    }  
                  </div>
                  <div className="s-item-name">Defense<br />({stats.defense})</div>
                </div>
                <div className="s-item">
                  <div className="s-item-box">
                    {stats.spcAttack > 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.spcAttack}%`, backgroundColor: 'orange'}}></div>
                    }
                    {stats.spcAttack <= 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.spcAttack}%`}}></div>
                    }
                  </div>
                  <div className="s-item-name">Spc Atk.<br />({stats.spcAttack})</div>
                </div>
                <div className="s-item">
                  <div className="s-item-box">
                    {stats.spcDefense > 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.spcDefense}%`, backgroundColor: 'orange'}}></div>
                    }
                    {stats.spcDefense <= 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.spcDefense}%`}}></div>
                    }  
                  </div>
                  <div className="s-item-name">Spc Def.<br />({stats.spcDefense})</div>
                </div>
                <div className="s-item">
                  <div className="s-item-box">
                    {stats.speed > 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.speed}%`, backgroundColor: 'orange'}}></div>
                    }
                    {stats.speed <= 100 &&
                      <div className="s-item-box-bar" style={{height: `${stats.speed}%`}}></div>
                    }                        
                  </div>
                  <div className="s-item-name">Speed<br />({stats.speed})</div>
                </div>
              </div>
            </div>
          </div>

          </div>
          <div className="bottom-section">
            <span className="close" onClick={() => {onClick()}}>❌ Fechar</span>
          </div>            
        </C.Container>
    );
}