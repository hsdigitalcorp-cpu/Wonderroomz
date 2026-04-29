"use client"

import { motion } from "motion/react"

// Groupe d'aiguilles de sapin sur un point de branche
function PineNeedles({ x, y, rotate = 0, scale = 1 }: {
  x: number; y: number; rotate?: number; scale?: number
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate}) scale(${scale})`} opacity={0.92}>
      {/* Paire d'aiguilles opposées */}
      <line x1="0" y1="0" x2="-18" y2="-6" stroke="#4a6b3a" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="0" y1="0" x2="18" y2="-6" stroke="#4a6b3a" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="0" y1="0" x2="-16" y2="0" stroke="#3d5a30" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="0" y1="0" x2="16" y2="0" stroke="#3d5a30" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="0" y1="0" x2="-14" y2="5" stroke="#4a6b3a" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="0" y1="0" x2="14" y2="5" stroke="#4a6b3a" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="0" y1="0" x2="-10" y2="9" stroke="#3d5a30" strokeWidth="1.0" strokeLinecap="round" />
      <line x1="0" y1="0" x2="10" y2="9" stroke="#3d5a30" strokeWidth="1.0" strokeLinecap="round" />
    </g>
  )
}

// Rameau de sapin avec aiguilles denses
function FirBranch({ x, y, length = 80, rotate = 0, scale = 1 }: {
  x: number; y: number; length?: number; rotate?: number; scale?: number
}) {
  const steps = Math.floor(length / 14)
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate}) scale(${scale})`}>
      {/* Tige principale */}
      <line x1="0" y1="0" x2={length} y2="0" stroke="#6B4A2E" strokeWidth="2.5" strokeLinecap="round" />
      {/* Aiguilles le long du rameau */}
      {Array.from({ length: steps }).map((_, i) => {
        const px = (i + 1) * 14
        const flip = i % 2 === 0 ? 1 : -1
        return (
          <g key={i} transform={`translate(${px}, 0)`}>
            <line x1="0" y1="0" x2={-10 * flip} y2={-12} stroke="#4a6b3a" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="0" y1="0" x2={-14 * flip} y2={-8} stroke="#3d5a30" strokeWidth="1.1" strokeLinecap="round" />
            <line x1="0" y1="0" x2={-8 * flip} y2={-15} stroke="#5a7d45" strokeWidth="1.0" strokeLinecap="round" />
          </g>
        )
      })}
    </g>
  )
}

