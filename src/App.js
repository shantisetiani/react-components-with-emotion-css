import { Row, Col, Button } from './component'

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <Button label="Button" />
        </Col>
        <Col>
          <Button label="Button Button Button" size='medium' />
        </Col>
      </Row>
      <Button label="Button Button Button" size='large' />
    </div>
  );
}

export default App;
