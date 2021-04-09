import styled from 'styled-components'

export const Container = styled.div`
    padding: 40px 100px;
    background: radial-gradient(circle,rgb(255,255,255)0%, 
    rgb(255,255,255)100%);
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column; 
    text-align: left;
    margin-left: 1px;
    float: left;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(220px, 1fr));
    grid-gap: 30px;
    column-gap:12em;

    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    }
`

export const Link = styled.a`
    color: rgb(0,128,128);
    margin-bottom: 6px;
    font-size: 16px;
    text-decoration: none;

    &:hover{
        color: rgb(242,202,78);
        transition: 200ms ease-in;
    }
`

export const Title = styled.p`
    font-size:22px;
    color:rgb(0,128,128);
    margin-bottom:16px; 
    font-weight: bold;
`

export const Photo = styled.div`
    height:auto;
    width: auto;
    border: 2px;
    max-width: 100%;
    margin-right: auto;
`