import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  // A cor primaria e secundaria do style estão vindo da raiz app.js na const Times
  const styleCss = { backgroundColor: props.corSegundaria };
  return (
    // Para ocultar os cards que ainda não tem colaboradores cadastrasdos pode ser feito dessa maneiras abaixo
    props.colaboradores.length > 0 && (
      <section className="time" style={styleCss}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
    // ou
    // props.colaboradores.length > 0 ? (
    //   <section className="time" style={styleCss}>
    //     <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    //     <div className="colaboradores">
    //       {props.colaboradores.map((colaborador) => (
    //         <Colaborador
    //           nome={colaborador.nome}
    //           cargo={colaborador.cargo}
    //           imagem={colaborador.imagem}
    //         />
    //       ))}
    //     </div>
    //   </section>
    // : ''
    // )
  );
};

export default Time;
