export const Features = () => {

  return (
    <section
      className="flex h-[500vh] flex-col items-center justify-start"
    >
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] text-white [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <div className="relative h-full">
          <figure className="h-full">
            <img src="/main-screen.svg" className="h-full w-auto" />
          </figure>
          <figure >
            <img
              src="/command-palette.svg"
              className="absolute inset-0 h-full w-auto"
            />
          </figure>
          <figure >
            <img
              src="/devtools.svg"
              className="absolute inset-0 h-full w-auto"
            />
          </figure>
        </div>
        <p
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary">Preconfigured environments</span>
          <br />
          We detect your environment so you don't need to fiddle with
          configuration files.
        </p>
        <p
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary">Command Pallete</span>
          <br />
          Access and complete any action in seconds with the command palette.
        </p>
        <p
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary">Devtools</span>
          <br />
          We've bundled useful tools to help you get your work done faster and
          more efficiently.
        </p>
      </div>
    </section>
  );
};
