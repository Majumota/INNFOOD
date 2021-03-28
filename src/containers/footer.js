import React from 'react'
import Footer from '../Components/footer'
import Icon from '../Components/icons'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>SPIN-OFF BY</Footer.Title>
                    <Footer.Photo><img src='https://www.compartirpalabramaestra.org/sites/default/files/images/herramientas/universidad-de-la-sabana.jpg'
                    width="145" height="160"></img></Footer.Photo> 
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Información</Footer.Title>
                    <Footer.Link href="#">innfood@unisabana.edu.co</Footer.Link>
                    <Footer.Link href="#">Campus del Puente del Común, Km. 7, Autopista Norte de Bogotá. Chía, Cundinamarca, Colombia.
                    </Footer.Link>
                    <Footer.Link href="#">©INNFood</Footer.Link>
                    <Footer.Link href="#">TODOS LOS DERECHOS RESERVADOS.</Footer.Link>
                    <Footer.Link href="#">POLITICAS DE PRIVACIDAD.</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-instagram"></Icon> Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-linkedin"></Icon> Linkedin</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube"></Icon>YouTube</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>INNFood</Footer.Title>
                    <Footer.Photo><img src='https://www.inalde.edu.co/wp-content/uploads/2020/07/creacion-innfood-drycol-unviersidad-de-la-sabana-inalde-business-school.png' 
                    width="260" height="140"></img></Footer.Photo>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}