import bg from '../../assets/bg.png';
import bg2 from '../../assets/bg2.png';
import { Container, SectionGray, Title, WhiteTitle, Text, SectionBlue, Bg1, Bg2, BoxContent } from './styles';

export function Home() {
  return (
    <Container>
        <SectionGray>
          <Title> 
            Measuring everything
          </Title>
          <Bg1 src={bg} alt='Metric Tape'/>
        </SectionGray>
        <SectionBlue>
          <BoxContent>
            <WhiteTitle>
            We are Leader
            in Measure Tapes
            </WhiteTitle>
            <Text>
            There are 5x the circunference of planet earth in Metric Tapes
            </Text>
          </BoxContent>
          <Bg2 src={bg2} id='bg2' alt='Metric Tape' />
        </SectionBlue>
        
      </Container>
  )
};