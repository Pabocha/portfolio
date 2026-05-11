import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Animate skill bars inside the revealed element
            entry.target.querySelectorAll('.skill-bar').forEach((bar) => {
              bar.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    // Trigger immediately for elements already in view
    setTimeout(() => {
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible')
        }
      })
    }, 100)

    return () => observer.disconnect()
  }, [])
}
