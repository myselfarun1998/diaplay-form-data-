import React from 'react';
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      city: '',
      phone: ' ',
      age: ' ',
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitCheck = (e) => {
    e.preventDefault();
    if (!this.state.name) {
      alert('A name field is empty.');
    } else if (this.state.phone.length < 10 || !this.state.phone) {
      alert('Phone number is not long enough.');
    } else if (!this.state.city) {
      alert('Enter the city.');
    } else if (!this.state.age) {
      alert('Enter the age.');
    } else {
      alert(
        `         name=${this.state.name}
         phone =${this.state.phone}
         city=${this.state.city}
         age=${this.state.age} `
      );
      console.log(
        `         name=${this.state.name}
        phone =${this.state.phone}
        city=${this.state.city}
        age=${this.state.age} `
      );
    }
  };

  render() {
    const { name, city } = this.state;
    return (
      <>
        <form onSubmit={this.submitCheck}>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            placeholder="enter the name"
          />
          <input
            type="text"
            name="phone"
            onChange={this.onChange}
            placeholder="enter the Phone Number"
          />
          <input
            type="text"
            name="city"
            placeholder="enter the city"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="age"
            placeholder="enter the age"
            onChange={this.onChange}
          />

          <br />
          <button type="submit">submit</button>
        </form>
        <div className="border">
          <p>Name: {this.state.name}</p>
          <p>Phone: {this.state.phone}</p>
          <p>city: {this.state.city}</p>
          <p>Age: {this.state.age}</p>

          <div>{this.myfun}</div>
        </div>
      </>
    );
  }
}
