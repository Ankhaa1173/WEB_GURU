class Navbar extends HTMLElement {
  Render() {
    return ` <header>
    <nav class="menu-bar">
      <a href="../index.html" class="logo">GURU</a>
      <!-- search bar -->
      <div class="search-bar">
        <div class="search-bar-wrapper">
          <input
            type="text"
            placeholder="Places to go, things to do, restaurants..."
          />
          <a href="/listPage/html.html" class="button"><p>Search</p></a>
          <!-- <button>Search</button> -->
        </div>
      </div>
      <div class="menu-end">
        <!--weather icon-->
        <img alt="weather" src="../assets/rain.png" class="weather icon" />

        <!--currency icon-->
        <div class="currency-dropdown">
          <div class="currency-dropdown-main">
            <p>USD</p>
            <img src="../assets/down-chevron.png" />
          </div>
          <div class="currency-dropdown-content">
            <p>MNT</p>
            <p>CNY</p>
            <p>EUP</p>
            <p>JPY</p>
          </div>
        </div>

        <!--location-->

        <div class="location">
          <img src="../assets/location-icon.png" />
          <div>
            <p class="text-small">Your location</p>
            <p>Sukhbaatar district</p>
          </div>
          <img src="../assets/down-chevron.png" />
        </div>

        <a href="../user_page/user_page.html" class="profile-pic"
          ><img src="/assets/account.png" alt=""
        /></a>
      </div>
    </nav>
  </header>`;
  }
  connectedCallback() {
    this.innerHTML = this.Render();
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldVal, newVal) {}

  adoptedCallback() {}
}

window.customElements.define("nav-bar", Navbar);
