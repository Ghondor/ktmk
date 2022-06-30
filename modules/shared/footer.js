const footerLinks = [
  { text: 'Home' },
  { text: 'About' },
  { text: 'Technologies' },
  { text: 'Careers' },
  { text: 'Incubator' },
  { text: 'Contact' },
];

const Footer = ({}) => {
  return (
    <footer className="w-11/12 md:w-10/12 xl:w-7/12 px-6 md:px-0 py-10 mx-auto border-t footer">
      <div className="flex justify-between mb-10 md:mb-20">
        <div className="hidden md:w-6/12 lg:w-8/12 md:flex md:flex-col xl:w-8/12">
          {footerLinks.map((link, index) => (
            <p className="footer-link" key={index}>
              {link.text}
            </p>
          ))}
        </div>
        <div className="w-full md:flex-1 flex flex-col md:flex-row justify-end items-start">
          <div>
            <h3 className="text-lg block"> Macedonia Office: </h3>
            <p className="text-sm">
              ul. Partizanska #14 <br />
              Struga 6330 <br />
              Republic of N. Macedonia
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-sm mb-16 md:mb-0">
        &copy;2020 Kennedy Technology. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
