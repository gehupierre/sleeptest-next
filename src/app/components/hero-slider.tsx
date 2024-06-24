import Image from "next/image";

export function HeroSlider() {
  return (
    <div id="ri-grid" className="visual ri-grid">
      <div id="loader">
        <Image
          src="images/loading.gif"
          alt="loading..."
          width={150}
          height={150}
        />
      </div>
      <ul className="hidden">
        <li>
          <Image
            width={1280}
            height={480}
            alt="Banner step 1"
            src="images/banner0.jpg"
            className="hero-slider"
          />
        </li>
        <li>
          <Image
            width={1280}
            height={480}
            alt="Banner step 2"
            src="images/banner1.jpg"
            className="hero-slider"
          />
        </li>
        <li>
          <Image
            width={1280}
            height={480}
            alt="Banner step 3"
            src="images/banner2.jpg"
            className="hero-slider"
          />
        </li>
        <li>
          <Image
            width={1280}
            height={480}
            alt="Banner step 4"
            src="images/banner1.jpg"
            className="hero-slider"
          />
        </li>
        <li>
          <Image
            width={1280}
            height={480}
            alt="Banner step 1"
            src="images/banner2.jpg"
            className="hero-slider"
          />
        </li>
      </ul>
      <div className="title-wrapper">
        <div className="title-holder">
          <strong className="title">remember sleeping like this?</strong>
          <strong className="title">what happened?</strong>
          <strong className="title">know now for little or no cost...</strong>
          <strong className="title">...with a home sleep apnea test!</strong>
          <strong className="title home-sleep-test-slide">
            <Image
              width={640}
              height={160}
              alt="Banner CTA"
              src="images/call-to-action-banner.png"
            />
          </strong>
        </div>
      </div>
    </div>
  );
}
