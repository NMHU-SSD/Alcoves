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
          console.error("Error:", error);
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
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 mb-6" v-for="art in articles">
        <p class="d-inline"><b>{{ art.date }} - </b></p>
        <component class="d-inline" v-bind="linkProps(art.url)"> {{ art.title }} </component>
      </div>
    </div>
  </div>
`,
};
