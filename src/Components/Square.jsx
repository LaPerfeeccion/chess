import React from 'react';

function Square({ tipoPieza, posicion, manejarClick }) {
  const esClaro = (posicion.fila + posicion.columna) % 2 === 0;

  return (
    <div 
      className={`casilla ${esClaro ? 'clara' : 'oscura'}`}
      onClick={manejarClick}
    >
      {tipoPieza !== ' ' && <Piece tipo={tipoPieza} />}
    </div>
  );
}

export default Square;