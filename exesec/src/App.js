import React from 'react';
import './App.css';
// import { Message } from './Message.js';
import { Summarise} from './Summarise.js';
import { Summary } from './Summary.js'

let names = ["Jarek", "Ala", "Marek"];

const App = () => (
  <>
  <table className="table table-sm table-striped">
    <thead>
      <tr><th>nr</th><th>imię</th><th>liczba liter</th></tr>
    </thead>

    <tbody>
      {names.map((item, index) => (
        <>
          <tr key={item}>
              <Summary index={index} item={item}></Summary>
          </tr>
        </>
      ))}
    </tbody>

  </table>

  <h1 className="bg-primary text-white text-center p-2">Witaj Adaminie</h1>

  {/* <Message greeting="Raz" name="Zulu"></Message>
  <Message greeting="dwa" name={"yanke " + "Tokio"}></Message>
  */}
  <Summarise names={["Tom", "Jerry", "Barry"]}/>
  </>
)

export default App;
