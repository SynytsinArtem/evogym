import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a className="my-5 block duration-500 hover:text-primary-300" href="#">Massa orci senectus</a>
          <a className="my-5 block duration-500 hover:text-primary-300" href="#">Et gravida id et etiam</a>
          <a className="duration-500 hover:text-primary-300" href="#">Ullamcorper vivamus</a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <a className="my-5 block duration-500 hover:text-primary-300" href="#">Tempus metus mattis risus volutpat egesta.</a>
          <a className="block duration-500 hover:text-primary-300" href="#">(333)425-6825</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
