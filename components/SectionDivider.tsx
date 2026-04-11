interface SectionDividerProps {
  from?: 'primary' | 'secondary'
  to?: 'primary' | 'secondary'
}

const bgMap = {
  primary: 'rgb(10, 10, 15)',
  secondary: 'rgb(18, 18, 26)',
}

export default function SectionDivider({ from = 'primary', to = 'secondary' }: SectionDividerProps) {
  return (
    <div
      className="h-20 md:h-28"
      style={{
        background: `linear-gradient(to bottom, ${bgMap[from]}, ${bgMap[to]})`,
      }}
    />
  )
}
