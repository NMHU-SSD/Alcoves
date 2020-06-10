var Exhibit = {
  data() {
    return {
      alcove: null,
      isLoaded: false,
    };
  },
  async created() {
    try {
      this.alcove = await this.loadXMLDoc(this.$route.params.year);
      this.isLoaded = true;
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
            console.log(json);
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
  <div
    class="container-fluid"
    :class='"alcove" + $route.params.year'
    v-if="isLoaded"
  >
    <template v-for="t in alcove.title">
      <h1>{{ t }}</h1>
    </template>

    <template v-for="des in alcove.description">
      <p>{{ des }}</p>
    </template>
    <br /><br />

    <div class="row">
      <div
        v-for="exhibit in alcove.exhibits.exhibit"
        class="col-sm-12 col-md-6 col-lg-4 mb-4"
      >
        <div class="card h-100">
          <template v-if="exhibit.installation.image.length == null">
            <template v-for="src in exhibit.installation.image.source">
              <img
                v-lazy="'data' + src"
                class="card-img-top img-fluid"
                :alt='"Exhibits " + exhibit.attributes.id'
              />
            </template>
          </template>
          <template v-if="exhibit.installation.image.length > 1">
            <template v-for="src in exhibit.installation.image[0].source">
              <img
                v-lazy="'data' + src"
                class="card-img-top img-fluid"
                :alt='"Exhibits " + exhibit.attributes.id'
              />
            </template>
          </template>

          <div class="card-body d-flex flex-column">
            <h4 class="card-title">Alcove {{exhibit.attributes.id}}</h4>
            <p class="card-text lead">{{exhibit.attributes.dates}}</p>
            <router-link
              class="mt-auto btn btn-lg btn-block btn-secondary"
              :to='"/exhibits/" + $route.params.year + "/gallery/" + exhibit.attributes.id'
            >
              View Album</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
};
