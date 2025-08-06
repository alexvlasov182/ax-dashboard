import React from 'react'
import { WidgetHeader } from '../Card/WidgetHeader'

type Props = {
  failedFiles?: number
  detailsHref?: string
}

export const ImportWidget: React.FC<Props> = ({
  failedFiles = 3,
  detailsHref = '/importoverview',
}) => {
  return (
    <div className="bg-white shadow-sm overflow-hidden text-ellipsis flex flex-col gap-2 p-4">
      <WidgetHeader title="Import" detailsLink={detailsHref} />

      {/* body */}
      <div className="w-full h-full">
        <div className="flex flex-col h-[68px] gap-2 text-slate-800">
          <div className="w-full flex flex-row">
            <div className="flex-1 flex flex-col justify-end">
              <div className="mt-3">
                <div className="text-sm font-normal text-slate-500">
                  Failed files
                </div>
                <div className="text-[32px] font-sans font-semibold text-red-600">
                  {failedFiles}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
