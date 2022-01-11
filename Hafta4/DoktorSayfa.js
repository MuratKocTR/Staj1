import React, { Component, useState } from 'react';
import { Table, Label, Input, Button, } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import sıra from './data.json'
import sıra2 from './data2.json'

export default class DoktorSayfa extends Component {
    state = {
            hastalar: [
                { id: 1, isim: "Murat", soyisim: "Koç" },
                { id: 2, isim: "Cevher", soyisim: "Koç" },
                { id: 3, isim: "Sevgi", soyisim: "Koç" }
            ]
        };
    
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="12">
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Hasta No</th>
                                        <th>İsim</th>
                                        <th>Soyisim</th>
                                        <th>Hasta Seçimi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                  this.state.hastalar.map(hasta=>(
                                    <tr>
                                    
                                    <td>{hasta.id}</td>
                                    <td>{hasta.isim}</td>
                                    <td>{hasta.soyisim}</td>
                                    <td><Label check>
                                        <Input type="checkbox" />
                                    </Label></td>
                                    <td><Button color="info">Hastayı Çağır</Button></td>
                                </tr> 
                                  ))
                                  }
                                    

                                </tbody>
                            </Table>
                        </Col>

                    </Row>
                </Container>
            </div>
        );

    }
}



