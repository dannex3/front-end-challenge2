import { Container, Title, Content, Text, Image } from "./styles";
import metricTape from '../../assets/metricTape.png'

export function About() {
  return (
<Container>
  <Content>
  <Title>
    About Us
  </Title>
    <Text>
      Text here texthere text here texthere text here text
      heretext here text here text heretext here text here
      textheretext text heretext here texthere text here
      texthere texthere text here text heretext here text
      here text here text here texthere text heretext
    </Text>
  </Content>
  <Image src={metricTape} alt='Metric Tape'/>
</Container>
)
}