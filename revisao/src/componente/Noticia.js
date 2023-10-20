import '../App.css';
const NoticiaComponente = ({titulo, imagem, descricao, categoria}) => { 
    return(
       <div className="noticia">
        <h2 className="titulo-noticia">{titulo}</h2>
        <img src= {imagem} />
        <p className="descrição-noticia">{descricao}</p>
        <p className="categoria-noticia">{categoria}</p>
       </div>
    );
    };

    export default NoticiaComponente;