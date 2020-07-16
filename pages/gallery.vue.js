var Gallery = {
  data() {
    return {
      exhibit: null,
      alcove: null,
      isLoaded: false,
      artistFilter: "all",
    };
  },
  async created() {
    try {
      this.alcove = await this.loadXMLDoc(this.$route.params.year);
      this.isLoaded = true;
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
    findGalleryById(exhibits) {
      this.exhibit = exhibits.filter(this.matchGalleryId);
    },
    matchGalleryId(e) {
      return e.attributes.id === this.$route.params.id;
    },
    filterArtist: function (name) {
      this.artistFilter = name;
      // console.log(this.artistFilter);
    },
  },
  watch: {
    //watch for changes
    isLoaded: function () {
      //when page loads
      this.findGalleryById(this.alcove.exhibits.exhibit);
    },
  },
  updated: function () {
    this.$nextTick(function () {
      // initialize gallery
      initPhotoSwipeFromDOM(".gallery");
    });
  },
  template: `
    <div
      class="container-fluid"
      :class='"alcove" + $route.params.year'
      v-if="isLoaded"
    >
      <router-link class="btn btn-primary" :to='"/exhibits/" + $route.params.year '>
        All Albums
      </router-link>

      <template v-for="gallery in exhibit">
        <div class="container-fluid mt-5 mb-5">
          <h1>Acoves {{ gallery.attributes.id }} Gallery</h1>
          <b class="lead">{{ gallery.attributes.dates }}</b>
        </div>
        <div class="container-fluid p-3">
          <h3 class="mb-3">Filter by Artist</h3>
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item mb-2">
              <button
                v-if="artistFilter == 'all'"
                type="button"
                class="btn btn-secondary nav-link"
                @click="filterArtist('all')"
              >
                All
              </button>
              <button
                v-else
                type="button"
                class="btn btn-disabled nav-link"
                @click="filterArtist('all')"
              >
                All
              </button>
            </li>
            <li
              class="nav-item mb-2 active"
              v-for="artist in gallery.artists.artist"
            >
              <button
                v-if="artistFilter == artist.attributes.name"
                type="button"
                class="btn btn-secondary nav-link"
                @click="filterArtist(artist.attributes.name)"
              >
                {{artist.attributes.name}}
              </button>
              <button
                v-else
                type="button"
                class="btn btn-disabled nav-link"
                @click="filterArtist(artist.attributes.name)"
              >
                {{artist.attributes.name}}
              </button>
            </li>
          </ul>
        </div>

        <div
          id="gallery"
          class="gallery"
          itemscope
          itemtype="http://schema.org/ImageGallery"
        >
          <div class="list row">
            <template v-for="image in gallery.installation.image">
              <template v-if="artistFilter == 'all'">
                <figure
                  class="col-sm-12 col-md-6 col-lg-2 mb-3 p-2"
                  v-for="src in image.source"
                  itemprop="associatedMedia"
                  itemscope
                  itemtype="http://schema.org/ImageObject"
                >
                  <a :href="'data'+ src" itemprop="contentUrl" data-size="600x400">
                    <img
                      v-lazy="'data' + src"
                      class="img-thumbnail"
                      itemprop="thumbnail"
                      :alt='image.caption'
                    />
                  </a>

                  <figcaption v-for="c in image.caption" :itemprop="c" hidden>
                    {{c}}
                  </figcaption>
                </figure>
              </template>
            </template>

            <template v-for="artist in gallery.artists.artist">
              <template v-if="artistFilter == artist.attributes.name">
                <template v-for="image in artist.image">
                  <figure
                    class="col-sm-12 col-md-6 col-lg-2 mb-3 p-2"
                    v-for="src in image.source"
                    itemprop="associatedMedia"
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <a
                      :href="'data'+ src"
                      itemprop="contentUrl"
                      data-size="600x400"
                    >
                      <img v-lazy="'data' + src" :alt='image.caption' class="img-thumbnail" />
                    </a>
                    <figcaption
                      v-for="c in image.caption"
                      :itemprop="c"
                      hidden
                      v-html="c"
                    >
                      {{c}}
                    </figcaption>
                  </figure>
                </template>
              </template>
              <template v-if="artistFilter == 'all'">
                <template v-for="image in artist.image">
                  <figure
                    class="col-sm-12 col-md-6 col-lg-2 mb-3 p-2"
                    v-for="src in image.source"
                    itemprop="associatedMedia"
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <a
                      :href="'data'+ src"
                      itemprop="contentUrl"
                      data-size="600x400"
                    >
                      <img v-lazy="'data' + src" :alt='image.caption' class="img-thumbnail" />
                    </a>
                    <figcaption
                      v-for="c in image.caption"
                      :itemprop="c"
                      hidden
                      v-html="c"
                    >
                      {{c}}
                    </figcaption>
                  </figure>
                </template>
              </template>
            </template>
          </div>

          <!-- Root element of PhotoSwipe. Must have class pswp. -->
          <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
            <!-- Background of PhotoSwipe. 
                It's a separate element, as animating opacity is faster than rgba(). -->
            <div class="pswp__bg"></div>

            <!-- Slides wrapper with overflow:hidden. -->
            <div class="pswp__scroll-wrap">
              <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->
              <!-- don't modify these 3 pswp__item elements, data is added later on. -->
              <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
              </div>

              <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
              <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                  <!--  Controls are self-explanatory. Order can be changed. -->

                  <div class="pswp__counter"></div>

                  <button
                    class="pswp__button pswp__button--close"
                    title="Close (Esc)"
                  ></button>

                  <button
                    class="pswp__button pswp__button--share"
                    title="Share"
                  ></button>

                  <button
                    class="pswp__button pswp__button--fs"
                    title="Toggle fullscreen"
                  ></button>

                  <button
                    class="pswp__button pswp__button--zoom"
                    title="Zoom in/out"
                  ></button>

                  <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                  <!-- element will get class pswp__preloader--active when preloader is running -->
                  <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
                >
                  <div class="pswp__share-tooltip"></div>
                </div>

                <button
                  class="pswp__button pswp__button--arrow--left"
                  title="Previous (arrow left)"
                ></button>

                <button
                  class="pswp__button pswp__button--arrow--right"
                  title="Next (arrow right)"
                ></button>

                <div class="pswp__caption">
                  <div class="pswp__caption__center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
`,
};
