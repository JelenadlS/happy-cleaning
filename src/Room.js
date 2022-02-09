import './Room.css';

export default function Room({
  text,
  description,
  isDescriptionVisible,
  isClean,
}) {
  const statusClassName = isClean
    ? `Room__status Room__status--clean`
    : `Room__status Room__status--dirty`; // `Room__status Room__status--${isClean ? 'clean' : 'dirty'}`
  return (
    <section className="Room">
      {text}
      <div className={statusClassName}></div>
      <p hidden={!isDescriptionVisible}>{description}</p>
      {/* alternativ: {isDescriptionVisible && <p>{description}</p>} */}
    </section>
  );
}
