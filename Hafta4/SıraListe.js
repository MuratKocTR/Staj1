import React, { Component } from 'react'
import { Table } from "reactstrap";


export default class SıraListe extends Component {
   
    render() {
        return (
            
            <div>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Sıra No</th>
                            <th>İsim</th>
                            <th>Soyisim</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="Murat">Murat</td>
                            <td className="Koc1">Koç</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="Cevher">Cevher</td>
                            <td className="Koc2">Koç</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="Sevgi">Sevgi</td>
                            <td className="Koc3">Koç</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}