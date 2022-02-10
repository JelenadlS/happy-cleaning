import './Mates.css';

export default function Mates({ characters }) {
  return (
    <section>
      {characters.map((character) => (
        <p key="id" className="Mates">
          {character.name}
        </p>
      ))}
    </section>
  );
}
