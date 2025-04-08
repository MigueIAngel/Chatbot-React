import type React from "react"

/**
 * LoadingAnimation component displays a three-dot bouncing animation
 * Used to indicate that the chatbot is processing a response
 */
const LoadingAnimation: React.FC = () => {
  return (
    <div className="loading-animation">
      {/* Three dots with staggered animation delays */}
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  )
}

export default LoadingAnimation
