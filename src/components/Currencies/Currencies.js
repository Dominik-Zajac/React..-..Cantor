import React from 'react';

const Currencies = (props) => {
    console.log(props.currencies)
    if (props.currencies[0] !== undefined) {
        return (
            <div>
                <h2>Currencies</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Unit</th>
                            <th>Value</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.currencies[5].Name}</td>
                            <td>{props.currencies[5].Unit}</td>
                            <td>{props.currencies[5].PurchasePrice.toFixed(2)}</td>
                            <td>
                                <button onClick={() => props.buyCurrency(`${props.currencies[5].Name}`)}>Buy</button>
                            </td>
                        </tr>
                        <tr>
                            <td>{props.currencies[1].Name}</td>
                            <td>{props.currencies[1].Unit}</td>
                            <td>{props.currencies[1].PurchasePrice.toFixed(2)}</td>
                            <td>
                                <button onClick={() => props.buyCurrency(`${props.currencies[1].Name}`)}>Buy</button>
                            </td>
                        </tr>
                        <tr>
                            <td>{props.currencies[0].Name}</td>
                            <td>{props.currencies[0].Unit}</td>
                            <td>{props.currencies[0].PurchasePrice.toFixed(2)}</td>
                            <td>
                                <button onClick={() => props.buyCurrency(`${props.currencies[0].Name}`)}>Buy</button>
                            </td>
                        </tr>
                        <tr>
                            <td>{props.currencies[4].Name}</td>
                            <td>{props.currencies[4].Unit}</td>
                            <td>{props.currencies[4].PurchasePrice.toFixed(2)}</td>
                            <td>
                                <button onClick={() => props.buyCurrency(`${props.currencies[4].Name}`)}>Buy</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    } else {
        return (
            //Pobieranie danych
            <></>
        )
    }

}


export default Currencies;