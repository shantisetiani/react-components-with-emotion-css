import { Row, Col, Break, Text, Button, Checkbox } from './component'

function App() {
  return (
    <div className="App">
      <Text.Heading h={1} noMargin>Styled Component</Text.Heading>
      <Text.Heading h={4} noMargin>with emotion css</Text.Heading>
      <Break height={20} />
      <Row gutter={12} vMargin={10}>
        <Col>
          <Checkbox content="Checkbox 1" />
          <Checkbox content="Checkbox 2" />
        </Col>
        <Col></Col>
      </Row>
      <Row gutter={12} vMargin={10} totalCol={8} screens={[728]}>
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
