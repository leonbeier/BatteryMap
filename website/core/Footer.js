/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Meistverwendet</h5>
            <a href={this.docUrl('lithium')}>
              Lithium
            </a>
            <a href={this.docUrl('nimh')}>
              NiMH
            </a>
             <a href={this.docUrl('bat')}>
              Einweg
            </a>
          </div>
          <div>
              <h5>Mehr Informationen</h5>
              <a href="http://akku-abc.de/" target="_blank">Akku abc</a>
              <a href="https://batterie-info.de/">BatterieInfo</a>
              <a href="https://www.umweltbundesamt.de/" target="_blank">Umweltbundesamt</a>                  
          </div>
          <div>
              <h5>Sonstiges</h5>
              <a href={`https://github.com/leonbeier/BatteryMap`}>GitHub</a>  
              <a href={`${this.props.config.baseUrl}docs/privacy`}>Privacy Policy</a>          
              <a href={`${this.props.config.baseUrl}docs/contact`}>Kontakt</a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
