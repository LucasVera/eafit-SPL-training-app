import React from 'react';

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

export default function WorkoutRoutineCard(props: PropsInterface) {
  const {
    className,
    title,
    text,
    imgSrc
  } = props;
  return (
    <div>
      <div className={`card ${className}`} style={{ cursor: 'pointer' }}>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
        </div>
        <img className="card-img-bot" src={imgSrc} alt="" />
      </div>
    </div>
  )
}
