import { Card } from "@heroui/react";
import { Icon } from "@iconify/react";

const reglas = [
  {
    titulo: "1. Prohibición del Jaque Mate Inmediato",
    descripcion:
      "Cualquier jugada que produzca un jaque mate es considerada ilegal y, por lo tanto, no puede realizarse de forma voluntaria.",
  },
  {
    titulo: "2. Mate Forzado – Penalización",
    descripcion:
      "Si un jugador se encuentra en una situación en la que el único movimiento legal que puede realizar da mate, se considera un mate forzado. Como sanción, el jugador deberá retirar del tablero su pieza de menor valor que haya contribuido directamente al mate.",
  },
  {
    titulo: "3. Límite de Jaques Consecutivos",
    descripcion:
      "No se pueden realizar más de tres jaques consecutivos. Un cuarto jaque en secuencia, incluso si es forzado, se considera ilegal. En caso de que sea inevitable, se aplica la misma penalización que en el caso del mate forzado (retiro de la pieza de menor valor involucrada).",
  },
];

export default function Cardp() {
  return (
    <Card className="w-full max-w-4xl mx-auto border-2 border-yellow-700 shadow-xl bg-[#f5ecd7] rounded-3xl p-0">
      <div className="flex items-center gap-4 p-6 border-b-2 border-yellow-700 bg-gradient-to-r from-[#f5ecd7] to-[#e2cfa5] rounded-t-3xl">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 border-2 border-yellow-700 shadow">
          <Icon icon="mdi:chess-king" width={36} className="text-yellow-700" />
        </div>
        <div className="flex flex-col">
          <span className="font-serif font-bold text-2xl text-yellow-900 tracking-wide">Chess-by-Checks</span>
          <span className="text-yellow-700 text-sm font-mono">@chessbychecks</span>
        </div>
      </div>

      <div className="p-8 flex-1">
        <p className="text-yellow-900 text-lg font-serif mb-6">
          <span className="font-bold text-xl">Chess-by-Checks</span> es una variante estratégica del ajedrez clásico cuyo objetivo principal es conseguir cinco jaques mates a lo largo de la partida para ganar. Sin embargo, se introducen reglas especiales que transforman radicalmente la dinámica del juego:
        </p>

        <div className="flex flex-col gap-6">
          {reglas.map((regla, idx) => (
            <div
              key={idx}
              className="group bg-[#f9f5e3] border-l-8 border-yellow-700 shadow-md rounded-xl p-5 transition-all duration-300 hover:scale-105 hover:bg-yellow-100"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon icon="mdi:chess-king" width={28} className="text-yellow-700 group-hover:scale-125 transition-transform" />
                <h2 className="font-serif font-bold text-yellow-900 text-lg">{regla.titulo}</h2>
              </div>
              <p className="text-yellow-800 font-sans">{regla.descripcion}</p>
            </div>
          ))}
        </div>

        <p className="text-yellow-800 mt-8 font-serif">
          Estas reglas incentivan una nueva forma de jugar, donde el control, la preparación y el equilibrio táctico son esenciales. Los jugadores deben buscar jaques mates para acumular puntos de victoria, pero al mismo tiempo evitar situaciones donde el mate sea directo, forzado o parte de una secuencia excesiva de jaques.
        </p>
      </div>
    </Card>
  );
}