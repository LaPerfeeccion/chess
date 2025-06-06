import React from 'react';

function Piece({ tipo }) {
  const simbolos = {
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙',
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟'
  };

  return (
    <div className="pieza">
      {simbolos[tipo]}
    </div>
  );
}

export default Piece;