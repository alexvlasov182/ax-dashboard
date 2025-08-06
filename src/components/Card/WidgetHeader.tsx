// src/components/Card/WidgetHeader.tsx
import React, { useState } from 'react'

export type Interval = { startDate: Date; endDate: Date; name: string }

type WidgetHeaderProps = {
  title: string
  detailsLink?: string
  intervals?: Interval[]
  currencies?: string[]
}

export const WidgetHeader: React.FC<WidgetHeaderProps> = ({
  title,
  detailsLink,
  intervals,
  currencies,
}) => {
  const [selectedInterval, setSelectedInterval] = useState<
    Interval | undefined
  >(intervals ? intervals[0] : undefined)
  const [selectedCurrency, setSelectedCurrency] = useState<string | undefined>(
    currencies ? currencies[0] : undefined
  )

  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>

        {intervals && (
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={selectedInterval?.name}
            onChange={(e) =>
              setSelectedInterval(
                intervals.find((i) => i.name === e.target.value)
              )
            }
          >
            {intervals.map((interval) => (
              <option key={interval.name} value={interval.name}>
                {interval.name}
              </option>
            ))}
          </select>
        )}

        {currencies && (
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="flex items-center gap-2">
        {detailsLink && (
          <a
            href={detailsLink}
            aria-label={`Open ${title} details`}
            className="hover:text-pink-500 transition-colors"
          >
            <svg className="h-5 w-5" aria-hidden focusable="false">
              <use href="/icons.svg#data-view" />
            </svg>
          </a>
        )}

        <button
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          className="p-1 rounded hover:bg-slate-100 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-teal-300"
          aria-label="Widget menu"
        >
          <svg className="h-5 w-5" aria-hidden focusable="false">
            <use href="/icons.svg#more-vertical" />
          </svg>
        </button>
      </div>
    </div>
  )
}
