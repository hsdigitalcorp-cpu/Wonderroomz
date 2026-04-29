"use client"

import { motion } from "motion/react"

// Feuille tropicale réutilisable
function Leaf({ x, y, scale = 1, rotate = 0, color = "#4a7d4b", opacity = 1 }: {
  x: number; y: number; scale?: number; rotate?: number; color?: string; opacity?: number
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate}) scale(${scale})`} opacity={opacity}>
      <ellipse cx="0" cy="0" rx="28" ry="12" fill={color} transform="rotate(-20)" />
      <line x1="-26" y1="5" x2="26" y2="-5" stroke="#2e5530" strokeWidth="1.2" opacity="0.6" transform="rotate(-20)" />
      <line x1="0" y1="-10" x2="0" y2="10" stroke="#2e5530" strokeWidth="0.8" opacity="0.4" transform="rotate(-20)" />
    </g>
  )
}

// Feuille monstera avec découpes
function Monstera({ x, y, scale = 1, rotate = 0, opacity = 1 }: {
  x: number; y: number; scale?: number; rotate?: number; opacity?: number
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate}) scale(${scale})`} opacity={opacity}>
      <path
        d="M0,-60 C25,-45 55,-20 50,15 C45,45 20,65 -5,60 C-35,55 -55,30 -50,0 C-45,-30 -20,-55 0,-60Z"
        fill="#4a7d4b"
      />
      {/* nervure centrale */}
      <path d="M0,-60 C5,-20 0,20 -5,60" stroke="#2e5530" strokeWidth="2" fill="none" opacity="0.6" />
      {/* nervures latérales */}
      <path d="M0,-30 C15,-20 35,-10 50,15" stroke="#2e5530" strokeWidth="1.2" fill="none" opacity="0.45" />
      <path d="M0,0 C-15,5 -35,5 -50,0" stroke="#2e5530" strokeWidth="1.2" fill="none" opacity="0.45" />
      <path d="M0,25 C10,30 20,40 15,55" stroke="#2e5530" strokeWidth="1" fill="none" opacity="0.4" />
      {/* découpes monstera */}
      <ellipse cx="32" cy="8" rx="14" ry="7" fill="white" opacity="0.85" transform="rotate(30 32 8)" />
      <ellipse cx="-32" cy="5" rx="12" ry="6" fill="white" opacity="0.85" transform="rotate(-15 -32 5)" />
      <ellipse cx="10" cy="45" rx="10" ry="5" fill="white" opacity="0.85" transform="rotate(10 10 45)" />
    </g>
  )
}

