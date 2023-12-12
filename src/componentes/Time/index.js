import "./Time.css";

const Time = (props) => {
  // A cor primaria e secundaria do style estão vindo da raiz app.js na const Times
  const styleCss = { backgroundColor: props.corSegundaria };
  return (
    <section className="time" style={styleCss}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    </section>
  );
};

export default Time;
