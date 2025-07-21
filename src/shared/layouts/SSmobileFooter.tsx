import React from 'react'
import { Home, Users, BookOpen, Calendar, ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router'

const menu = [
  {
    label: '홈',
    icon: Home,
    to: '/',
  },
  {
    label: '아티스트',
    icon: Users,
    to: '/artist',
  },
  {
    label: '히스토리',
    icon: BookOpen,
    to: '/history',
  },
  {
    label: '이벤트',
    icon: Calendar,
    to: '/event',
  },
  {
    label: '굿즈',
    icon: ShoppingBag,
    to: '/goods',
  },
]

const SSmobileFooter = () => {
  const navigate = useNavigate()
  return (
    <nav className="w-full bg-background z-50 shadow-[0_-2px_8px_0_rgba(0,0,0,0.03)] flex items-center justify-between px-2 pt-2 pb-1 border-t border-border">
      {menu.map((item) => {
        const Icon = item.icon
        return (
          <button
            key={item.label}
            className="cursor-pointer flex flex-col items-center justify-center flex-1 px-1 py-1 gap-1 text-xs text-foreground hover:text-primary focus:text-primary transition-colors group min-w-0"
            onClick={() => navigate(item.to)}
            type="button"
            style={{ minWidth: 0 }}
          >
            <Icon className="w-6 h-6 text-foreground group-hover:text-primary group-focus:text-primary transition-colors mb-0.5" />
            <span className="leading-tight text-[11px] whitespace-nowrap mt-0.5">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default SSmobileFooter
