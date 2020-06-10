var Shows = {
  data() {
    return {
      isLoaded: false,
      description: [],
    };
  },
  async created() {
    try {
      var years = [2012, 2016, 2020];
      for (var i = 0; i < years.length; i++) {
        this.description.push(await this.loadXMLDoc(years[i]));
      }
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    // https://www.w3schools.com/xml/xml_http.asp
    // https://www.w3schools.com/xml/xml_parser.asp
    loadXMLDoc(year) {
      var xhttp = new XMLHttpRequest();
      return new Promise(function (res, rej) {
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var response = this.response;
            var parse = new DOMParser();
            var xmlDoc = parse.parseFromString(response, "text/xml");
            json = xmlToJson(xmlDoc);
            res(json.alcoves.description["#text"]); //return alcove by
          }
        };
        xhttp.open(
          "GET", // method
          "data/xml/alcoves" + year + ".xml", // url
          true // async
        );
        xhttp.send();
      });
    },
  },
  template: `
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 pt-5 pb-5">
        <div class="col mb-4">
          <div class="card h-100">
            <div class="alcove2012">
              <div class="card-img-top d-flex align-items-center p-5">
                <img
                  src="assets/logos/alcoves12_logo.png"
                  class="img-fluid"
                  alt="2012 Alcove show"
                />
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <h4 class="card-title">Alcoves 2012</h4>
              <p class="card-text">{{ description[0] }}</p>
              <router-link class="mt-auto btn btn-lg btn-block btn-secondary" to="exhibits/2012">
                View Gallery
              </router-link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <div class="alcove2016">
              <div class="card-img-top d-flex align-items-center p-5">
                <img
                  src="assets/logos/alcoves16_logo.png"
                  class="img-fluid"
                  alt="2016 Alcove show"
                />
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <h4 class="card-title">Alcoves 2016</h4>
              <p class="card-text">{{ description[1] }}</p>
              <router-link class="mt-auto btn btn-lg btn-block btn-secondary" to="exhibits/2016">
                View Gallery
              </router-link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <div class="alcove2020">
              <div class="card-img-top d-flex align-items-center p-5">
                <img
                  src="assets/logos/alcoves20_logo.png"
                  class="img-fluid"
                  alt="2020 Alcove show"
                />
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <h4 class="card-title">Alcoves 2020</h4>
              <p class="card-text">{{ description[2] }}</p>
              <router-link class="mt-auto btn btn-lg btn-block btn-secondary" to="exhibits/2020">
                View Gallery
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
