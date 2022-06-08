import styled from 'styled-components';

export const PokeApp = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: viseble;
`;

export const Content = styled.section`
    flex: 1;
    padding: 20px 0;
`;

export const Header = styled.header`
    height: var(--headerHeight);
    background-color: var(--redColor);
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: 0 0 5px #090909;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            height: var(--logoHeight);
        }

        span {
            font-weight: bold;
            color: #f9f9f9;
        }
    }

`;

export const Screen = styled.div`
    height: calc(100vh - var(--headerHeight));
    
    .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;

        .getAllPokemons::-webkit-scrollbar {
            width: 3px;
        }
        .getAllPokemons::-webkit-scrollbar-track {
            background-color: #f9f9f9;
        }
        .getAllPokemons::-webkit-scrollbar-thumb {
            background-color: #555;
        }
    }

`;

export const Main = styled.div`
    height: calc(100vh - var(--headerHeight));
    widht: 100vw;
    padding: 30px 0;

    .container {
        
        border-top: 3px solid #CCC;
        border-bottom: 3px solid #CCC;
    }
`;

export const LoadingApp = styled.div`
    height: calc(100vh - var(--headerHeight));
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f3fcff;
    position: absolute;

    img {
        height: 100px;
        widht: 100px;
    }
`;

export const PokeList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    overflow:  auto;
    height: 100%;
    max-height: 100%;
    padding: 20px;
    padding-right: 9px;
    padding-top: 0;
`;

export const Search = styled.div`
    height: fit-content;
    widht: 100%;
    padding: 20px;

    .searchGrid {
        widht: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 20px;
    }

    .sButton {
        background-color: blue;
    }

`;

export const SearchButton = styled.div`
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;

    &:hover {
        cursor: pointer;
    }


    label {
        font-weight: bold;
        padding: 5px;
        height: 100%;
    }
     
    input, select {
        flex:1;
        height: 100%;
        border-radius: 0 5px 5px 0;
        outline: none;
        padding: 5px;
        border: 0;
    }

    select:hover {
        cursor: pointer;
    }

`;

export const Results = styled.div`
    flex: 1;
    background-color: yellow;
    height: 100%;
    widht: 100%;
    display: flex;

    

    .message {
        width: 100%;
        text-align: center;
        align-self: center;        
    }
`;

export const FloatWindow = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - var(--headerHeight));
    width: 100vw;
    background-color: rgb(56 56 56 / 70%);
`;

