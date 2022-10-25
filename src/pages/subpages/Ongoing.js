import React from "react";
import axios from "axios";

//temp
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY2NzYzMDcsImV4cCI6MTY2Njg0OTEwNywiYXVkIjoiZWNvbW1lcmNlIiwiaXNzIjoiaHR0cHM6Ly90cmFuc3Bpa2FwaS5vbnJlbmRlci5jb20iLCJzdWIiOiI2MzU3NzYzY2JmYzExZWNkNjVhYTY3MWQifQ.Ep75c19AKC4Ck2dXv6VmKqGdRUYrB1AvMNkf981WS5A';

class Ongoing extends React.Component {

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
            url: 'http://localhost:8080/orders/ongoing',
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

export default Ongoing;