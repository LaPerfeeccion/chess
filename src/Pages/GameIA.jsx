import React, { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import * as Engine from "js-chess-engine";
import "./Game.css";

export default function GameIA() {
  const [game] = useState(new Chess());
  const [position, setPosition] = useState(game.fen());
  const [selectedSq, setSelectedSq] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const [showWin, setShowWin] = useState(false);
  const [winner, setWinner] = useState("");
  const navigate = useNavigate();

  const updatePosition = () => {
    setPosition(game.fen());
    if (game.isCheckmate()) {
      setWinner(game.turn() === "w" ? "¡Ganaron las negras!" : "¡Ganaste!");
      setShowWin(true);
    } else if (game.isDraw()) {
      setWinner("¡Tablas!");
      setShowWin(true);
    }
  };

  useEffect(() => {
    updatePosition();
    // eslint-disable-next-line
  }, []);

  // IA js-chess-engine juega como negras
  useEffect(() => {
    if (game.turn() === "b" && !showWin && !game.isGameOver()) {
      setTimeout(() => {
        const engine = new Engine.Game(game.fen());
        const aiMove = engine.aiMove(2); // 2 = profundidad, puedes subirlo a 3 o 4 para más dificultad
        const from = Object.keys(aiMove)[0];
        const to = aiMove[from];
        game.move({ from: from.toLowerCase(), to: to.toLowerCase(), promotion: "q" });
        setSelectedSq(null);
        setLegalMoves([]);
        updatePosition();
      }, 700);
    }
    // eslint-disable-next-line
  }, [position, showWin]);

  useEffect(() => {
    if (showWin) {
      setTimeout(() => {
        setShowWin(false);
        navigate("/modes");
      }, 2000);
    }
  }, [showWin, navigate]);

  const coordToSquare = (r, c) => {
    const files = "abcdefgh";
    const ranks = "87654321";
    return files[c] + ranks[r];
  };

  const onSquareClick = (r, c) => {
    if (showWin || game.turn() === "b") return;
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
      {showWin && (
        <div className="win-overlay">
          <div className="win-message">
            {winner}
          </div>
        </div>
      )}
    </div>
  );
}