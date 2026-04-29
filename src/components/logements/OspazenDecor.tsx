"use client"

import { motion } from "motion/react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface BambooStemProps {
  x: number
  y: number
  height: number
  scale?: number
  rotate?: number
  opacity?: number
  delay?: number
  flipX?: boolean
}

// ─── BambooStem ───────────────────────────────────────────────────────────────

function BambooLeaf({
  cx,
  cy,
  angle,
  length = 28,
  flipX = false,
}: {
  cx: number
  cy: number
  angle: number
  length?: number
  flipX?: boolean
}) {
  const r = (n: number) => Math.round(n * 1e6) / 1e6
  const flip = flipX ? -1 : 1
  const rad = (angle * Math.PI) / 180
  const ex = r(cx + flip * Math.cos(rad) * length)
  const ey = r(cy - Math.sin(rad) * length)
  const midX = r(cx + flip * Math.cos(rad) * length * 0.55)
  const midY = r(cy - Math.sin(rad) * length * 0.55)
  const perpX = r(-Math.sin(rad) * 6)
  const perpY = r(Math.cos(rad) * 6)

  return (
    <g>
      {/* Leaf blade */}
      <path
        d={`M ${cx},${cy} Q ${midX + perpX * flip},${midY - perpY} ${ex},${ey} Q ${midX - perpX * flip},${midY + perpY} ${cx},${cy}`}
        fill="#7A5C58"
        opacity={0.55}
      />
      {/* Mid-rib */}
      <line
        x1={cx}
        y1={cy}
        x2={ex}
        y2={ey}
        stroke="#4a2f2c"
        strokeWidth={0.6}
        opacity={0.6}
      />
    </g>
  )
}

function BambooStem({
  x,
  y,
  height,
  scale = 1,
  rotate = 0,
  opacity = 1,
  delay = 0,
  flipX = false,
}: BambooStemProps) {
  const segmentCount = Math.floor(height / 38)
  const segmentHeight = height / segmentCount
  const stemWidth = 9 * scale
  const nodeThickness = 4 * scale
  const sx = x
  const sy = y

  return (
    <motion.g
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
      transform={`rotate(${rotate}, ${sx}, ${sy}) scale(${flipX ? -1 : 1}, 1) translate(${flipX ? -sx * 2 : 0}, 0)`}
    >
      <g opacity={opacity}>
        {Array.from({ length: segmentCount }).map((_, i) => {
          const segY = sy + i * segmentHeight
          const isNodeLeafSide = i % 2 === 0

          return (
            <g key={i}>
              {/* Segment body */}
              <rect
                x={sx - stemWidth / 2}
                y={segY + nodeThickness / 2}
                width={stemWidth}
                height={segmentHeight - nodeThickness}
                rx={stemWidth / 2}
                fill="#6B4A46"
                opacity={0.75}
              />
              {/* Node ring */}
              <rect
                x={sx - stemWidth / 2 - 2 * scale}
                y={segY - nodeThickness / 2}
                width={stemWidth + 4 * scale}
                height={nodeThickness}
                rx={nodeThickness / 2}
                fill="#4a2f2c"
                opacity={0.8}
              />
              {/* Leaves at every other node */}
              {i > 0 && i < segmentCount - 1 && (
                <>
                  {isNodeLeafSide ? (
                    <BambooLeaf
                      cx={sx + stemWidth / 2}
                      cy={segY}
                      angle={30}
                      length={26 * scale}
                      flipX={false}
                    />
                  ) : (
                    <BambooLeaf
                      cx={sx - stemWidth / 2}
                      cy={segY}
                      angle={35}
                      length={22 * scale}
                      flipX={true}
                    />
                  )}
                  {/* Occasional second leaf */}
                  {i % 3 === 0 && (
                    <BambooLeaf
                      cx={isNodeLeafSide ? sx + stemWidth / 2 : sx - stemWidth / 2}
                      cy={segY + 8 * scale}
                      angle={55}
                      length={18 * scale}
                      flipX={!isNodeLeafSide}
                    />
                  )}
                </>
              )}
            </g>
          )
        })}
      </g>
    </motion.g>
  )
}

// ─── Mist layer (Option A) ────────────────────────────────────────────────────

const MIST_LAYERS = [
  { left: "0%",   width: "55%", height: 90,  bottom: 0,   delay: 0,    duration: 8 },
  { left: "30%",  width: "60%", height: 110, bottom: 0,   delay: 1.5,  duration: 10 },
  { left: "60%",  width: "55%", height: 80,  bottom: 0,   delay: 0.8,  duration: 9 },
  { left: "10%",  width: "45%", height: 60,  bottom: 30,  delay: 2.2,  duration: 11 },
  { left: "50%",  width: "50%", height: 70,  bottom: 20,  delay: 0.4,  duration: 7  },
]

