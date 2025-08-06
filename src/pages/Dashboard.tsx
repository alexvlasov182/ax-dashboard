import React from 'react'
import { ImportWidget } from '../components/widgets/ImportWidget'

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-mainBackground p-6">
      <div className="max-w-[1200px] mx-auto">
        {/* grid: emulate gridstack with 6 columns, our widget will span 2 cols */}
        <div className="grid grid-cols-6 gap-6">
          {/* Import widget span 2 columns */}
          <div className="col-span-2">
            <ImportWidget failedFiles={3} />
          </div>

          {/* placeholder example widgets */}
          <div className="col-span-2">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              Other widget (demo)
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              Right column widget
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
