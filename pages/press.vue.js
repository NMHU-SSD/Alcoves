var Press = {
  data() {
    return {
      isLoaded: false,
      articles: null,
    };
  },
  mounted: function () {
    //onload
    this.getData();
  },
  methods: {
    //fetch file
    getData: function () {
      fetch("data/json/articles.json")
        .then((response) => response.json()) //convert to json
        .then((data) => {
          //get json
          this.articles = data.articles; //set as instance data object
        })
        .catch((error) => {
          // console.error("Error:", error);
        });
    },
    linkProps(url) {
      if (url.match(/^(http(s)?|ftp):\/\//)) {
        return {
          is: "a",
          href: url,
          target: "_blank",
          rel: "noopener",
        };
      }
      return {
        is: "router-link",
        to: url,
      };
    },
  },
  template: `
  <div class="container-fluid mt-5 pt-5">
    <div class="row article">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="art in articles">
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ art.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted"><i>{{ art.publisher }}</i></h6>
            <p class="card-text">
              <template v-if="art.date != ''">
                <b> {{ art.date }} </b> <br>
              </template>
              <template v-if="art.author != ''">
                {{ art.author }}
              </template>
            </p>
           <component class="mt-auto btn btn-lg btn-block btn-secondary" v-bind="linkProps(art.url)"> Read Article </component> 
          </div>
        </div>
      </div>
    </div>
  </div>
`,
};