function MistLayer({ left, width, height, bottom, delay, duration }: typeof MIST_LAYERS[0]) {
  return (
    <motion.div
      className="absolute"
      style={{
        left,
        bottom,
        width,
        height,
        borderRadius: "50%",
        background: "radial-gradient(ellipse at center bottom, rgba(220,205,195,0.22) 0%, rgba(200,185,175,0.08) 55%, transparent 100%)",
        filter: "blur(28px)",
      }}
      animate={{ opacity: [0.4, 0.85, 0.4], scaleX: [1, 1.06, 1], y: [0, -8, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}

// ─── Bubble particle (Option B) ───────────────────────────────────────────────

const BUBBLES = [
  { left: "8%",  size: 5, delay: 0,    duration: 6,  startY: "88%" },
  { left: "16%", size: 3, delay: 1.2,  duration: 7,  startY: "90%" },
  { left: "24%", size: 6, delay: 0.5,  duration: 5.5,startY: "85%" },
  { left: "33%", size: 4, delay: 2.1,  duration: 8,  startY: "92%" },
  { left: "41%", size: 3, delay: 0.9,  duration: 6.5,startY: "87%" },
  { left: "50%", size: 5, delay: 1.7,  duration: 7,  startY: "89%" },
  { left: "58%", size: 4, delay: 0.3,  duration: 6,  startY: "91%" },
  { left: "66%", size: 6, delay: 2.4,  duration: 5,  startY: "86%" },
  { left: "74%", size: 3, delay: 1.0,  duration: 7.5,startY: "90%" },
  { left: "82%", size: 5, delay: 0.7,  duration: 6,  startY: "88%" },
  { left: "90%", size: 4, delay: 1.9,  duration: 8,  startY: "92%" },
  { left: "12%", size: 3, delay: 3.0,  duration: 5.5,startY: "93%" },
  { left: "47%", size: 4, delay: 2.8,  duration: 7,  startY: "87%" },
  { left: "71%", size: 3, delay: 3.5,  duration: 6.5,startY: "91%" },
  { left: "88%", size: 5, delay: 2.6,  duration: 5,  startY: "89%" },
]

function Bubble({ left, size, delay, duration }: typeof BUBBLES[0]) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left,
        bottom: 0,
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 35%, rgba(255,245,240,0.9), rgba(220,200,190,0.4))`,
        boxShadow: `0 0 ${size * 2}px rgba(220,200,190,0.5)`,
      }}
      animate={{
        y: [0, -(280 + Math.sin(delay) * 80)],
        x: [0, Math.cos(delay * 2) * 20, Math.sin(delay) * -15, 0],
        opacity: [0, 0.8, 0.6, 0],
        scale: [0.6, 1, 1.1, 0.4],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: delay * 0.3,
        ease: "easeOut",
        times: [0, 0.2, 0.75, 1],
      }}
    />
  )
}

// ─── OspazenDecor ─────────────────────────────────────────────────────────────

export default function OspazenDecor() {
  return (
    <div
      className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Bambous SVG ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <BambooStem x={-10}  y={-20} height={340} scale={1.1}  rotate={6}   opacity={0.55} delay={0.10} />
        <BambooStem x={32}   y={-10} height={260} scale={0.85} rotate={3}   opacity={0.42} delay={0.30} />
        <BambooStem x={65}   y={0}   height={190} scale={0.65} rotate={8}   opacity={0.30} delay={0.50} />
        <BambooStem x={1450} y={-20} height={340} scale={1.1}  rotate={-6}  opacity={0.55} delay={0.15} flipX />
        <BambooStem x={1408} y={-10} height={260} scale={0.85} rotate={-3}  opacity={0.42} delay={0.35} flipX />
        <BambooStem x={1375} y={0}   height={190} scale={0.65} rotate={-8}  opacity={0.30} delay={0.55} flipX />
        <BambooStem x={20}   y={500} height={320} scale={0.9}  rotate={-4}  opacity={0.38} delay={0.60} />
        <BambooStem x={1420} y={520} height={280} scale={0.8}  rotate={4}   opacity={0.35} delay={0.70} flipX />
      </svg>

      {/* ── Brume au sol (Option A) ── */}
      {MIST_LAYERS.map((m, i) => (
        <MistLayer key={i} {...m} />
      ))}

      {/* ── Particules montantes (Option B) ── */}
      {BUBBLES.map((b, i) => (
        <Bubble key={i} {...b} />
      ))}
    </div>
  )
}
