import styled from 'styled-components';

export const VideoPlayContent = styled.div`
    background: white;
    text-align: justify;
    width: 700px;
    padding: 8px;
    
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (max-width: 1070px)  {
        display: flex:
        align-items: center;
        background: white;
        text-align: justify;
        margin-bottom: 20px;
        
    }

    @media (max-width: 400px) {
        background: white;
        text-align: justify;
        margin-bottom: 20px;
        margin-left: 0px;
    }
`;

export const VideoPlayCard = styled.div`
    display: flex;
    margin-left: 0px;
    
    > iframe {
        width: 700px;
    }

    @media (max-width: 1070px)  {
        width: 700px;
        background: black;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: 0px;
    }

    @media (max-width: 400px)  {
        background: black;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: 0px;
        width: 400px;
        height: 200px;

        > iframe{
            width: 400px;
        }
}
`;

export const VideosGridContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction};
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;


    :after {
        content: "";
        display: table;
        clear: both;
    }

    @media (max-width: 1070px)  {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-right: 250px;
        margin-left: 250px;
    }

    @media (max-width: 400px)  {
        display: flex;
        justify-content: center;
        margin: 0 20px;
        margin-right: 0px;
    }
`;

export const VideoPlayContainer = styled.div`
    display: flex;
    @media (max-width: 1070px)  {
        flex-direction: column;
        align-items: center;
        display: flex;
        margin-bottom: 20px;
    }

    @media (max-width: 400px)  {
        display: inline;
        margin-bottom: 20px;
        width: 400px;   
    }
`;

export const VideoPlayStar = styled.label`
    color: #000080;
`;
