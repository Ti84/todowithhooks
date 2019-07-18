import React from 'react';
const Footer = () => {
  return (
    <footer>
      <section className="app__footer">
        <div className="footer__contain">
          <p>
            If you somehow got to this page, I just use this for my to do list.
            I took styling from{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://oldschool.runescape.com/"
            >
              https://oldschool.runescape.com/
            </a>
            . All of the styles and images you see here, were created by the
            fantastic team over there at Jagex.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
