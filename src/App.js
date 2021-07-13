import axios from 'axios';
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      res_data: "",
      list: []
    };
    this.getTodos = this.getTodos.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  async getTodos() {
    let response = await axios
      .get("https://reqres.in/api/users?page=2")
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    const user_detail = response.data;
    this.setState({ res_data: user_detail, list: user_detail.data });
  }

  render() {
    return (
      <div>
        <h2>LIST OF USERS: </h2>
        {this.state.list &&
          this.state.list.map(item => {
            return (
              <table>
                <tr>
                  <td>{item.first_name} {item.last_name}</td>
                </tr>
              </table>
            );
          })}
      </div>
    );
  }
}