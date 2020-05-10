import React from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacte: [
        { nume: "Ionescu", prenume: "Mircea", tel: "0745543432", id: 1 },
        { nume: "Avram", prenume: "Andreea", tel: "0723143768", id: 2 },
        { nume: "Popa", prenume: "Cristian", tel: "0761980654", id: 3 },
      ],
    };
    this.stergeContact = this.stergeContact.bind(this);
  }
  stergeContact(ev) {
    const idSup = parseInt(ev.target.id); //  id e convertit in intreg
    const { contacte } = this.state;
    const sirNou = contacte.filter((item) => {
      return item.id !== idSup;
      //  Obiectul care are id === idSup nu se copiaza in noul sir
    });
    this.setState({
      contacte: sirNou,
    });
  }
  render() {
    return (
      <div className="container">
        <Tabel
          dateContacte={this.state.contacte}
          stergeContact={this.stergeContact}
        />
      </div>
    );
  }
}
export default App;
