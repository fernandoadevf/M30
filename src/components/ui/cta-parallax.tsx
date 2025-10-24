"use client"

import { useEffect, useRef, useState, createContext, useContext, useCallback, ReactNode } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import { useAnimationFrame } from "framer-motion"
import { cn } from "../../lib/utils"

// Floating Context and Components
interface FloatingContextType {
  registerElement: (id: string, element: HTMLDivElement, depth: number) => void
  unregisterElement: (id: string) => void
}

const FloatingContext = createContext<FloatingContextType | null>(null)

interface FloatingProps {
  children?: ReactNode
  className?: string
  mouseMultiplier?: number
  range?: number
  xOffset?: number
  yOffset?: number
  zIndex?: number
  disabled?: boolean
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  depth?: number
}

const Floating = ({
  children,
  className,
  mouseMultiplier = 0.5,
  range = 10,
  xOffset = 0,
  yOffset = 0,
  zIndex = 999,
  disabled = false,
}: FloatingProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const elements = useRef<Map<string, { element: HTMLDivElement; depth: number }>>(new Map())

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const registerElement = useCallback((id: string, element: HTMLDivElement, depth: number) => {
    elements.current.set(id, { element, depth })
  }, [])

  const unregisterElement = useCallback((id: string) => {
    elements.current.delete(id)
  }, [])

  useAnimationFrame((time, delta) => {
    if (disabled) return

    elements.current.forEach(({ element, depth }) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const deltaX = (mousePosition.x - centerX) * mouseMultiplier * depth * 0.01
        const deltaY = (mousePosition.y - centerY) * mouseMultiplier * depth * 0.01

        element.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`
      }
    })
  })

  return (
    <FloatingContext.Provider value={{ registerElement, unregisterElement }}>
      <div
        ref={containerRef}
        className={cn("pointer-events-none", className)}
        style={{ zIndex }}
      >
        {children}
      </div>
    </FloatingContext.Provider>
  )
}

const FloatingElement = ({
  children,
  className,
  depth = 1,
}: FloatingElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(Math.random().toString(36).substring(7))
  const context = useContext(FloatingContext)

  useEffect(() => {
    if (!elementRef.current || !context) return

    const nonNullDepth = depth ?? 0.01
    const elementId = idRef.current

    context.registerElement(elementId, elementRef.current, nonNullDepth)
    return () => context.unregisterElement(elementId)
  }, [depth, context])

  // Adicionar efeito de mouse diretamente no elemento
  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * depth * 0.02
      const deltaY = (e.clientY - centerY) * depth * 0.02

      element.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [depth])

  return (
    <div
      ref={elementRef}
      className={cn("absolute will-change-transform", className)}
    >
      {children}
    </div>
  )
}

const exampleImages = [
  {
    url: "/imagens/1.jpeg",
    title: "Imagem 1",
  },
  {
    url: "/imagens/parte 1.avif",
    title: "Imagem 2",
  },
  {
    url: "/imagens/parte 2.avif",
    title: "Imagem 3",
  },
  {
    url: "/imagens/parte 3.avif",
    title: "Imagem 4",
  },
  {
    url: "/imagens/parte 4.avif",
    title: "Imagem 5",
  },
  {
    url: "/imagens/parte 5.avif",
    title: "Imagem 6",
  },
  {
    url: "/imagens/parte 6.avif",
    title: "Imagem 7",
  },
  {
    url: "/imagens/parte 7.avif",
    title: "Imagem 8",
  },
]

const CTAParallax = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [animate])

  return (
    <div
      className="flex w-full h-full min-h-[100vh] justify-center items-center bg-black overflow-hidden relative"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-6 xs:space-y-8 sm:space-y-12 md:space-y-16 items-center flex flex-col px-3 xs:px-4 sm:px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.h2
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <span className="text-primary-gold">R$23,90 agora</span>
          <br />
          <span className="text-primary-light">ou continuar perdendo tempo e oportunidades?</span>
        </motion.h2>

        <motion.a
          href="https://pay.kiwify.com.br/aIDCfF1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl px-8 xs:px-10 sm:px-12 md:px-14 lg:px-16 py-4 xs:py-5 sm:py-5 md:py-6 font-bold animate-pulse-urgent inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          QUERO MEUS MOTIONS AGORA
        </motion.a>
      </motion.div>

      <Floating mouseMultiplier={-0.3} range={20} className="overflow-hidden hidden sm:block">
        <FloatingElement depth={1} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={3} className="top-[2%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className="w-20 h-28 xs:w-24 xs:h-32 sm:w-28 sm:h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={1.5} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg"
          />
        </FloatingElement>

        <FloatingElement depth={2.5} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={1.8} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            className="w-20 h-28 xs:w-24 xs:h-32 sm:w-28 sm:h-36 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className="w-28 h-40 xs:w-32 xs:h-48 sm:w-36 sm:h-56 md:w-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={2.2} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg"
          />
        </FloatingElement>
      </Floating>

      {/* Mobile version - elementos mais sutis */}
      <div className="sm:hidden absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] opacity-20">
          <img
            src={exampleImages[0].url}
            className="w-8 h-8 object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="absolute top-[20%] right-[15%] opacity-15">
          <img
            src={exampleImages[1].url}
            className="w-10 h-10 object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="absolute bottom-[25%] left-[20%] opacity-10">
          <img
            src={exampleImages[4].url}
            className="w-12 h-12 object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="absolute bottom-[15%] right-[25%] opacity-20">
          <img
            src={exampleImages[6].url}
            className="w-8 h-8 object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export { CTAParallax }
