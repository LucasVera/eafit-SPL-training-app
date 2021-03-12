import React from 'react';
// import workoutRoutine1 from '../assets/images/abs-workout.jpg';
// import workoutRoutine2 from '../assets/images/stretching-image.jpg';
import workoutRoutine1 from '../assets/images/shoulder-recovery-video.png';
import workoutRoutine2 from '../assets/images/knee-recovery-video.png';
import Header from '../components/Header';
import WorkoutRoutineCard from '../components/WorkoutRoutineCard';
import EditPencilButton from '../components/EditPencilButton';

export default function AuthenticatedHome() {

  const renderPencilButton = (
    <EditPencilButton className="mx-2" onClick={(e) => console.log('edit :D')} />
  )

  return (
    <div>
      <Header user='Dwayne Johnson' />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mx-1">
              <h1 className="my-2">Catálogo de ejercicios {renderPencilButton} </h1>
              <p>A continuación encontrarás nuestro catálogo de ejercicios diseñado por los mejores fisioterapeutas </p>
              <p>Para usarlo, debes seleccionar uno de los ejercicios para ver los detalles de la rutina {renderPencilButton} </p>
            </div>
            <hr />
            <WorkoutRoutineCard
              className="bg-secondary"
              title="Ejercicio de hombro"
              text="Entrenamiento diseñado para recuperar efectiv..."
              imgSrc={workoutRoutine1}
            />
            <hr />
            <WorkoutRoutineCard
              className="bg-secondary"
              title="Estiramiento de rodilla"
              text="Estiramiento enfocado en las rodillas para recu..."
              imgSrc={workoutRoutine2}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


