import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <section className="logos">
        <img src="/images/fb.png" alt="Icon Facebook" />
        <img src="/images/tw.png" alt="Icon Twitter" />
        <img src="/images/ig.png" alt="Icon Instagram" />
      </section>
      <img src="/images/logo.png" alt="Logo Organo" />
      <p>Desenvolvido por Alura.</p>
    </footer>
  );
};

export default Rodape;

//src/componentes/Rodape/index.js
// const Rodape = () => {
//     return (<footer className="footer">
//         <section>
//             <ul>
//                 <li>
//                     <a href="facebook.com" target="_blank">
//                         <img src="/imagens/facebook.png" alt="" />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="twitter.com" target="_blank">
//                         <img src="/imagens/twitter.png" alt="" />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="instagram.com" target="_blank">
//                         <img src="/imagens/instagram.png" alt="" />
//                     </a>
//                 </li>
//             </ul>
//         </section>
//         <section>
//             <img src="/imagens/logo.png" alt="" />
//         </section>
//         <section>
//             <p>
//                 Desenvolvido por Alura.
//             </p>
//         </section>
//     </footer>)
// }

// export default Rodape