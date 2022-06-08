import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, FormEvent } from 'react';
import './App.css';
import * as C from './App.styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container  } from 'react-bootstrap';
import logo from './assets/images/PokeLogo.png'
import loading from './assets/images/PokeLoading.gif'
import * as Poke from './services/PokeJSON';
import { Pokemon } from './types/Pokemon';
import { PokeItem } from './components/PokeItem';
import { PokeFloat } from './components/FloatWindown';


 
function App() {
  const [appLoading, setAppLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [pokeStats, setPokeStats] = useState<Pokemon[]>([]);
  const [float, setFloat] = useState(false);

  useEffect(()=>{
    const getPokemons = async () => {
      setAppLoading(true);
      setPokemon(await Poke.getAllPokemons());
      setAppLoading(false);
    } 
    getPokemons()
  }, []); 


  const setPokemonFloat = async (event: any) => {
    setPokeStats(await Poke.getPokemonByIndex(pokemon[event]));
    setFloat(true);
  }

  const handleSelect = (eventKey: any, e: any) => {
    let classe = e.target.className;

    if(classe == 'carousel-control-next' || classe == 'carousel-control-next-icon') {
      const getNextPokeFloat = async () => {
        setPokeStats(await Poke.getPokemonByIndex(pokemon[pokeStats[0].id]));
        setFloat(true);
        console.log(pokeStats[0].id);
      } 
      getNextPokeFloat(); 
      
    }
    
    if(classe == 'carousel-control-prev' || classe == 'carousel-control-prev-icon') {
      const getPrevPokeFloat = async () => {
        setPokeStats(await Poke.getPokemonByIndex(pokemon[pokeStats[0].id - 2]));
        setFloat(true);
        console.log(pokeStats[0].id);
      } 
      getPrevPokeFloat(); 
    }
  };


  return (
    <C.PokeApp>
      <C.Header>
        <Container>
          <img src={logo} alt="Imagem não encontrada" />
          <span>Feito por Alex Sant'ana Santos para o Desafio Zappts</span>
        </Container>
      </C.Header>

      <C.Screen>
        {appLoading &&
          <C.LoadingApp>
            <img src={loading} alt="" />
            Aguarde, carregando...
          </C.LoadingApp>
        }


        {!appLoading && float &&         
          <C.FloatWindow>
            <Carousel variant="dark" indicators={false} interval={null} onSelect={handleSelect}>
              <Carousel.Item>              
                {pokeStats.map((item, index)=>(
                  <PokeFloat
                    key={index} 
                    image={item.image} 
                    id={item.id} 
                    name={item.name} 
                    types={item.types} 
                    abilities={item.abilities}
                    stats={item.stats}
                    height={item.height}
                    weight={item.weight}
                    description={item.description}
                    onClick={() => {setFloat(false)}}
                  />
                ))}
              </Carousel.Item>
            </Carousel>
          </C.FloatWindow>
        }

        {!appLoading && pokemon.length > 0 &&
        <C.Main>
          <Container>
{/*             <C.Search>
              <h2>Buscar por:</h2>
              <div className='searchGrid'>
                <C.SearchButton className="s-button byName">
                  <label htmlFor="sPokeName">Nome:</label>
                  <input type="text" id='insertPokeName'/>
                </C.SearchButton>
                <C.SearchButton className="s-button ">
                  <label htmlFor="sPokeNumber">Número:</label>
                  <input type="text" />
                </C.SearchButton>
                <C.SearchButton className="s-button ">
                  <label htmlFor="sPokeType">Tipo:</label>
                  <select name="" id="">
                    <option value="">Selectione um tipo</option>
                  </select>
                </C.SearchButton>
                <C.SearchButton className="s-button ">
                  <label htmlFor="sPokeAbilitie">Habilidade:</label>
                  <select name="" id="">
                    <option value="">Selecione uma habilidade</option>
                  </select>
                </C.SearchButton>
              </div>
            </C.Search> */}
            <C.PokeList className="getAllPokemons"> 
              {pokemon.map((item, index)=>(
                <PokeItem
                  key={index}
                  image={item.image} 
                  id={item.id} 
                  name={item.name} 
                  types={item.types} 
                  abilities={item.abilities}
                  stats={item.stats}
                  height={item.height}
                  weight={item.weight}
                  description={item.description}
                  onClick={setPokemonFloat}
                />                
              ))}
            </C.PokeList>
          </Container>
        </C.Main>          
        }    
  

      </C.Screen>
    </C.PokeApp>
  );
}

export default App;
