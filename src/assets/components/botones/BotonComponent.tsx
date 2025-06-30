interface Props {
  nombre: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  css: string;
}

const BotonComponent = ({ nombre, onClick, css }: Props) => {
  return (
    <button onClick={onClick} className={css}>
      {nombre}
    </button>
  );
};

export default BotonComponent;
