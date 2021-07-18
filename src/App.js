import { Row, Col, Break, Button, Checkbox } from './component'

function App() {
  return (
    <div className="App">
      <Break height={100} />
      <Row gutter={12} vMargin={10}>
        <Col>
          <Checkbox content="Checkbox 1" />
          <Checkbox content="Checkbox 2" />
        </Col>
        <Col></Col>
      </Row>
      <Row gutter={12} vMargin={10} totalCol={8}>
        <Col colspan={1}>
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