export default function JungleDecor() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* ══ LIANE 1 — haut gauche, tombe en cascade ══ */}
      <motion.svg
        className="absolute"
        style={{ top: -20, left: -10, width: 320, height: 520, filter: "drop-shadow(8px 20px 18px rgba(0,0,0,0.45))", zIndex: 0 }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewBox="0 0 320 520"
      >
        {/* tige principale */}
        <path d="M60,0 C55,80 80,160 50,240 C25,310 60,390 40,480" stroke="#3d6e3e" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* tiges secondaires */}
        <path d="M55,60 C30,80 10,100 0,130" stroke="#3d6e3e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M65,140 C90,160 110,170 130,165" stroke="#3d6e3e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M48,230 C20,250 10,270 20,300" stroke="#3d6e3e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M43,320 C70,340 90,355 85,380" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M40,430 C15,445 5,465 15,490" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* feuilles le long de la liane */}
        <Leaf x={0} y={135} scale={1.4} rotate={-30} />
        <Leaf x={130} y={165} scale={1.1} rotate={10} />
        <Leaf x={20} y={300} scale={1.3} rotate={-45} />
        <Leaf x={85} y={378} scale={1.0} rotate={20} />
        <Leaf x={14} y={490} scale={0.9} rotate={-20} />
        <Leaf x={55} y={65} scale={0.9} rotate={-60} />
        <Monstera x={60} y={0} scale={1.0} rotate={-10} opacity={0.95} />
        <Monstera x={40} y={480} scale={0.75} rotate={15} opacity={0.85} />
      </motion.svg>

      {/* ══ LIANE 2 — haut droite, plonge vers l'intérieur ══ */}
      <motion.svg
        className="absolute"
        style={{ top: -10, right: -20, width: 300, height: 480, filter: "drop-shadow(-8px 20px 18px rgba(0,0,0,0.4))", zIndex: 0 }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.15 }}
        viewBox="0 0 300 480"
      >
        <path d="M240,0 C245,70 220,150 250,220 C275,280 240,360 260,450" stroke="#3d6e3e" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M242,50 C270,70 290,90 300,120" stroke="#3d6e3e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M235,140 C210,160 190,175 180,200" stroke="#3d6e3e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M252,220 C275,240 290,260 285,290" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M258,340 C230,358 215,375 220,400" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* feuilles */}
        <Leaf x={300} y={120} scale={1.3} rotate={40} color="#4a7d4b" />
        <Leaf x={178} y={200} scale={1.2} rotate={-20} color="#3d6e3e" />
        <Leaf x={285} y={290} scale={1.1} rotate={50} color="#4a7d4b" />
        <Leaf x={218} y={400} scale={1.0} rotate={-35} color="#3d6e3e" />
        <Leaf x={246} y={55} scale={0.9} rotate={65} color="#4a7d4b" />
        <Monstera x={240} y={0} scale={1.1} rotate={10} opacity={0.95} />
        <Monstera x={260} y={440} scale={0.7} rotate={-15} opacity={0.8} />
      </motion.svg>

      {/* ══ LIANE 3 — bord gauche milieu, horizontale ══ */}
      <motion.svg
        className="absolute"
        style={{ top: "30%", left: -15, width: 280, height: 220, filter: "drop-shadow(10px 15px 15px rgba(0,0,0,0.35))", zIndex: 0 }}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
        viewBox="0 0 280 220"
      >
        <path d="M0,80 C60,70 120,90 180,75 C220,65 255,80 280,70" stroke="#3d6e3e" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M40,75 C35,50 20,30 0,20" stroke="#3d6e3e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M100,85 C110,110 105,135 90,155" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M190,73 C185,45 195,25 210,10" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <Leaf x={0} y={20} scale={1.2} rotate={-80} />
        <Leaf x={90} y={155} scale={1.1} rotate={10} color="#3d6e3e" />
        <Leaf x={210} y={10} scale={1.0} rotate={-70} />
        <Monstera x={0} y={80} scale={0.85} rotate={-90} opacity={0.9} />
      </motion.svg>

      {/* ══ LIANE 4 — bas gauche, remonte ══ */}
      <motion.svg
        className="absolute"
        style={{ bottom: -20, left: -10, width: 240, height: 320, filter: "drop-shadow(10px -10px 18px rgba(0,0,0,0.35))", zIndex: 0 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.45 }}
        viewBox="0 0 240 320"
      >
        <path d="M30,320 C35,250 10,190 40,130 C65,75 30,40 50,0" stroke="#3d6e3e" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M32,260 C5,250 -10,235 0,210" stroke="#3d6e3e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M25,170 C55,160 75,150 90,130" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M42,90 C15,80 0,65 5,45" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <Leaf x={0} y={210} scale={1.3} rotate={-10} />
        <Leaf x={90} y={130} scale={1.1} rotate={30} color="#3d6e3e" />
        <Leaf x={5} y={44} scale={1.0} rotate={-50} />
        <Monstera x={30} y={318} scale={0.9} rotate={180} opacity={0.9} />
      </motion.svg>

      {/* ══ LIANE 6 — centre haut, tombe verticalement ══ */}
      <motion.svg
        className="absolute"
        style={{ top: -10, left: "35%", width: 180, height: 400, filter: "drop-shadow(4px 15px 14px rgba(0,0,0,0.3))", zIndex: 0 }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        viewBox="0 0 180 400"
      >
        <path d="M90,0 C85,60 100,120 80,180 C65,230 90,280 75,350" stroke="#3d6e3e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M87,50 C60,65 45,80 35,105" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M83,130 C110,145 130,155 145,175" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M78,210 C55,225 40,240 45,265" stroke="#3d6e3e" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M76,300 C100,315 115,330 110,355" stroke="#3d6e3e" strokeWidth="2" fill="none" strokeLinecap="round" />
        <Leaf x={34} y={107} scale={1.2} rotate={-40} />
        <Leaf x={145} y={175} scale={1.0} rotate={25} color="#3d6e3e" />
        <Leaf x={44} y={265} scale={1.1} rotate={-55} />
        <Leaf x={110} y={354} scale={0.9} rotate={15} color="#4a7d4b" />
        <Monstera x={90} y={0} scale={0.85} rotate={5} opacity={0.9} />
      </motion.svg>

      {/* ══ CLUSTER droit milieu — grappe de feuilles ══ */}
      <motion.svg
        className="absolute"
        style={{ top: "20%", right: -25, width: 220, height: 340, filter: "drop-shadow(-10px 10px 16px rgba(0,0,0,0.35))", zIndex: 0 }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.35 }}
        viewBox="0 0 220 340"
      >
        <path d="M220,100 C180,110 140,120 110,150 C85,175 90,210 100,240" stroke="#3d6e3e" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M220,60 C195,75 175,90 165,115" stroke="#3d6e3e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M220,150 C200,160 185,175 190,200" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M100,240 C115,265 120,285 110,310" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M100,240 C80,255 65,270 70,295" stroke="#3d6e3e" strokeWidth="2" fill="none" strokeLinecap="round" />
        <Monstera x={218} y={62} scale={1.1} rotate={80} opacity={0.95} />
        <Monstera x={218} y={152} scale={0.9} rotate={90} opacity={0.85} />
        <Leaf x={165} y={116} scale={1.2} rotate={-30} />
        <Leaf x={190} y={200} scale={1.0} rotate={10} color="#3d6e3e" />
        <Leaf x={108} y={312} scale={1.1} rotate={5} />
        <Leaf x={68} y={296} scale={0.95} rotate={-40} color="#4a7d4b" />
      </motion.svg>


{/* ══ LIANE 5 — bas droite ══ */}
      <motion.svg
        className="absolute"
        style={{ bottom: -15, right: -10, width: 260, height: 300, filter: "drop-shadow(-8px -10px 16px rgba(0,0,0,0.35))", zIndex: 0 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.55 }}
        viewBox="0 0 260 300"
      >
        <path d="M230,300 C225,240 250,180 220,120 C195,70 230,35 210,0" stroke="#3d6e3e" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M228,245 C255,235 265,215 255,190" stroke="#3d6e3e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M225,155 C195,140 175,130 165,110" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M215,65 C240,52 255,38 250,15" stroke="#3d6e3e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <Leaf x={255} y={190} scale={1.3} rotate={20} />
        <Leaf x={163} y={110} scale={1.1} rotate={-30} color="#3d6e3e" />
        <Leaf x={250} y={14} scale={1.0} rotate={60} />
        <Monstera x={230} y={298} scale={0.9} rotate={170} opacity={0.9} />
      </motion.svg>

    </div>
  )
}
