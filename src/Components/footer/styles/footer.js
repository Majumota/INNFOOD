import styled from 'styled-components'

export const Container = styled.div`
    padding: 60px 90px;
    background: radial-gradient(circle,rgb(0,128,128)0%, 
    rgb(0,128,128)100%);
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column; 
    text-align: left;
    margin-left: 10px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(220px, 1fr));
    grid-gap: 50px;

    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    }
`

export const Link = styled.a`
    color: #fff;
    margin-bottom: 6px;
    font-size: 16px;
    text-decoration: none;

    &:hover{
        color: rgb(242,202,78);
        transition: 200ms ease-in;
    }
`

export const Title = styled.p`
    font-size:24px;
    color:#fff;
    margin-bottom:20px; 
    font-weight: bold;
`

export const Photo = styled.div`
    height:100px;
    width: 110px;
    border: 2px;
`