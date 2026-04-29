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

// ─── Mist layer (Option A) ────────────────────────────────────────────────────

const MIST_LAYERS = [
  { left: "-5%",  width: "50%", height: 140, bottom: -20, delay: 0,   duration: 9  },
  { left: "25%",  width: "55%", height: 160, bottom: -30, delay: 1.8, duration: 11 },
  { left: "55%",  width: "50%", height: 130, bottom: -10, delay: 0.9, duration: 8  },
  { left: "5%",   width: "42%", height: 100, bottom: 60,  delay: 2.5, duration: 12 },
  { left: "48%",  width: "48%", height: 110, bottom: 50,  delay: 0.5, duration: 10 },
  { left: "75%",  width: "35%", height: 90,  bottom: 70,  delay: 3.0, duration: 9  },
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
        background: "radial-gradient(ellipse at center, rgba(100,160,210,0.25) 0%, rgba(70,130,190,0.12) 50%, transparent 100%)",
        filter: "blur(40px)",
      }}
      animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.08, 1], y: [0, -12, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}

// ─── Bubble particle (Option B) ───────────────────────────────────────────────

const BUBBLES = [
  { left: "6%",  size: 7,  delay: 0,    duration: 7   },
  { left: "14%", size: 18, delay: 1.3,  duration: 9   },
  { left: "22%", size: 8,  delay: 0.6,  duration: 6   },
  { left: "31%", size: 5,  delay: 2.2,  duration: 9   },
  { left: "40%", size: 22, delay: 1.0,  duration: 10  },
  { left: "49%", size: 8,  delay: 1.8,  duration: 8   },
  { left: "57%", size: 5,  delay: 0.4,  duration: 6.5 },
  { left: "65%", size: 9,  delay: 2.5,  duration: 5.5 },
  { left: "73%", size: 25, delay: 1.1,  duration: 11  },
  { left: "81%", size: 7,  delay: 0.8,  duration: 7   },
  { left: "89%", size: 6,  delay: 2.0,  duration: 9   },
  { left: "11%", size: 5,  delay: 3.1,  duration: 6   },
  { left: "46%", size: 20, delay: 2.9,  duration: 10  },
  { left: "70%", size: 5,  delay: 3.6,  duration: 7   },
  { left: "87%", size: 7,  delay: 2.7,  duration: 5.5 },
  { left: "3%",  size: 16, delay: 4.2,  duration: 9   },
  { left: "18%", size: 9,  delay: 4.8,  duration: 6   },
  { left: "27%", size: 4,  delay: 3.9,  duration: 9   },
  { left: "36%", size: 7,  delay: 5.1,  duration: 7   },
  { left: "53%", size: 4,  delay: 4.5,  duration: 8.5 },
  { left: "62%", size: 28, delay: 3.8,  duration: 12  },
  { left: "78%", size: 4,  delay: 5.3,  duration: 7   },
  { left: "93%", size: 8,  delay: 4.0,  duration: 6.5 },
  { left: "9%",  size: 6,  delay: 5.8,  duration: 7   },
  { left: "43%", size: 5,  delay: 6.0,  duration: 8   },
  { left: "67%", size: 7,  delay: 5.5,  duration: 6   },
  { left: "84%", size: 20, delay: 6.3,  duration: 11  },
  { left: "20%", size: 30, delay: 6.8,  duration: 13  },
  { left: "55%", size: 4,  delay: 7.0,  duration: 8   },
  { left: "75%", size: 6,  delay: 6.5,  duration: 7   },
  { left: "95%", size: 22, delay: 7.2,  duration: 10  },
]

function Bubble({ left, size, delay, duration }: typeof BUBBLES[0]) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left,
        bottom: "5%",
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 35%, rgba(180,220,255,0.95), rgba(80,160,230,0.6))`,
        boxShadow: `0 0 ${size * 3}px rgba(100,180,255,0.7), 0 0 ${size}px rgba(150,210,255,0.5)`,
      }}
      animate={{
        y: [0, -(1400 + (delay % 3) * 200)],
        x: [0, (delay % 2 > 1 ? 1 : -1) * 18, (delay % 2 > 1 ? -1 : 1) * 12, 0],
        opacity: [0, 0.95, 0.75, 0],
        scale:   [0.5, 1, 1.15, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.5 + (delay % 2),
        ease: "easeOut",
        times: [0, 0.15, 0.75, 1],
      }}
    />
  )
}

// ─── Steam wisp (CSS div) ─────────────────────────────────────────────────────

const WISPS = [
  { left: "5%",  delay: 0,   duration: 6,  width: 18, height: 120 },
  { left: "15%", delay: 1.4, duration: 8,  width: 14, height: 100 },
  { left: "26%", delay: 0.7, duration: 7,  width: 20, height: 140 },
  { left: "38%", delay: 2.1, duration: 9,  width: 12, height: 110 },
  { left: "50%", delay: 0.3, duration: 6.5,width: 22, height: 130 },
  { left: "61%", delay: 1.8, duration: 7.5,width: 16, height: 120 },
  { left: "72%", delay: 0.9, duration: 8,  width: 14, height: 100 },
  { left: "82%", delay: 2.6, duration: 6,  width: 20, height: 115 },
  { left: "92%", delay: 1.1, duration: 9,  width: 15, height: 135 },
  { left: "20%", delay: 3.2, duration: 7,  width: 18, height: 125 },
  { left: "44%", delay: 3.8, duration: 8,  width: 13, height: 105 },
  { left: "68%", delay: 2.9, duration: 7,  width: 19, height: 130 },
]

function Wisp({ left, delay, duration, width, height }: typeof WISPS[0]) {
  return (
    <motion.div
      className="absolute"
      style={{
        left,
        bottom: "3%",
        width,
        height,
        borderRadius: "50% 50% 30% 30%",
        background: "linear-gradient(to top, rgba(120,190,255,0.55) 0%, rgba(160,210,255,0.25) 50%, transparent 100%)",
        filter: "blur(8px)",
        transformOrigin: "bottom center",
      }}
      animate={{
        y: [0, -1200],
        x: [0, width * 0.8, -width * 0.5, width * 0.3, 0],
        scaleX: [1, 1.3, 0.8, 1.1, 0.5],
        opacity: [0, 0.85, 0.7, 0.4, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.3,
        ease: "easeOut",
        times: [0, 0.2, 0.5, 0.8, 1],
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

      {/* ── Vapeurs CSS ── */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {WISPS.map((w, i) => (
          <Wisp key={i} {...w} />
        ))}
      </div>

      {/* ── Particules montantes (Option B) — z-20 pour passer devant le texte ── */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {BUBBLES.map((b, i) => (
          <Bubble key={i} {...b} />
        ))}
      </div>
    </div>
  )
}
