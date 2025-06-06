// src/components/Board.jsx
import React from 'react';
import Square from './Square';

function Board({ tablero, manejarMovimiento }) {
  const generarFilas = () => {
    return tablero.map((fila, indiceFila) => (
      <div key={`fila-${indiceFila}`} className="fila-tablero">
        {generarCasillas(fila, indiceFila)}
      </div>
    ));
  };

  const generarCasillas = (fila, indiceFila) => {
    return fila.map((casilla, indiceColumna) => (
      <Square
        key={`${indiceFila}-${indiceColumna}`}
        tipoPieza={casilla}
        posicion={{ fila: indiceFila, columna: indiceColumna }}
        manejarClick={() => manejarMovimiento(
          { fila: indiceFila, columna: indiceColumna },
          null
        )}
      />
    ));
  };

  return (
    <div className="tablero">
      {generarFilas()}
    </div>
  );
}

export default Board;