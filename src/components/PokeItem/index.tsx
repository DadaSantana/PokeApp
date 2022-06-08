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
    onClick: (e: number) => void
}

export const PokeItem = ({ id, name, image, types, abilities, stats, height, weight, description, onClick}: Props) => {
    return (
        <C.Container>
            <img src={image} alt={name} />
            <div className='pokeDetails'>
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
                </div>
                <div className='details-bottom'>
                    <span className='board view' onClick={() => {onClick(id - 1)}}>Ver Mais</span>
                </div>          
            </div>
        </C.Container>
    );
}