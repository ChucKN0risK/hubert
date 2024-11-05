import './Sidebar.scss'

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  sections?: [];
}

function Sidebar({ children }: SidebarProps) {
  return (
    <aside>
      {children}
    </aside>
  )
}

export default Sidebar