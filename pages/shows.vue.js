var Shows = {
  template: `
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 pt-5 pb-5">
        <div class="col mb-4">
          <div class="card ">
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
              Forty five artists from across the state of New Mexico were exhibited five at a time every five
              weeks from March 2012 – April 2013
              </p>
              <router-link class="btn btn-secondary btn-block" to="exhibits/2012">
                View Gallery
              </router-link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card ">
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
              Thirty five artists in total exhibited five at a time, rotating every eight weeks from March 2016 -
              2017.
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
              Unexpected museum closure due to the COVIS-19 pandemic limited Alcoves 20/20 to twenty
              artists exhibiting from August 10, 2019 – May 2, 2021.
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
