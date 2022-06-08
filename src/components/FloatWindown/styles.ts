import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 800px;
    padding: 20px;
    background-color: #f9f9f9;
    box-shadow: 3px 3px 13px #5c5c5c;
    gap: 20px;
    border-radius: 5px;



    .top-section {
        flex: 3;
        display: flex;
        gap: inherit;

        .left-side {
            flex: 1;
            max-width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;


            img {
                max-width: 100%;
            }
        }

        .right-side {
            flex: 1;
            max-width: 50%;
            display: flex;
            flex-direction: column;

            .poke-float-details {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 10px;
                border-left: 1px solid #CCC;
        
                .board {
                    padding: 5px;
                    background-color: #e7e7e7;
                    border-radius: 5px;
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
                    .board.h-and-w {
                        display: flex;
                        gap: 5px;

                        span {
                            flex: 1;
                            font-size: 14px;
                            padding: 3px;
                            border-radius: 5px;
                            text-transform: capitalize;

                            b {
                                font-size: 14px;
                            }
                        }
                    }
                }
        
                .stats {
                    display: grid;
                    grid-template-columns: repeat(6, 50px);
                    gap: 12px;
                    padding-top: 20px;
                    height: 100%;
                    width: 100%;
                    
                    .s-item {
                        display: flex;
                        flex-direction: column;

                        .s-item-box {
                            flex: 1;
                            display: flex;
                            align-items: flex-end;
                            padding: 5px;
                            border: 1px solid #CCC;
                            border-radius: 5px;                           
                            

                            .s-item-box-bar {
                                transition: all linear 500ms;
                                background-color: var(--stats);
                                width: 100%;
                                height: 1%;
                                max-height: 100%;                                
                            }
                        }
                        .s-item-name {
                            font-size: 10px;
                            font-weight: bold;
                            text-align: center;
                        }
                    }
                }
        
                b {
                    text-transform: capitalize;
                    font-size: 18px;
                }
        
            }
        
        }

    }

    .bottom-section {
        padding: 10px;
        heigth: fit-content;
        display: flex;
        justify-content: center;
        
        .close {
            cursor: pointer;
        }
    }    


`;
