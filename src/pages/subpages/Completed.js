import React from "react";
import axios from "axios";

//temp
const accessToken = window.localStorage.getItem('accessToken');

class Completed extends React.Component {

    constructor(props) {
        super(props);
        this.state = { orders: [] }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access-Token': accessToken
            },
            url: 'http://localhost:8080/orders/completed',
            mode: 'cors',
            withCredentials: true
          }).then(response => {
            this.setState({ orders: response.data.data.orders });
          }).catch(error => {
            console.log(error);
          })
    }

    render() {
        return (
            <div>
                <table className="table-auto w-full font-normal font-roboto">
                    <thead className="text-gray-800 bg-gray-100 text-sm">
                        <tr>
                            <th>
                                Order Id
                            </th>
                            <th>
                                Pickup Location
                            </th>
                            <th>
                                Delivery Location
                            </th>
                            <th>
                                Fee
                            </th>
                            <th>
                                Delivery Service
                            </th>
                            <th>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100 w-full">
                        {
                            this.state.orders.map(order => {
                                return (<tr>
                                    <td>
                                        {order._id}
                                    </td>
                                    <td>
                                        {order.pickup_location.address}
                                    </td>
                                    <td>
                                        {order.delivery_location.address}
                                    </td>
                                    <td>
                                        {order.order_fee["$numberDecimal"]}
                                    </td>
                                    <td>
                                        {order.delivery_service_name}
                                    </td>
                                    <td>
                                        {order.order_status}
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Completed;