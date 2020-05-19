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
  <div class="container-fluid" v-if="isLoaded">
    <div class="text-center">
      <h1>ALCOVE IMAGE</h1>
    </div>

    <template v-for="t in alcove.title">
      <h1> {{ t }} </h1> 
    </template>
    
    <template v-for="des in alcove.description">
      <p> {{ des }} </p> 
    </template>
    <br><br>

    <div class="row ">
      <template v-for="ex in alcove.exhibits.exhibit">

        <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-if="ex.installation.image[0] ">
          <div
            class="card"
            v-for="s in ex.installation.image[0].source">
            <img
              v-lazy="'data' + s"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div
              class="card-body"
              v-for="c in ex.installation.image[0].caption"
            >
              <h5 class="card-title">Alcoves {{ex.attributes.id}}</h5>
              <p class="card-text">
                <p>{{ex.attributes.dates}}</p>
              </p>
              <router-link
                class="btn btn-secondary btn-block"
                :to='"/exhibits/" + $route.params.year + "/gallery/" + ex.attributes.id'>
                View Album
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div> 
  `,
};
