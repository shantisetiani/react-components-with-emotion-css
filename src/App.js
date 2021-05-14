import { Row, Col, Break, Button } from './component'

function App() {
  return (
    <div className="App">
      <Break height={100} />
      <Row gutter={12} vMargin={10}>
        <Col>
          <Button type="primary" label="Button" />
        </Col>
        <Col>
          <Button type="warning" label="Button" />
        </Col>
        <Col>
          <Button type="danger" label="Button" />
        </Col>
        <Col>
          <Button label="Button" />
        </Col>
        <Col>
          <Button label="Button" />
        </Col>
        <Col>
          <Button label="Button" />
        </Col>
        <Col>
          <Button label="Button" />
        </Col>
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
