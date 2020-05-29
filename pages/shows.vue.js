var Shows = {
  template: `
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 pt-5 pb-5">
        <div class="col mb-4">
          <div class="card">
            <div class="alcove2012">
              <div class="card-img-top d-flex align-items-center p-5">
                <img
                  src="assets/logos/alcoves12_logo.png"
                  class="img-fluid"
                  alt="2012 Alcove show"
                />
              </div>
            </div>
            <div class="card-body">
              <h4 class="card-title">Alcoves 2012</h4>
              <p class="card-text">
                Series of 9 exhibitions, ect
              </p>
              <router-link class="btn btn-secondary btn-block" to="exhibits/2012">
                View Gallery
              </router-link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <div class="alcove2016">
              <div class="card-img-top d-flex align-items-center p-5">
                <img
                  src="assets/logos/alcoves16_logo.png"
                  class="img-fluid"
                  alt="2016 Alcove show"
                />
              </div>
            </div>
            <div class="card-body">
              <h4 class="card-title">Alcoves 2016</h4>
              <p class="card-text">
                Series of 7 exhibitions
              </p>
              <router-link class="btn btn-secondary btn-block" to="exhibits/2016">
                View Gallery
              </router-link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <div class="alcove2020">
              <div class="card-img-top d-flex align-items-center p-5">
                <img
                  src="assets/logos/alcoves20_logo.png"
                  class="img-fluid"
                  alt="2020 Alcove show"
                />
              </div>
            </div>
            <div class="card-body">
              <h4 class="card-title">Alcoves 2020</h4>
              <p class="card-text">
                Series of X exhibitions
              </p>
              <router-link class="btn btn-secondary btn-block" to="exhibits/2020">
                View Gallery
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
