import React from 'react'

interface PropsInterface {
  className?: string,
  iconClass: string,
  enabled?: boolean,
  customTextColor?: string,
  style?: any,
  text: string,
  onClick?(e: any): any,
}

const defaultProps: PropsInterface = {
  className: '',
  iconClass: '',
  enabled: true,
  customTextColor: '',
  style: {},
  text: '',
  onClick: () => {},
}

export default function BlockButtonWithIcon(props: PropsInterface = defaultProps) {
  const {
    className,
    iconClass,
    enabled,
    customTextColor,
    style,
    text,
    onClick,
  } = props
  return (
    
<button
        type="button"
        className={`
          btn
          ${className}
          btn-block d-flex justify-content-left
        `
        }
        onClick={onClick}
        disabled={
          enabled === null || enabled === undefined
          ? false : !enabled
        }
        style={style}
      >
        <i className={`mt-1 ${iconClass}`} style={customTextColor ? { color: customTextColor } : undefined}></i>
        <span className="ml-5" style={customTextColor ? { color: customTextColor } : undefined}>{text}</span>
      </button>

  )
}
