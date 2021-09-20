import { NextPage } from "next"
import { Button, ListGroup } from "../ui"

const Home: NextPage = () => {
  return (
    <div>
      hey
      <Button>hey</Button>
      <ListGroup>
        <ListGroup.Item>this is an item</ListGroup.Item>
        <ListGroup.Item>another item</ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Home
