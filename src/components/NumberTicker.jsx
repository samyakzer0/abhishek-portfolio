import React, { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function NumberTicker({
  value,
  suffix = "",
  className = "",
  duration = 2000,
  ...props
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true)
      let startTime = null
      const targetValue = parseInt(value.replace(/[^0-9]/g, ''))

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * targetValue)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(targetValue)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [inView, value, duration, isVisible])

  return (
    <span ref={ref} className={className} {...props}>
      {count}
      {suffix}
    </span>
  )
}