import './App.css';
import Header from './Header.js';
import Room from './Room.js';

export default function App() {
  const rooms = [
    {
      text: 'Küche',
      description: 'Boden, Spüle',
      isDescriptionVisible: true,
      isClean: false,
    },
    {
      text: 'Wohnzimmer',
      description: 'Teppich, Heizung',
      isDescriptionVisible: false,
      isClean: true,
    },
    {
      text: 'Bad',
      description: 'Waschbecken, Spiegel ',
      isDescriptionVisible: false,
      isClean: false,
    },
  ];

  return (
    <main className="App">
      <Header>Happy Cleaning!</Header>
      {/* landet so direkt in children und wird darüber dahingeschoben // Header in Main, da dieser sich auf jeder Seite ändern soll (Wenn gewünscht, div ganz außen, dann header und die Rooms in main*/}
      {/* fest eingegeben, nicht variabel als Array
       <Room
        text="Küche"
        description="Boden, Spüle"
        isDescriptionVisible
        isClean={false}
      />
     // könnte man auch mit Children machen, aber da noch extra Text lieber über Attribut 
      <Room
        text="Wohnzimmer"
        description="Teppich, Fensterbank"
        isDescriptionVisible
        isClean={true}
      />
      <Room text="Bad" description="Dusche, Waschbecken" isClean={false} /> */}

      {/* Es könnten auch die keys als Parameter eingetragen werden, sodass unden das rooms bei rooms.text weggelassen werden kann  */}

      {rooms.map((room) => (
        <Room
          key={room.text}
          text={room.text}
          description={room.description}
          isDescriptionVisible={room.isDescriptionVisible}
          isClean={room.isClean}
        />
      ))}
    </main>
  );
}
