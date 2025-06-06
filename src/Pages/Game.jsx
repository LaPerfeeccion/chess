import React, { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Icon } from "@iconify/react";
import "./Game.css";

export default function Game() {
  const [game] = useState(new Chess());
  const [position, setPosition] = useState(game.fen());
  const [selectedSq, setSelectedSq] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  const updatePosition = () => {
    setPosition(game.fen());
   if (game.isCheckmate()) {
      setStatusMessage(
        game.turn() === "w"
          ? "Jaque Mate: Ha ganado Negras"
          : "Jaque Mate: Ha ganado Blancas"
      );
    } else if (game.isDraw()) {
      setStatusMessage("Tablas");
    } else if (game.isCheck()) {
      setStatusMessage(
        game.turn() === "w" ? "Jaque a Blancas" : "Jaque a Negras"
      );
    } else {
      setStatusMessage(`Turno de ${game.turn() === "w" ? "Blancas" : "Negras"}`);
    }
  };

  useEffect(() => {
    updatePosition();
  }, []);

  const coordToSquare = (r, c) => {
    const files = "abcdefgh";
    const ranks = "87654321";
    return files[c] + ranks[r];
  };

  const onSquareClick = (r, c) => {
    const sq = coordToSquare(r, c);

    if (!selectedSq) {
      const piece = game.get(sq);
      if (!piece) return;
      if (
        (game.turn() === "w" && piece.color === "w") ||
        (game.turn() === "b" && piece.color === "b")
      ) {
        setSelectedSq(sq);
        const moves = game.moves({ square: sq, verbose: true });
        const squares = moves.map((m) => m.to);
        setLegalMoves(squares);
      }
      return;
    }

    if (selectedSq === sq) {
      setSelectedSq(null);
      setLegalMoves([]);
      return;
    }

    if (!legalMoves.includes(sq)) {
      setSelectedSq(null);
      setLegalMoves([]);
      return;
    }

    game.move({ from: selectedSq, to: sq, promotion: "q" });
    setSelectedSq(null);
    setLegalMoves([]);
    updatePosition();
  };

  const renderBoard = () => {
    const boardRows = game.board();
    return boardRows.map((rowArr, r) =>
      rowArr.map((squareObj, c) => {
        const isLight = (r + c) % 2 === 0;
        const currentSquare = coordToSquare(r, c);
        const isLegalDest = legalMoves.includes(currentSquare);

        let pieceIcon = null;
        if (squareObj) {
          const { type, color } = squareObj;
          const unicodeMap = {
            p: "mdi:chess-pawn",
            r: "mdi:chess-rook",
            n: "mdi:chess-knight",
            b: "mdi:chess-bishop",
            q: "mdi:chess-queen",
            k: "mdi:chess-king",
          };
          pieceIcon = (
            <Icon
              icon={unicodeMap[type]}
              className={color === "w" ? "piece white" : "piece black"}
            />
          );
        }

        let classes = "square " + (isLight ? "light" : "dark");
        if (currentSquare === selectedSq) classes += " selected";
        if (isLegalDest) classes += " highlight";

        return (
          <div
            key={`${r}-${c}`}
            className={classes}
            onClick={() => onSquareClick(r, c)}
          >
            {pieceIcon}
          </div>
        );
      })
    );
  };

  return (
    <div className="game-wrapper">
      <div className="header">
        <h1 className="title">Chess Classic</h1>
        <div className="status">{statusMessage}</div>
      </div>
      <div className="board">{renderBoard()}</div>
    </div>
  );
}
