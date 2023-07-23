function Footer() {
  return (
    <div className="flex-col w-screen flex justify-center items-center border-t border-black">
      <div className="w-full flex items-end px-4 py-12">
        <div className="max-w-4xl m-auto flex-1 flex max-md:flex-col max-md:justify-center md:justify-between max-md:items-center md:items-end max-md:gap-10">
          <div className="flex-col flex justify-center items-start max-md:items-center gap-6 text-black">
            <div className="text-xl font-medium font-FamiljenGrotesk">
              Contact Info
            </div>
            <div className="flex-col flex items-start gap-6 text-base leading-[19px] font-Inter">
              <div className="flex-col flex items-start gap-6">
                <div className="flex items-start gap-2">
                  <img
                    src="/images/Footer/mail.svg"
                    alt="mail"
                    className="h-6 w-6"
                  />
                  <div>bgin-admin@mail.bgin-global.org</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <img
              src="/images/Footer/Extra-Icons.svg"
              alt="Extra Icons"
              className="h-8 w-8"
            />
            <img
              src="/images/Footer/Extra-Icons-2.svg"
              alt="Extra Icons"
              className="h-8 w-8"
            />
            <img
              src="/images/Footer/Extra-Icons-3.svg"
              alt="Extra Icons"
              className="h-8 w-8"
            />
            <img
              src="/images/Footer/Extra-Icons-4.svg"
              alt="Extra Icons"
              className="h-8 w-8"
            />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center p-4 text-base leading-[19px] text-black font-Inter border-t border-black">
        <div>© Copyright 2023 by BGIN</div>
      </div>
    </div>
  );
}
export default Footer;
