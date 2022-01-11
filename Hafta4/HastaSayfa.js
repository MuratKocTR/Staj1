import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Table, Label, Input, Button, } from "reactstrap";
import sıra2 from './data2.json'


const HastaSayfa = () => {
    const [hastalar, hastaGir] = useState(sıra2);
    
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
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {hastalar.map((hasta) => (
                                    <tr>
                                        
                                        <td>{hasta.id}</td>
                                        <td>{hasta.Name}</td>
                                        <td>{hasta.surName}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>

                </Row>
            </Container>
        </div>
        );
    
}

export default HastaSayfa;