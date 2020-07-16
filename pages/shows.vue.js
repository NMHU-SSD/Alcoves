var Shows = {
  data() {
    return {
      isLoaded: false,
      alcoves: [],
    };
  },
  async created() {
    try {
      var years = [2012, 2016, 2020];
      for (var i = 0; i < years.length; i++) {
        this.alcoves.push(await this.loadXMLDoc(years[i]));
      }
    } catch (err) {
      // console.log(err);
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
            res(json.alcoves); //return alcove by
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
  
        <div class="col mb-4" v-for="alcove in alcoves">
          <div class="card h-100">
            <div :class="'alcove'+alcove.attributes.year">
              <div class="card-img-top d-flex align-items-center p-5">
                <img
                  :src="'assets/logos/alcoves'+alcove.attributes.year+'_logo.png'"
                  class="img-fluid"
                  :alt="alcove.attributes.year+ 'Alcove shows'"
                />
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <h4 class="card-title">{{ alcove.title['#text'] }}</h4>
              <p class="card-text">{{ alcove.description ['#text'] }}</p>
              <router-link class="mt-auto btn btn-lg btn-block btn-secondary" :to="'exhibits/'+alcove.attributes.year">
                View Gallery
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
};
