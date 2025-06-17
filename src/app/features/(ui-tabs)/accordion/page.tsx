'use client'

import { useAccordionMenuData } from '@/hooks/accordion/useAccordionMenuData'
import { useAccordionMenuStore } from '@/stores/accordionMenuStore'
import { AccordionMenuItem } from '@/types/ui-tabs/accordion-menu-item'

export default function AccordionPage() {
    const { data } = useAccordionMenuData()
    const { openMap, toggle } = useAccordionMenuStore()

    const renderItems = (items: AccordionMenuItem[], parentKey = '') => (
        <ul className="space-y-1">
            {items?.map((item, index) => {
                const key = `${parentKey}${index}`
                const isOpen = openMap[key]

                return (
                    <li key={key}>
                        {item.children ? (
                            <div>
                                <button
                                    onClick={() => toggle(key)}
                                    className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-left font-medium text-gray-800"
                                >
                                    {item.title}
                                    <span>{isOpen ? '▾' : '▸'}</span>
                                </button>
                                {isOpen && (
                                    <div className="ml-4 mt-1 border-l border-gray-300 pl-2">
                                        {renderItems(item.children, `${key}-`)}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="px-6 py-1 text-gray-700 hover:text-black cursor-pointer">
                                {item.title}
                            </div>
                        )}
                    </li>
                )
            })}
        </ul>
    )

    return (
        <nav className="w-full max-w-xs mx-auto mt-6 text-sm">
            {data ? renderItems(data) : <div className="text-gray-400">No Data</div>}
        </nav>
    )
}