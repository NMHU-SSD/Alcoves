var Shows = {
  template: `
  <div class="container-fluid">
    <br><br>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
      <div class="col mb-4" >
        <div class="card border-light bg-light">
          <div style="background-color: #404c5f;">
            <img
              src="assets/logos/alcoves12_logo.png"
              class="card-img-top text-center"
              alt="..."
            />
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
      <div class="col mb-4" >
        <div class="card border-light bg-light">
          <div style="background-color: #ee622d;">
            <img
              src="assets/logos/Alcoves16_logo.png"
              class="card-img-top"
              alt="..."
            />
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
      <div class="col mb-4" >
        <div class="card border-light bg-light">
          <div style="background-color: #a1ba3b;">
            <img
              src="assets/logos/Alcoves20_logo.png"
              class="card-img-top"
              alt="..."
            />
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
    <br><br>
  </div>
  `,
};
