import React from 'react'
import Footer from '../Components/footer'
import Icon from '../Components/icons'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title></Footer.Title>
                    <Footer.Photo><img src='https://pbs.twimg.com/media/Eye7raEWQAQfoTh?format=jpg&name=large'
                    width="500" height="240"></img></Footer.Photo> 
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Información</Footer.Title>
                    <Footer.Link href="#">info@innfood.edu.co</Footer.Link>
                    <Footer.Link href="#">Campus del Puente del Común, Km. 7, Autopista Norte de Bogotá. Chía, Cundinamarca, Colombia.
                    </Footer.Link>
                    <Footer.Link href="#">©INNFood</Footer.Link>
                    <Footer.Link href="#">TODOS LOS DERECHOS RESERVADOS.</Footer.Link>
                    <Footer.Link href="#">POLITICAS DE PRIVACIDAD.</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram"></Icon>Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-linkedin"></Icon>Linkedin</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube"></Icon>Youtube</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title></Footer.Title>
                    <Footer.Photo><img src='https://pbs.twimg.com/media/EyfDE2eWgAU1-Iu?format=png&name=900x900' 
                    width="170" height="170"></img></Footer.Photo>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}