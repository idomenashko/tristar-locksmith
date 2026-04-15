'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="divide-y" style={{ borderColor: '#e5e7eb' }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:opacity-80"
              aria-expanded={isOpen}
            >
              <span
                className="text-base font-semibold"
                style={{ color: '#1B3A5C' }}
              >
                {item.q}
              </span>
              <span
                className="flex-shrink-0 text-xl font-bold leading-none"
                style={{ color: '#D4A03C' }}
                aria-hidden="true"
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? '500px' : '0px' }}
            >
              <p className="pb-5 text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                {item.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
