class Header extends HTMLElement {
    connectedCallback() {

        const className = window.location.pathname ? "nav-link active" : "nav-link"

        const { user } = JSON.parse(localStorage.getItem('login'))

        window.logout = () => {
            localStorage.removeItem('login')
            return window.location.href = "/login.html"
        }

        this.innerHTML = `
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">PUMBA</a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class=${className} aria-current="page" href="/home.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class=${className} href="/products.html">Products</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end align-items-end">
                            <li class="nav-item align-items-end">
                                <p class="nav-link active m-0">${user}</p>
                            </li>
                            <li class="nav-item align-items-end">
                                <p class="nav-link active m-0" style="cursor: pointer" aria-current="page" onclick="logout()">Logout</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
    }
}

customElements.define('main-header', Header);