// Petite pomme de pin
function Pinecone({ x, y, scale = 1, rotate = 0 }: {
  x: number; y: number; scale?: number; rotate?: number
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate}) scale(${scale})`} opacity={0.85}>
      <ellipse cx="0" cy="0" rx="5" ry="8" fill="#8B5E3C" stroke="#5C3A1E" strokeWidth="0.8" />
      <path d="M-5,0 C-3,-3 3,-3 5,0" stroke="#5C3A1E" strokeWidth="0.7" fill="none" />
      <path d="M-5,3 C-3,0 3,0 5,3" stroke="#5C3A1E" strokeWidth="0.7" fill="none" />
      <path d="M-4,-3 C-2,-6 2,-6 4,-3" stroke="#5C3A1E" strokeWidth="0.7" fill="none" />
      <path d="M-4,6 C-2,3 2,3 4,6" stroke="#5C3A1E" strokeWidth="0.7" fill="none" />
    </g>
  )
}

export default function CabanetteDecor() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* ══ GAUCHE ══ */}
      <motion.svg
        className="absolute left-0 top-0"
        style={{ width: 230, height: "100%", filter: "drop-shadow(4px 6px 12px rgba(0,0,0,0.4))" }}
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewBox="0 0 230 900"
        preserveAspectRatio="xMinYMin meet"
      >
        {/* Tige principale — bois épais */}
        <path d="M-15,0 C15,80 30,180 8,280 C-8,360 25,450 5,560 C-10,650 20,750 5,900" stroke="#3d2a12" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.25" />
        <path d="M-15,0 C15,80 30,180 8,280 C-8,360 25,450 5,560 C-10,650 20,750 5,900" stroke="#6B4A2E" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M-8,8 C18,86 32,185 12,283" stroke="#9B7A5A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.28" />

        {/* Nœuds d'écorce */}
        <ellipse cx="8" cy="95" rx="7" ry="4.5" fill="#3d2a12" opacity="0.55" transform="rotate(-15 8 95)" />
        <ellipse cx="16" cy="210" rx="6" ry="4" fill="#3d2a12" opacity="0.5" transform="rotate(-5 16 210)" />
        <ellipse cx="5" cy="340" rx="6" ry="4" fill="#3d2a12" opacity="0.5" transform="rotate(10 5 340)" />
        <ellipse cx="12" cy="480" rx="5.5" ry="3.5" fill="#3d2a12" opacity="0.45" />
        <ellipse cx="4" cy="620" rx="5" ry="3" fill="#3d2a12" opacity="0.4" />

        {/* Rameaux de sapin */}
        <g transform="translate(8,95) rotate(-25)">
          <line x1="0" y1="0" x2="85" y2="0" stroke="#5C3E24" strokeWidth="4" strokeLinecap="round" />
          <FirBranch x={8} y={0} length={75} rotate={-15} />
        </g>
        <g transform="translate(16,210) rotate(-18)">
          <line x1="0" y1="0" x2="95" y2="0" stroke="#5C3E24" strokeWidth="3.5" strokeLinecap="round" />
          <FirBranch x={5} y={0} length={88} rotate={-10} />
        </g>
        <g transform="translate(5,340) rotate(-22)">
          <line x1="0" y1="0" x2="105" y2="0" stroke="#5C3E24" strokeWidth="3.5" strokeLinecap="round" />
          <FirBranch x={6} y={0} length={96} rotate={-12} />
        </g>
        <g transform="translate(12,480) rotate(-20)">
          <line x1="0" y1="0" x2="90" y2="0" stroke="#5C3E24" strokeWidth="3" strokeLinecap="round" />
          <FirBranch x={5} y={0} length={82} rotate={-14} />
        </g>
        <g transform="translate(4,620) rotate(-18)">
          <line x1="0" y1="0" x2="80" y2="0" stroke="#5C3E24" strokeWidth="3" strokeLinecap="round" />
          <FirBranch x={5} y={0} length={72} rotate={-10} />
        </g>
        <g transform="translate(6,760) rotate(-15)">
          <line x1="0" y1="0" x2="70" y2="0" stroke="#5C3E24" strokeWidth="2.5" strokeLinecap="round" />
          <FirBranch x={4} y={0} length={62} rotate={-10} />
        </g>

        {/* Pommes de pin */}
        <Pinecone x={90} y={82} scale={1.1} rotate={-25} />
        <Pinecone x={105} y={198} scale={1.0} rotate={-18} />
        <Pinecone x={112} y={326} scale={0.95} rotate={-22} />
        <PineNeedles x={60} y={100} rotate={-30} scale={0.8} />
        <PineNeedles x={80} y={215} rotate={-20} scale={0.75} />
        <PineNeedles x={88} y={346} rotate={-25} scale={0.75} />
        <PineNeedles x={75} y={488} rotate={-22} scale={0.72} />
      </motion.svg>

      {/* ══ DROITE ══ */}
      <motion.svg
        className="absolute right-0 top-0"
        style={{ width: 230, height: "100%", filter: "drop-shadow(-4px 6px 12px rgba(0,0,0,0.4))" }}
        initial={{ opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.15 }}
        viewBox="0 0 230 900"
        preserveAspectRatio="xMaxYMin meet"
      >
        <path d="M245,0 C215,80 200,180 222,280 C238,360 205,450 225,560 C240,650 210,750 225,900" stroke="#3d2a12" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.25" />
        <path d="M245,0 C215,80 200,180 222,280 C238,360 205,450 225,560 C240,650 210,750 225,900" stroke="#6B4A2E" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M238,8 C212,86 198,185 218,283" stroke="#9B7A5A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.28" />

        <ellipse cx="222" cy="95" rx="7" ry="4.5" fill="#3d2a12" opacity="0.55" transform="rotate(15 222 95)" />
        <ellipse cx="214" cy="210" rx="6" ry="4" fill="#3d2a12" opacity="0.5" transform="rotate(5 214 210)" />
        <ellipse cx="225" cy="340" rx="6" ry="4" fill="#3d2a12" opacity="0.5" transform="rotate(-10 225 340)" />
        <ellipse cx="218" cy="480" rx="5.5" ry="3.5" fill="#3d2a12" opacity="0.45" />
        <ellipse cx="226" cy="620" rx="5" ry="3" fill="#3d2a12" opacity="0.4" />

        {/* Rameaux droite (partent vers la gauche) */}
        <g transform="translate(222,95) rotate(205)">
          <line x1="0" y1="0" x2="85" y2="0" stroke="#5C3E24" strokeWidth="4" strokeLinecap="round" />
          <FirBranch x={8} y={0} length={75} rotate={-15} />
        </g>
        <g transform="translate(214,210) rotate(198)">
          <line x1="0" y1="0" x2="95" y2="0" stroke="#5C3E24" strokeWidth="3.5" strokeLinecap="round" />
          <FirBranch x={5} y={0} length={88} rotate={-10} />
        </g>
        <g transform="translate(225,340) rotate(202)">
          <line x1="0" y1="0" x2="105" y2="0" stroke="#5C3E24" strokeWidth="3.5" strokeLinecap="round" />
          <FirBranch x={6} y={0} length={96} rotate={-12} />
        </g>
        <g transform="translate(218,480) rotate(200)">
          <line x1="0" y1="0" x2="90" y2="0" stroke="#5C3E24" strokeWidth="3" strokeLinecap="round" />
          <FirBranch x={5} y={0} length={82} rotate={-14} />
        </g>
        <g transform="translate(226,620) rotate(198)">
          <line x1="0" y1="0" x2="80" y2="0" stroke="#5C3E24" strokeWidth="3" strokeLinecap="round" />
          <FirBranch x={5} y={0} length={72} rotate={-10} />
        </g>
        <g transform="translate(224,760) rotate(195)">
          <line x1="0" y1="0" x2="70" y2="0" stroke="#5C3E24" strokeWidth="2.5" strokeLinecap="round" />
          <FirBranch x={4} y={0} length={62} rotate={-10} />
        </g>

        <Pinecone x={140} y={82} scale={1.1} rotate={25} />
        <Pinecone x={125} y={198} scale={1.0} rotate={18} />
        <Pinecone x={118} y={326} scale={0.95} rotate={22} />
        <PineNeedles x={170} y={100} rotate={30} scale={0.8} />
        <PineNeedles x={150} y={215} rotate={20} scale={0.75} />
        <PineNeedles x={142} y={346} rotate={25} scale={0.75} />
        <PineNeedles x={155} y={488} rotate={22} scale={0.72} />
      </motion.svg>

      {/* ══ HAUT ══ */}
      <motion.svg
        className="absolute left-0 w-full"
        style={{ top: 80, height: 85, filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.3))" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        viewBox="0 0 1440 85"
        preserveAspectRatio="none"
      >
        {/* Branche horizontale du haut */}
        <path d="M230,8 C420,50 600,68 720,70 C840,68 1020,50 1210,8" stroke="#3d2a12" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.22" />
        <path d="M230,8 C420,50 600,68 720,70 C840,68 1020,50 1210,8" stroke="#6B4A2E" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M235,6 C422,46 602,64 720,66" stroke="#9B7A5A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.25" />

        {/* Rameaux qui pendent vers le bas */}
        <g transform="translate(380,46) rotate(90)">
          <FirBranch x={0} y={0} length={35} rotate={0} />
        </g>
        <g transform="translate(520,62) rotate(90)">
          <FirBranch x={0} y={0} length={28} rotate={0} />
        </g>
        <g transform="translate(660,69) rotate(90)">
          <FirBranch x={0} y={0} length={32} rotate={0} />
        </g>
        <g transform="translate(780,69) rotate(90)">
          <FirBranch x={0} y={0} length={30} rotate={0} />
        </g>
        <g transform="translate(920,62) rotate(90)">
          <FirBranch x={0} y={0} length={28} rotate={0} />
        </g>
        <g transform="translate(1060,46) rotate(90)">
          <FirBranch x={0} y={0} length={35} rotate={0} />
        </g>

        {/* Pommes de pin sur l'arc */}
        <Pinecone x={380} y={58} scale={0.9} rotate={90} />
        <Pinecone x={720} y={78} scale={1.0} rotate={90} />
        <Pinecone x={1060} y={58} scale={0.9} rotate={90} />

        <ellipse cx="720" cy="70" rx="5.5" ry="3.5" fill="#3d2a12" opacity="0.55" />
        <ellipse cx="490" cy="65" rx="4.5" ry="3" fill="#3d2a12" opacity="0.45" />
        <ellipse cx="950" cy="65" rx="4.5" ry="3" fill="#3d2a12" opacity="0.45" />
      </motion.svg>

    </div>
  )
}
