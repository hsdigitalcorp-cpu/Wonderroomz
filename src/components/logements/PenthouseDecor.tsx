"use client"

import { motion } from "motion/react"

interface FanDecorProps {
  x: number
  y: number
  radius: number
  startAngle: number
  endAngle: number
  color: string
  opacity: number
  transformOrigin?: string
  delay?: number
}

function FanDecor({
  x,
  y,
  radius,
  startAngle,
  endAngle,
  color,
  opacity,
  transformOrigin = "center",
  delay = 0,
}: FanDecorProps) {
  const lineCount = 10
  const angleStep = (endAngle - startAngle) / (lineCount - 1)

  const toRad = (deg: number) => (deg * Math.PI) / 180

  // Generate radiating lines
  const lines = Array.from({ length: lineCount }, (_, i) => {
    const angle = startAngle + i * angleStep
    const rad = toRad(angle)
    const x2 = x + radius * Math.cos(rad)
    const y2 = y + radius * Math.sin(rad)
    return { x1: x, y1: y, x2, y2 }
  })

  // Generate arc paths at 60%, 80%, and 100% radius
  function arcPath(r: number) {
    const startRad = toRad(startAngle)
    const endRad = toRad(endAngle)
    const sx = x + r * Math.cos(startRad)
    const sy = y + r * Math.sin(startRad)
    const ex = x + r * Math.cos(endRad)
    const ey = y + r * Math.sin(endRad)
    const largeArc = endAngle - startAngle > 180 ? 1 : 0
    return `M ${sx} ${sy} A ${r} ${r} 0 ${largeArc} 1 ${ex} ${ey}`
  }

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
      style={{ transformOrigin }}
    >
      {/* Radiating lines */}
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke={color}
          strokeWidth={0.75}
          strokeOpacity={opacity}
        />
      ))}

      {/* Outer arc */}
      <path
        d={arcPath(radius)}
        fill="none"
        stroke={color}
        strokeWidth={1.2}
        strokeOpacity={opacity}
      />

      {/* 80% arc */}
      <path
        d={arcPath(radius * 0.8)}
        fill="none"
        stroke={color}
        strokeWidth={0.8}
        strokeOpacity={opacity * 0.8}
      />

      {/* 60% arc */}
      <path
        d={arcPath(radius * 0.6)}
        fill="none"
        stroke={color}
        strokeWidth={0.6}
        strokeOpacity={opacity * 0.6}
      />
    </motion.g>
  )
}

interface DiamondPatternProps {
  x: number
  y: number
  size: number
  cols: number
  rows: number
  color: string
  opacity: number
  delay?: number
}

function DiamondPattern({
  x,
  y,
  size,
  cols,
  rows,
  color,
  opacity,
  delay = 0,
}: DiamondPatternProps) {
  const spacingX = size * 2.4
  const spacingY = size * 2.4

  const diamonds = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => {
      const cx = x + col * spacingX
      const cy = y + row * spacingY
      return { cx, cy }
    })
  ).flat()

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
    >
      {diamonds.map((d, i) => (
        <polygon
          key={i}
          points={`
            ${d.cx},${d.cy - size}
            ${d.cx + size},${d.cy}
            ${d.cx},${d.cy + size}
            ${d.cx - size},${d.cy}
          `}
          fill="none"
          stroke={color}
          strokeWidth={0.75}
          strokeOpacity={opacity}
        />
      ))}
    </motion.g>
  )
}

