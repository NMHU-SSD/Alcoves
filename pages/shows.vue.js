var Shows = {
  template: `
  <div class="container-fluid">
    <br /><br />
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div class="col mb-4">
        <div class="card border-light bg-light">
          <div style="background-color: #404c5f;">
            <div class="card-img-top d-flex align-items-center pl-3 pr-3">
              <img
                src="assets/logos/alcoves12_logo.png"
                class="img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Alcoves 2012</h5>
            <p class="card-text">
              Series of 9 exhibitions, ect
            </p>
            <router-link class="btn btn-primary" to="exhibits/2012">
              View Gallery
            </router-link>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card border-light bg-light">
          <div style="background-color: #ee622d;">
            <div class="card-img-top d-flex align-items-center">
              <img
                src="assets/logos/alcoves16_logo.png"
                class="img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Alcoves 2016</h5>
            <p class="card-text">
              Series of 7 exhibitions
            </p>
            <router-link class="btn btn-primary" to="exhibits/2016">
              View Gallery
            </router-link>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card border-light bg-light">
          <div style="background-color: #a1ba3b;">
            <div class="card-img-top d-flex align-items-center">
              <img
                src="assets/logos/alcoves20_logo.png"
                class="img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Alcoves 2020</h5>
            <p class="card-text">
              Series of X exhibitions
            </p>
            <router-link class="btn btn-primary" to="exhibits/2020">
              View Gallery
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <br /><br />

   </div>
  `,
};
