import React from 'react';
import EditPencilButton from './EditPencilButton';

interface PropsInterface {
  className?: string,
  title: string,
  text: string,
  imgSrc: any,
}

const defaultProps: PropsInterface = {
  title: '',
  text: '',
  imgSrc: '',
}

export default function WorkoutRoutineCard(props: PropsInterface = defaultProps) {
  const {
    className,
    title,
    text,
    imgSrc
  } = props;

  const renderPencilButton = (
    <EditPencilButton className="mx-2" onClick={(e) => console.log('edit :D')} />
  )

  return (
    <div>
      <div className={`card ${className}`} style={{ cursor: 'pointer' }}>
        <div className="card-body">
          <h4 className="card-title">{title} {renderPencilButton} </h4>
          <p className="card-text">{text}</p>
        </div>
        <img className="card-img-bot" src={imgSrc} alt="" />
      </div>
    </div>
  )
}