export default function PenthouseDecor() {
  const slate = "#4A4E69"
  const gold = "#B8997A"

  return (
    <div
      className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        {/* === TOP-LEFT FAN — large, radiates inward === */}
        <FanDecor
          x={0}
          y={0}
          radius={220}
          startAngle={0}
          endAngle={90}
          color={slate}
          opacity={0.28}
          transformOrigin="0px 0px"
          delay={0}
        />
        {/* Gold accent fan on top-left — slightly smaller */}
        <FanDecor
          x={0}
          y={0}
          radius={140}
          startAngle={5}
          endAngle={85}
          color={gold}
          opacity={0.18}
          transformOrigin="0px 0px"
          delay={0.15}
        />

        {/* === TOP-RIGHT FAN — mirror === */}
        <FanDecor
          x={1440}
          y={0}
          radius={220}
          startAngle={90}
          endAngle={180}
          color={slate}
          opacity={0.28}
          transformOrigin="1440px 0px"
          delay={0.1}
        />
        <FanDecor
          x={1440}
          y={0}
          radius={140}
          startAngle={95}
          endAngle={175}
          color={gold}
          opacity={0.18}
          transformOrigin="1440px 0px"
          delay={0.25}
        />

        {/* === BOTTOM-LEFT FAN — small === */}
        <FanDecor
          x={0}
          y={900}
          radius={130}
          startAngle={-90}
          endAngle={0}
          color={slate}
          opacity={0.22}
          transformOrigin="0px 900px"
          delay={0.2}
        />
        <FanDecor
          x={0}
          y={900}
          radius={80}
          startAngle={-85}
          endAngle={-5}
          color={gold}
          opacity={0.15}
          transformOrigin="0px 900px"
          delay={0.3}
        />

        {/* === BOTTOM-RIGHT FAN — small === */}
        <FanDecor
          x={1440}
          y={900}
          radius={130}
          startAngle={180}
          endAngle={270}
          color={slate}
          opacity={0.22}
          transformOrigin="1440px 900px"
          delay={0.2}
        />
        <FanDecor
          x={1440}
          y={900}
          radius={80}
          startAngle={185}
          endAngle={265}
          color={gold}
          opacity={0.15}
          transformOrigin="1440px 900px"
          delay={0.3}
        />

        {/* === TOP DIAMOND ROW === */}
        <DiamondPattern
          x={240}
          y={22}
          size={5}
          cols={16}
          rows={1}
          color={gold}
          opacity={0.30}
          delay={0.4}
        />
        {/* Inner top diamond row — slate */}
        <DiamondPattern
          x={240}
          y={40}
          size={3.5}
          cols={16}
          rows={1}
          color={slate}
          opacity={0.20}
          delay={0.5}
        />

        {/* === BOTTOM DIAMOND ROW === */}
        <DiamondPattern
          x={240}
          y={862}
          size={5}
          cols={16}
          rows={1}
          color={gold}
          opacity={0.30}
          delay={0.4}
        />
        <DiamondPattern
          x={240}
          y={844}
          size={3.5}
          cols={16}
          rows={1}
          color={slate}
          opacity={0.20}
          delay={0.5}
        />

        {/* === LEFT VERTICAL LINES === */}
        <motion.g
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.35 }}
          style={{ transformOrigin: "0px 450px" }}
        >
          <line x1={18} y1={240} x2={18} y2={660} stroke={slate} strokeWidth={0.8} strokeOpacity={0.25} />
          <line x1={26} y1={260} x2={26} y2={640} stroke={gold} strokeWidth={0.6} strokeOpacity={0.18} />
          <line x1={34} y1={280} x2={34} y2={620} stroke={slate} strokeWidth={0.5} strokeOpacity={0.15} />
        </motion.g>

        {/* === RIGHT VERTICAL LINES === */}
        <motion.g
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.35 }}
          style={{ transformOrigin: "1440px 450px" }}
        >
          <line x1={1422} y1={240} x2={1422} y2={660} stroke={slate} strokeWidth={0.8} strokeOpacity={0.25} />
          <line x1={1414} y1={260} x2={1414} y2={640} stroke={gold} strokeWidth={0.6} strokeOpacity={0.18} />
          <line x1={1406} y1={280} x2={1406} y2={620} stroke={slate} strokeWidth={0.5} strokeOpacity={0.15} />
        </motion.g>

        {/* === TOP HORIZONTAL BORDER LINE === */}
        <motion.g
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.45 }}
          style={{ transformOrigin: "720px 0px" }}
        >
          <line x1={220} y1={12} x2={1220} y2={12} stroke={slate} strokeWidth={0.8} strokeOpacity={0.25} />
          <line x1={220} y1={56} x2={1220} y2={56} stroke={slate} strokeWidth={0.5} strokeOpacity={0.15} />
        </motion.g>

        {/* === BOTTOM HORIZONTAL BORDER LINE === */}
        <motion.g
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.45 }}
          style={{ transformOrigin: "720px 900px" }}
        >
          <line x1={220} y1={888} x2={1220} y2={888} stroke={slate} strokeWidth={0.8} strokeOpacity={0.25} />
          <line x1={220} y1={844} x2={1220} y2={844} stroke={slate} strokeWidth={0.5} strokeOpacity={0.15} />
        </motion.g>

        {/* === CENTER-TOP small diamond accent === */}
        <DiamondPattern
          x={680}
          y={28}
          size={6}
          cols={3}
          rows={1}
          color={gold}
          opacity={0.35}
          delay={0.55}
        />
        {/* === CENTER-BOTTOM small diamond accent === */}
        <DiamondPattern
          x={680}
          y={872}
          size={6}
          cols={3}
          rows={1}
          color={gold}
          opacity={0.35}
          delay={0.55}
        />
      </svg>
    </div>
  )
}
