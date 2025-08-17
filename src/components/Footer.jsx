function Footer() {
  return (
    <footer className="pt-8 pb-5 md:py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-[16px] leading-[150%] font-medium">
            Made with ❤️ and 🥑
          </div>
          <div className="flex items-center gap-6">
            <img src="assets/images/icon-instagram.svg" alt="icon instagram" />

            <img src="/assets/images/icon-bluesky.svg" alt="icon tiktok" />
            <img src="/assets/images/icon-tiktok.svg" alt="icon tiktok" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
