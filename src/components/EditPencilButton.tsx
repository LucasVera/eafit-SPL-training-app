import React from 'react'

interface Props {
  className?: string,
  onClick: (e: any) => any
}

const defaultProps: Props = {
  className: '',
  onClick: (e) => {},
};

export default function EditPencilButton(props: Props = defaultProps) {
  const {
    className
  } = props;
  return (
    <i className={`${className} fas fa-pencil-alt fa-sm`} style={{ cursor: 'pointer' }}></i>
  );
}
