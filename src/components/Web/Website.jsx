import React from 'react'

function Website() {
  return (
    <div className='all_codes'>
          <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className="logo" src="./img/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="Home active"
                    aria-current="page"
                    href="https://gta-b.vercel.app/"
                  >
                    <h5>Home</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Games active" aria-current="page" href="#">
                    <h5>Games</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Support active" aria-current="page" href="#">
                    <h5>Store</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Store active" aria-current="page" href="#">
                    <h5>About</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Home active" aria-current="page" href="#">
                    <h5>Login</h5>
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="inp form-control me-2"
                  type="search"
                  placeholder="Search Rockstar games..."
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <b>Search</b>
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images3.alphacoders.com/134/1343866.jpeg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.chromethemer.com/download/hd-wallpapers/gta-5-7680x4320.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.alphacoders.com/563/563020.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images6.alphacoders.com/134/1344450.jpeg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3139093-f1c4-4621-b7bc-30aeeff7178a/dgj1z72-794acdcf-4524-4903-a4e3-cb58fcc65330.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzMTM5MDkzLWYxYzQtNDYyMS1iN2JjLTMwYWVlZmY3MTc4YVwvZGdqMXo3Mi03OTRhY2RjZi00NTI0LTQ5MDMtYTRlMy1jYjU4ZmNjNjUzMzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p4u6L7QYgw0QpyZCQc16FHJswYEhnCD7L0bT63BqIiI"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          <h1 className="character2">GTA - 6 Main CHARACTERS</h1>
          <div className="wrapper">
            <div className="slide-show">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21cfdc2-1c17-4887-8bc0-88de589c1859/dgj9r6q-9f96694e-12c2-4b9c-97a0-1a0747105115.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMWNmZGMyLTFjMTctNDg4Ny04YmMwLTg4ZGU1ODljMTg1OVwvZGdqOXI2cS05Zjk2Njk0ZS0xMmMyLTRiOWMtOTdhMC0xYTA3NDcxMDUxMTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FiJvPCYCw5Ytji3sLid8l6rdXTsuCVsCiIf53zJmAGc"
                alt=""
              />
              <div className="info">
                <h1>Jason</h1>
                <p>
                  One of the main character. In GTA 6 he's a tall, white male in his
                  late 20s, who is a member of a criminal organisation in Vice City.
                </p>
                <a href="https://www.gtabase.com/gta-6/characters/" target="_blank">
                  <button className="slide__btn">Read More</button>
                </a>
              </div>
            </div>
            <div className="slide-show">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/47775f71-e767-40da-aa51-05bf1d68d6a1/dgj4tye-9d28a1a8-76e7-4997-9e62-2ba5791a0d40.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ3Nzc1ZjcxLWU3NjctNDBkYS1hYTUxLTA1YmYxZDY4ZDZhMVwvZGdqNHR5ZS05ZDI4YTFhOC03NmU3LTQ5OTctOWU2Mi0yYmE1NzkxYTBkNDAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JRj4YJ42wMiEFJtrAZrrFCPb8j0xAjYbNpYqm2QXkrs"
                alt=""
              />
              <div className="info">
                <h1>Lucia Armendariz </h1>
                <p>One of the main character, partner of Jason.</p>
                <a href="https://gta.fandom.com/wiki/Lucia" target="_blank">
                  <button className="slide__btn">Read More</button>
                </a>
              </div>
            </div>
            <div className="slide-show">
              <img
                src="https://assets1.ignimgs.com/thumbs/userUploaded/2021/12/15/franklingbr-1639606669854.png"
                alt=""
              />
              <div className="info">
                <h1>Franclin Clinton</h1>
                <p>
                  He was not seen in the first trailer of Grand Theft Auto 6 but he is
                  expected to be back in the upcoming game of GTA6.
                </p>
                <a
                  href="https://www.indiatvnews.com/technology/news/franklin-clinton-expected-to-be-back-in-gta-6-know-more-2023-12-05-905848"
                  target="_blank"
                >
                  <button className="slide__btn">Read More</button>
                </a>
              </div>
            </div>
          </div>{" "}
          <br />
          <br />
          <div className="films">
            <h1 className="m__title">GTA news</h1>
            <ul className="films__list">
              <li className="info__item">
                <h1 className="info__title">
                  <b>
                    When will GRAND THEFT AUTO 6 COME OUT or When will GTA 6 be
                    released on the internet?
                  </b>
                </h1>
                <p className="dis__six">
                  As of my last update in January 2022, Rockstar Games has not
                  officially announced a release date for Grand Theft Auto 6 (GTA 6).
                  Developing major video games like GTA 6 requires extensive work,
                  including game design, programming, testing and development, which
                  can take several years. Rockstar Games tries to keep details about
                  its projects secret until they are ready to be officially announced.
                  While GTA 6 has been the subject of rumors, leaks and speculation,
                  the company has not confirmed any specific release dates. It is very
                  important to rely on official announcements from Rockstar Games
                  regarding the release date of GTA 6. They usually announce release
                  dates through press releases, trailers and official statements on
                  their website and social media. As much as fans are eager for the
                  next installment in the Grand Theft Auto series, it is important to
                  be patient and wait for official confirmation from Rockstar Games
                  regarding the release date of GTA 6. Stay tuned to gaming news
                  sources and official Rockstar Games channels for more information.
                  any updates regarding the release of the game.
                  <b>
                    The GTA office channel on YouTube posted a GTA 6 trailer.I put the
                    trailer GTA 6 under the info
                  </b>
                </p>
                <p className="twentyfv">
                  The GTA 6 release date is expected to fall between January and April
                  2025 for Xbox Series X|S and PlayStation 5. Rockstar Games revealed
                  a 2025 launch window in the GTA 6 trailer, and a Take-Two investor
                  call narrowed it down to Q1 2025. The GTA 6 PC release is happening
                  later, and will likely be as far as Q1 2026
                </p>
                <p />
              </li>
              <div className="iframe-h1">
                <iframe
                  className="iframe"
                  width={500}
                  height={500}
                  src="https://www.youtube.com/embed/QdBZY2fkU-0"
                  title="Grand Theft Auto VI Trailer 1"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
                <a href="https://www.youtube.com/embed/QdBZY2fkU-0" target="_blank">
                  <h1 className="h1__gta">GTA 6 TRAILER</h1>
                </a>
              </div>
            </ul>
          </div>
          <section className="update">
            <div className="title__update">
              <h1 className="title__up">
                What will change a lot in the release of GTA 6?
              </h1>
            </div>
            <div className="container">
              <ul className="update__list">
                <li className="update__item">
                  <img
                    src="https://imageio.forbes.com/specials-images/imageserve/656f3144c951ffbd17ea2220/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                    alt=""
                  />
                  <div className="update__item--inner">
                    <b>
                      <h3 className="h1__up">Change of main characters</h3>
                    </b>
                    <p>
                      The central protagonist featured in the GTA 6 reveal, Lucia is
                      shown committing armed robbery and in prison. Her character art
                      features her wearing an ankle monitor device. Lucia's partner in
                      crime is officially unnamed (but rumored to be named Jason based
                      on leaks) with only one word to say in the first trailer.
                    </p>
                  </div>
                </li>
                <li className="update__item">
                  <img src="https://i.redd.it/i9dlhvxad0q91.png" alt="" />
                  <div className="update__item--inner">
                    <b>
                      <h3 className="h1__up">New Menu Design</h3>
                    </b>
                    <p>
                      Immediately access everything GTA Online has to offer right from
                      the main menu, including the latest and most popular updates.
                    </p>
                  </div>
                </li>
                <li className="update__item">
                  <img
                    src="https://i.ytimg.com/vi/QdBZY2fkU-0/maxresdefault.jpg"
                    alt=""
                  />
                  <div className="update__item--inner">
                    <b>
                      <h3 className="h1__up">Stunning Visuals</h3>
                    </b>
                    <p>
                      Enhanced levels of fidelity and performance with new graphics
                      modes featuring up to 4K resolution, up to 60 frames per second,
                      HDR options, ray tracing, improved texture qualities, and more.
                    </p>
                  </div>
                </li>
                <li className="update__item">
                  <img
                    src="https://fwmedia.fandomwire.com/wp-content/uploads/2023/09/10121455/GTA-6-1.jpg"
                    alt=""
                  />
                  <div className="update__item--inner">
                    <b>
                      <h3 className="h1__up">Faster Loading</h3>
                    </b>
                    <p>
                      Quicker access to the action as the world of Los Santos and
                      Blaine County load in faster than ever before.
                    </p>
                  </div>
                </li>
                <li className="update__item">
                  <img
                    src="https://preview.redd.it/how-to-make-robberys-more-immersive-in-gta-6-v0-w3pla8jzsodc1.jpeg?width=1080&crop=smart&auto=webp&s=0723ed488e6fd3b72b8fa4358c5a2d2ddbe3a522"
                    alt=""
                  />
                  <div className="update__item--inner">
                    <b>
                      <h3 className="h1__up">Immersive Controls</h3>
                    </b>
                    <p>
                      Feel new levels of responsiveness with Haptic Feedback and
                      dynamic resistance via the Adaptive Triggers on PlayStation 5's
                      DualSense wireless controller, from directional damage to
                      weather effects, rough road surfaces to explosions, and much
                      more.
                    </p>
                  </div>
                </li>
                <li className="update__item">
                  <img
                    src="https://cdn.mos.cms.futurecdn.net/wGAzi2wKVye9ncV9bGRWmP.jpg"
                    alt=""
                  />
                  <div className="update__item--inner">
                    <b>
                      <h3 className="h1__up">3D Audio</h3>
                    </b>
                    <p>
                      Hear the sounds of the world with pinpoint precision: the
                      throttle of a stolen supercar, the rattle of neighboring
                      gunfire, the roar of a helicopter overhead, and more.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="b__now">
              <h1 className="Buy__Now">Buy Now!</h1>
            </div>
            <div className="container dfg">
              <ul className="first__card">
                <a href="#">
                  <div className="card__b">
                    <div className="img__b">
                      <img
                        src="https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/mYn2ETBKFct26V9mJnZi4aSS.png"
                        alt=""
                      />
                    </div>
                    <div className="intro__b">
                      <h2>Grand Theft Auto Online</h2>
                      <div className="span">
                        <span>
                          Includes<b>GTA Online</b>
                        </span>
                      </div>
                      <div className="users">
                        <span className="users">
                          Play Station 5 | XBOX SERIES X | S
                        </span>
                      </div>
                      <div className="button__download">
                        <button className="btn__download">DOWNLOAD</button>
                      </div>
                    </div>
                  </div>
                  <ul className="second__card">
                    <div className="card__b">
                      <div className="img__b">
                        <img src="./img/gta6.jpg" alt="" />
                      </div>
                      <div className="intro__b">
                        <h2>Grand Theft Auto 6</h2>
                        <div className="span">
                          <span>
                            Includes<b>GTA 6</b>
                          </span>
                        </div>
                        <div className="users">
                          <span className="users__pl">
                            Play Station 5 | XBOX SERIES X | XBOXONE{" "}
                          </span>
                        </div>
                        <div className="button__download">
                          <button className="btn__download">DOWNLOAD</button>
                        </div>
                      </div>
                    </div>
                  </ul>
                </a>
              </ul>
            </div>
            <a href="#"></a>
          </section>
        </div>
        <a href="#"></a>
        <footer className="footer">
          <div className="bg">
            <div className="footer__title">
              <h1 className="f__title">ROCKSTAR GAMES</h1>
            </div>
            <ul className="subcribe__list">
              <li className="subcribe__item">
                <a href="https://www.youtube.com/@Gta_VI_Rockstar" target="_blank">
                  <h4>Subscribe</h4>
                </a>
              </li>
              <li className="subcribe__item">
                <a href="https://t.me/gta_vi_rockstar " target="_blank">
                  <h4>More information</h4>
                </a>
              </li>
              <li className="subcribe__item">
                <a href="#">
                  <h4>About us</h4>
                </a>
              </li>
            </ul>
            <div className="select">
              <select className="language" id="languageSelect">
                <option value="default">Select a language</option>
                <option value="english">English</option>
                <option value="ispancha">Español</option>
                <option value="russian">Русский</option>
                <option value="portuguese">عربي</option>
                <option value="chineese">中國人</option>
                <option value="italiano">Italiano</option>
                <option value="fransuzcha">Français</option>
                <option value="yaponcha">日本語</option>
                <option value="portugalcha">Português</option>
              </select>
            </div>
            <div className="pr">
              <ul className="privacy__list">
                <li className="privacy__item">
                  <a href="#">
                    <h5>Corporate</h5>
                  </a>
                </li>
                <li className="privacy__item">
                  <a href="#">
                    <h5>Privacy</h5>
                  </a>
                </li>
                <li className="privacy__item">
                  <a href="#">
                    <h5>Support</h5>
                  </a>
                </li>
                <li className="privacy__item">
                  <a href="#">
                    <h5>Contact us</h5>
                  </a>
                </li>
                <li className="privacy__item">
                  <a href="#">
                    <h5>Advertising</h5>
                  </a>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="s">
                  <a href="https://t.me/gta_vi_rockstar" target="_blank">
                    <img className="img__logo" src="./img/telegram.png" alt="" />
                  </a>
                </li>
                <li className="privacy__logo">
                  <a href="https://www.youtube.com/@Gta_VI_Rockstar" target="_blank">
                    <img className="img__logo" src="./img/youtube.png" alt="" />
                  </a>
                </li>
                <li className="privacy__logo">
                  <a
                    href="https://www.tiktok.com/@grand_theft_auto_vi__1?_t=8kwOFeRQUOj&_r=1"
                    target="_blank"
                  >
                    <img className="img__logo" src="./img/tik-tok.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__text">
              <div className="container">
                <div className="map">
                  <h5 className="vice__city">Vice City</h5>
                </div>
                <div className="f_rockstar">
                  <h5>Rockstar games</h5>
                </div>
                <div className="text">
                  <h4 className="Action__footer">Action Adventure game</h4>
                </div>
              </div>
            </div>
          </div>
        </footer></div>
  )
}

export default Website