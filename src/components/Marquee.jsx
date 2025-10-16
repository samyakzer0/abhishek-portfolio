import { cn } from "../lib/utils.js"

/**
 * @typedef {Object} MarqueeProps
 * @property {string} [className] - Optional CSS class name to apply custom styles
 * @property {boolean} [reverse=false] - Whether to reverse the animation direction
 * @property {boolean} [pauseOnHover=false] - Whether to pause the animation on hover
 * @property {React.ReactNode} children - Content to be displayed in the marquee
 * @property {boolean} [vertical=false] - Whether to animate vertically instead of horizontally
 * @property {number} [repeat=4] - Number of times to repeat the content
 */

/**
 * Marquee component for smooth scrolling animations
 * @param {MarqueeProps} props
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}