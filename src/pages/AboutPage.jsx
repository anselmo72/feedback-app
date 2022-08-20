import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ex
        quaerat dolores provident? Doloribus cupiditate, dolorem mollitia totam
        quis error perspiciatis doloremque quibusdam sit quia!
      </p>
      <p>Version:1.0.0</p>
      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
