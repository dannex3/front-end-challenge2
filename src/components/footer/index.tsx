import youtube from '../../assets/youtube.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import { Footer, ContentBox, Title, Networks, Link, Icon, Text, A, ContactBox } from './styles'

export function Bottom() {
  return (
    <Footer>
      <ContentBox>
        <Title>
          Follow Us
        </Title>
        <Networks>
          <Link><A href='https://www.youtube.com'><Icon src={youtube} alt='YouTube Zutterman'/></A></Link>
          <Link><A href='https://www.facebook.com'><Icon src={facebook} alt='Facebook Zutterman'/></A></Link>
          <Link><A href='https://www.twitter.com'><Icon src={twitter} alt='Twitter Zutterman'/></A></Link>
        </Networks>
        </ContentBox>
        <ContactBox>
          <Title>
            Contact
          </Title>
          <Text>
          2490 Leisure Lane
          San Luis Obispo
          California
          </Text>
        </ContactBox>
    </Footer>
  )
}