import React from 'react'
import { Button, Table } from 'react-bootstrap';
import './table.css';


export default function PriceTable({packages, options}) {
    return (
        <Table responsive striped bordered>
            <thead>
                <tr id='tr-head'>
                    <th scope="col" id='corner'></th>
                    {packages ? packages.map((i,l) => (
                        <th key={l} scope="col">{i[0]}{<br></br>}<span>{i[1]}</span>/monthly</th>
                    )) : null}
                </tr>
            </thead>
            <tbody>
                {options ? options.map((i,l) => (
                    <tr key={l} id='tr-body'>
                        <th scope="row">{i[0]}</th>
                        <td>{i[1]}</td>
                        <td>{i[2]}</td>
                        <td>{i[3]}</td>
                    </tr>
                ))
                 : null}
                 <tr>
                     <th id='#corner'>
                         
                     </th>
                     <td>
                         <Button>Select Plan</Button>
                     </td>
                     <td>
                         <Button>Select Plan</Button>
                     </td>
                     <td>
                         <Button>Select Plan</Button>
                     </td>
                 </tr>
            </tbody>
        </Table>
    )
}
