import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement>{
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({className, children, ...props}) => {
  return (
    <div
        className={`rounded-lg shadow p-4 ${className ?? ""}`}
        {...props}
    >
        {children}
    </div>
  )
}

export default Card