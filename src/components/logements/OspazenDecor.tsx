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

interface SteamProps {
  x: number
  y: number
  delay?: number
  index?: number
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
  const flip = flipX ? -1 : 1
  const rad = (angle * Math.PI) / 180
  const ex = cx + flip * Math.cos(rad) * length
  const ey = cy - Math.sin(rad) * length
  const midX = cx + flip * Math.cos(rad) * length * 0.55
  const midY = cy - Math.sin(rad) * length * 0.55
  const perpX = -Math.sin(rad) * 6
  const perpY = Math.cos(rad) * 6

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

// ─── Steam ────────────────────────────────────────────────────────────────────

function Steam({ x, y, delay = 0, index = 0 }: SteamProps) {
  const duration = 3 + index * 0.7
  const sway = 12 + (index % 3) * 5
  const totalRise = 60 + (index % 4) * 15

  const path = [
    `M ${x},${y}`,
    `C ${x + sway},${y - totalRise * 0.3}`,
    `  ${x - sway},${y - totalRise * 0.65}`,
    `  ${x + sway * 0.4},${y - totalRise}`,
  ].join(" ")

  const gradientId = `steamGrad-${index}`

  return (
    <motion.g
      animate={{ y: [0, -30], opacity: [1, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.4,
        ease: "easeOut",
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(122,92,88,0.30)" />
          <stop offset="100%" stopColor="rgba(122,92,88,0)" />
        </linearGradient>
      </defs>
      <path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
      />
    </motion.g>
  )
}

// ─── OspazenDecor ─────────────────────────────────────────────────────────────

export default function OspazenDecor() {
  return (
    <div
      className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── SVG full-canvas ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── TOP-LEFT bamboos ── */}

        {/* Large leaning stem — far left, slight inward tilt */}
        <BambooStem
          x={-10}
          y={-20}
          height={340}
          scale={1.1}
          rotate={6}
          opacity={0.55}
          delay={0.1}
        />

        {/* Medium stem, slightly to the right */}
        <BambooStem
          x={32}
          y={-10}
          height={260}
          scale={0.85}
          rotate={3}
          opacity={0.42}
          delay={0.3}
        />

        {/* Thin accent stem */}
        <BambooStem
          x={65}
          y={0}
          height={190}
          scale={0.65}
          rotate={8}
          opacity={0.30}
          delay={0.5}
        />

        {/* ── TOP-RIGHT bamboos (mirrored via flipX + positioned right) ── */}

        {/* Large leaning stem — far right */}
        <BambooStem
          x={1450}
          y={-20}
          height={340}
          scale={1.1}
          rotate={-6}
          opacity={0.55}
          delay={0.15}
          flipX
        />

        {/* Medium stem */}
        <BambooStem
          x={1408}
          y={-10}
          height={260}
          scale={0.85}
          rotate={-3}
          opacity={0.42}
          delay={0.35}
          flipX
        />

        {/* Thin accent */}
        <BambooStem
          x={1375}
          y={0}
          height={190}
          scale={0.65}
          rotate={-8}
          opacity={0.30}
          delay={0.55}
          flipX
        />

        {/* ── BOTTOM-LEFT bamboo rising from floor ── */}
        <BambooStem
          x={20}
          y={500}
          height={320}
          scale={0.9}
          rotate={-4}
          opacity={0.38}
          delay={0.6}
        />

        {/* ── BOTTOM-RIGHT bamboo rising from floor ── */}
        <BambooStem
          x={1420}
          y={520}
          height={280}
          scale={0.8}
          rotate={4}
          opacity={0.35}
          delay={0.7}
          flipX
        />

        {/* ── STEAM volutes — spread across bottom of section ── */}
        <Steam x={180}  y={760} delay={0.0} index={0} />
        <Steam x={340}  y={775} delay={0.8} index={1} />
        <Steam x={520}  y={755} delay={1.6} index={2} />
        <Steam x={720}  y={770} delay={0.4} index={3} />
        <Steam x={920}  y={758} delay={1.2} index={4} />
        <Steam x={1100} y={772} delay={0.6} index={5} />
        <Steam x={1260} y={760} delay={1.9} index={6} />
      </svg>
    </div>
  )
}
