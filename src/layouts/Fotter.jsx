import { Footer } from 'flowbite-react';
import React from 'react';
import logo from '../assets/logo.png'

const Fotter = () => {
    return (
        <div  className="footer mt-8">
            <Footer container={true}>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Footer.Brand
        href="/"
        src={logo}
        alt="Chafie Logo"
        name="Chefai"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="Byomkesh All Right Reserve"
      year={2023}
    />
  </div>
</Footer>
        </div>
    );
};

export default Fotter;