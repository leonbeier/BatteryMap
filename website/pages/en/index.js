/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} id={props.id} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer background="dark">
        <Logo img_src={`${baseUrl}img/bat_ico.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="docs/overview_battery"id="yellowButton">Batterie</Button>  
            <Button href="docs/overview_accu"id="greenButton">Akku</Button>   
            <Button href="docs/overview_future"id="blueButton">Zukunft</Button>   
          </PromoSection>                
        </div>       
      </SplashContainer>      
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Description = () => (
      <Container padding={['bottom', 'top']}>
            <GridBlock
              contents={[
                {
                  content: `Akkus sind in immer mehr Geräten, aber nur wenig Leute wissen was bei den unterschiedlichen Typen zu beachten ist und wo die Unterschiede liegen.<br/><br/>[Klicke hier um mehr zu erfahren](docs/overview_accu)`,
                  imageAlign: 'left',
                  image: `${siteConfig.baseUrl}img/lit.jpg`,
                  imageAlt: 'Akku',
                  title: 'Von Smartphones bis Autos',
                },
              ]}
              layout="twoColumn"
            />
          </Container>
    );

    const VHDPBoard = () => (
      <Container padding={['bottom', 'top']}>
            <GridBlock
              contents={[
                {
                  content: `Normale Einwegbatterien kennt jeder, aber neben auspacken und einsetzen macht man sich wenig Gedanken darüber.<br/><br/>[Klicke hier um mehr zu erfahren](docs/overview_battery)`,
                  imageAlign: 'right',
                  image: `${siteConfig.baseUrl}img/bat.jpg`,
                  imageAlt: 'Einweg Batterie',
                  title: 'Von Fernbedienungen bis Smarthome',
                },
              ]}
              layout="twoColumn"
            />
          </Container>
      );

      const Advantages = () => (
          <Container padding={['bottom', 'top']}>
              <GridBlock
                  contents={[
                      {
                          content: `Da immer mehr Geräte elektrifiziert werden und auch durch die wachsenden E-Auto Industrie gibt es große Fortschritte bei der Akkutechnologie.<br/><br/>[Klicke hier um mehr zu erfahren](docs/overview_future)`,
                          imageAlign: 'left',
                          image: `${siteConfig.baseUrl}img/future.jpg`,
                          imageAlt: 'Zuknunft Batterien',
                          title: 'Die Zunkunft',
                      },
                  ]}
                  layout="twoColumn"
              />
          </Container>
      );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'Was ist bei der Verwendung von Akkus zu beachten?',
            image: `${baseUrl}img/low_bat.svg`,
            imageAlign: 'top',
            title: 'Verwendung',
          },
          {
            content: 'Wie schneiden die Akkutypen in ökologischen Aspekten ab?',
            image: `${baseUrl}img/med_bat.svg`,
            imageAlign: 'top',
            title: 'Ökobilanz',
          },
          {
            content: 'Wie sieht es mit Lebensdauer oder Entsorgung aus?',
            image: `${baseUrl}img/full_bat.svg`,
            imageAlign: 'top',
            title: 'Vor- und Nachteile',
          }
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
            <div className="mainContainer">
          <Features />
          <hr style={{ width: '60%', margin: 'auto', height: '1px', border: 'none', background: '#f0f0f0' }} />
          <Description />
          <hr style={{width: '60%', margin: 'auto', height: '1px', border: 'none', background: '#f0f0f0'}}/>
          <VHDPBoard />
          <hr style={{ width: '60%', margin: 'auto', height: '1px', border: 'none', background: '#f0f0f0' }} />
          <Advantages />
        </div>
      </div>
    );
  }
}

module.exports = Index;
