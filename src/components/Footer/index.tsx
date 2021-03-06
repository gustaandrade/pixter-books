import React, { useState } from "react";
import { connect } from "react-redux";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaPinterestSquare
} from "react-icons/fa";
//@ts-ignore
import { mIpsum } from "mipsum";

import {
  Container,
  TitleArea,
  InputArea,
  LinksArea,
  LocationsArea,
  Location,
  Title,
  Subtitle,
  Text,
  Input,
  Submit,
  SocialLink
} from "./styles";

import { saveNewsletterPayload } from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { NewsletterPayload } from "../../types";
import { FooterProps } from "./types";

const mussumIpsum = mIpsum({
  pNum: 1,
  pQuotes: 2,
  resultType: "text"
});

const Footer: React.FC<FooterProps> = props => {
  const [email, setEmail] = useState<string>();

  function setNewsletterPayload() {
    props.saveNewsletterPayload({
      email: email!,
      site: "pixter books"
    });
  }

  return (
    <Container id="footer">
      <TitleArea>
        <Title>Keep in touch with us</Title>
        <Subtitle>{mussumIpsum}</Subtitle>
      </TitleArea>

      <InputArea>
        <Input
          placeholder="enter your email to update"
          onChange={e => setEmail(e.target.value)}
        />
        <Submit onClick={() => setNewsletterPayload()}>SUBMIT</Submit>
      </InputArea>

      <LinksArea>
        <SocialLink href="#">
          <FaFacebookSquare size="40" color="#fcdb00" />
        </SocialLink>

        <SocialLink href="#">
          <FaTwitterSquare size="40" color="#fcdb00" />
        </SocialLink>

        <SocialLink href="#">
          <FaGooglePlusSquare size="40" color="#fcdb00" />
        </SocialLink>

        <SocialLink href="#">
          <FaPinterestSquare size="40" color="#fcdb00" />
        </SocialLink>
      </LinksArea>

      <LocationsArea>
        <Location>
          <Text>Alameda Santos, 1970</Text>
          <Text>6th floor - Jardim Paulista</Text>
          <Text>São Paulo - SP</Text>
          <Text>+55 31 3090 8500</Text>
        </Location>

        <Location>
          <Text>London - UK</Text>
          <Text>125 Kingsway</Text>
          <Text>London WC2B 6NH</Text>
        </Location>

        <Location>
          <Text>Lisbon - Portugal</Text>
          <Text>Rua Rodrigues Faria, 103</Text>
          <Text>4th floor</Text>
          <Text>Lisbon - Portugal</Text>
        </Location>

        <Location>
          <Text>Curitiba - PR</Text>
          <Text>R. Francisco Rocha, 198</Text>
          <Text>Batel - Curitiba - PR</Text>
        </Location>

        <Location>
          <Text>Buenos Aires - Argentina</Text>
          <Text>Esmeralda 950</Text>
          <Text>Buenos Aires B C1007</Text>
        </Location>
      </LocationsArea>
    </Container>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  saveNewsletterPayload: (newsletterPayload: NewsletterPayload) =>
    dispatch(saveNewsletterPayload(newsletterPayload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
