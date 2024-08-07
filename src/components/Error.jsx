
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()

  return (
    <div>
      <h1>Oopss!!</h1>
      <h2>Something happened...</h2>
      <h2>{err.status}</h2>
    </div>
  )
}

export default Error
