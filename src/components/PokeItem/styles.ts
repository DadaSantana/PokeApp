import styled from "styled-components";

export const Container = styled.div`

    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 10px 0;
    display: flex;
    max-height: 200px;

    img {
        max-heith: 100%;
        max-width: 50%;
        display: flex;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        padding: 10px;   
    }

    .pokeDetails {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 0 10px;
        border-left: 1px solid #CCC;

        .board {
            padding: 5px;
            background-color: #e7e7e7;
            border-radius: 5px;
            text-align: center;
        }   

        .details-top {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .board.number {
                color: gray;
                font-weight: bold;
                font-size: 10px;
                display: flex;
                justify-content: space-between;
            }
            .board.types {
                display: flex;
                gap: 5px;
    
                .type-item {
                    flex: 1;
                    text-align: center;
                    font-size: 10px;
                    padding: 3px;
                    border-radius: 5px;
                    text-transform: uppercase;
                    font-weight: bold;
                }
            }
        }

        .details-bottom {
            display: flex;

            .board.view {
                background-color: #30a7d7;
                color: #f9f9f9;
                flex: 1;
                font-size: 12px;
                cursor: pointer;
            }
        }



        b {
            text-transform: capitalize;
            font-size: 18px;
        }

    }

    &:hover {
        box-shadow: 0 0 5px #a1a1a1;
    }
`;
