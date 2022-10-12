<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["competitions"]),
    ...mapState(["allCompetitions"]),
  },

  methods: {
    ...mapActions(["getCompetitions"]),
    ...mapActions(["getAllCompetitions"]),
  },

  async created() {
    await this.getAllCompetitions();
    // await this.getCompetitions();
  },
};
</script>

<template>
  <div class="page">
    <nav id="colorlib-main-nav" role="navigation">
      <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle active"
        ><i></i
      ></a>
      <!-- <h2>Hello</h2> -->
      <div class="js-fullheight colorlib-table">
        <div
          class="img"
          style="
            background-image: url(https://www.commbox.io/wp-content/uploads/2021/01/663-1.jpg);
          "
        ></div>
        <div class="colorlib-table-cell js-fullheight">
          <div class="row no-gutters">
            <div class="col-md-12 text-center">
              <!-- <h1 class="mb-4">
                <a href="index.html" class="logo"
                  ><img src="/images/fashion.png" alt="" style="width: 50%"
                /></a>
              </h1> -->
              <h2>Hackathon</h2>

              <!-- <h3 class="mb-4">Season One</h3> -->
              <p>
                <router-link
                  to="/sign-up"
                  class="btn btn-primary py-3 px-4 my-5"
                  >Register Now
                </router-link>
              </p>
              <!-- <ul>
                <li class="active">
                  <a href="index.html"><span>Home</span></a>
                </li>
                <li>
                  <a href="about.html"><span>About</span></a>
                </li>
                <li>
                  <a href="model.html"><span>Models</span></a>
                </li>
                <li>
                  <a href="blog.html"><span>Blog</span></a>
                </li>
                <li>
                  <a href="contact.html"><span>Contact</span></a>
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div id="colorlib-page">
      <header>
        <div class="container">
          <div class="colorlib-navbar-brand">
            <!-- <a class="colorlib-logo" href="index.html">
              <img src="/assets/images/fashion.png" alt="" style="width: 20%"
            /></a> -->
          </div>
          <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"
            ><i></i
          ></a>
        </div>
      </header>
      <section
        id="home"
        class="video-hero js-fullheight"
        style="
          height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div class="overlay"></div>

        <div class="container">
          <div
            class="row js-fullheight justify-content-center d-flex align-items-center"
          >
            <div class="col-md-8 mt-20">
              <div class="text text-center">
                <span class="subheading">Welcome to</span>
                <h2>HACKATHON</h2>
                <!-- <h2>A</h2>
                <h2>THON</h2> -->
                <!-- <h3 class="mb-4">Season One</h3> -->
                <p>
                  <a href="#competitions" class="btn btn-primary py-3 px-4 my-5"
                    >View Competitions</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-no-pt ftco-no-pb ftco-about-section">
        <div class="container-fluid px-0">
          <div class="row d-md-flex text-wrapper">
            <div
              class="one-half img"
              style="
                background-image: url('https://miro.medium.com/max/1400/0*8kXW-5bmIGH8vxBI');
                background-size: cover;
              "
            ></div>
            <div
              class="one-half half-text d-flex justify-content-end align-items-center"
            >
              <div class="text-inner pl-md-5">
                <span class="subheading">HACKATHON</span>
                <!-- <h3 class="heading">Stylistic A Professional Model Agency</h3> -->
                <p>
                  THE 2023 HACKATHON SEASON IS HERE AND THIS IS GONNA BE THE
                  BEST SEASON YET!
                </p>
                <p>
                  It's a talent exhibition which is open to all Youths (Group or
                  individual) that we believe will develop the youths to compete
                  at National and International Level.
                </p>
                <ul class="my-4">
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Even the
                    all-powerful Pointing.
                  </li>
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Behind
                    the word mountains.
                  </li>
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span>
                    Separated they live in Bookmarksgrove.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section bg-dark">
        <div class="container">
          <h2 class="subheading text-center royal__talent">
            WHAT IS HACKATHON?
          </h2>
          <div class="row">
            <div class="col-md-3">
              <div class="services ftco- text-center">
                <div
                  class="icon d-flex justify-content-center align-items-center"
                >
                  <span class="flaticon-quality"></span>
                </div>
                <div class="info mt-4">
                  <!-- <h3 class="mb-4">Fashion Shows</h3> -->
                  <p>A platform that will showcase various talents in BCS.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="services ftco- text-center">
                <div
                  class="icon d-flex justify-content-center align-items-center"
                >
                  <span class="flaticon-megaphone"></span>
                </div>
                <div class="info mt-4">
                  <!-- <h3 class="mb-4">Corporate Events</h3> -->
                  <p>
                    An interactive archive that librates the spirit of the
                    youths.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="services ftco- text-center">
                <div
                  class="icon d-flex justify-content-center align-items-center"
                >
                  <span class="flaticon-photo-camera"></span>
                </div>
                <div class="info mt-4">
                  <!-- <h3 class="mb-4">Commercial Photo Shots</h3> -->
                  <p>
                    An effective platform to reach out to an increased number of
                    youths and motivate them positively.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="services ftco- text-center">
                <div
                  class="icon d-flex justify-content-center align-items-center"
                >
                  <span class="flaticon-shopping-bag"></span>
                </div>
                <div class="info mt-4">
                  <!-- <h3 class="mb-4">Exhibitions/Trade Salws Shows</h3> -->
                  <p>
                    A channel to hunt talent in the fold as well as enhancing
                    and promoting them to become stars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section b">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 mb-5 heading-section text-center">
              <span class="subheading">Application</span>
            </div>
          </div>
          <div class="text-center">
            <p>Select a Competition Category</p>
            <p>Submit Application</p>
            <!-- <p>
              Contestants get to submit their audition ideas based on their
              category.
            </p> -->
            <p>Audition is scheduled to start on.</p>
            <!-- <p>We have 3 statges, the Talent, role Model and Originality.</p> -->
          </div>
        </div>
        <p class="text-center">
          <router-link to="/sign-up" class="btn btn-dark py-3 px-4 my-5"
            >Register Now</router-link
          >
        </p>
      </section>

      <section class="ftco-section ftco-no-pt ftco-no-pb bg-dark">
        <div class="container-fluid px-4">
          <div class="row d-flex">
            <div class="col-md-6 mx-auto d-flex align-items-center ftco- pt-5">
              <div class="heading-section text-center">
                <h4 class="text-uppercase">Categories</h4>
                <ul class="my-4 talent px-0">
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> For all
                    BCS Talents.
                  </li>
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Singing
                  </li>
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Dancing
                  </li>

                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Dancing
                  </li>

                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Drama
                  </li>

                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span>
                    Instrumantal
                  </li>

                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Poetry
                  </li>

                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Ball
                    Juggling
                  </li>

                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Marshal
                    Arts
                  </li>
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span
                    >Gymnastics
                  </li>
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Etc.
                  </li>
                </ul>
              </div>
            </div>
            <!-- <div class="col-md-6 d-flex align-items- ftco-animate pt-5">
              <div class="heading-section text-center">
                <h4 class="text-uppercase">Talent Stages</h4>
                <ul class="my-4 talent px-0">
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span>Audition
                  </li>
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Finals
                  </li>
                  <li>
                    <span class="ion-ios-checkmark-circle mr-2"></span> Grand
                    Finale
                  </li>
                </ul>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <!-- <section class="ftco-section pb-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 mb-5 heading-section text-center ftco-animate">
              <span class="subheading">Finals</span> <br />
              <br />
              <span class="subheading">Date: 1st - 14th of November 2021</span>
              <span class="subheading">Bcs gaba hall</span>
            </div>
          </div>
          <div class="text-center">
            <p>Only 20 Contestants will be chosen for the FInal.</p>
            <p>
              This requires the physical presence of the contestants and
              everyone involved in the show.
            </p>
            <p>
              The Contestants wil be camped for 2 weeks for preparation in order
              to attend the Finals and Grand Finale.
            </p>
          </div>
        </div>
      </section> -->

      <section class="ftco-section" id="competitions">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 mb-5 heading-section text-center ftco-">
              <span class="subheading">Competitions</span>
            </div>
          </div>
          <div class="row d-flex">
            <div
              class="col-md-4 d-flex ftco-"
              v-for="competition in allCompetitions"
              :key="competition.id"
              @click="$router.push(`/competitiions/${competition.id}`)"
            >
              <div class="blog-entry bg-dark align-self-stretch">
                <span
                  class="block-20"
                  style="
                    background-image: url('https://miro.medium.com/max/1400/0*8kXW-5bmIGH8vxBI');
                  "
                >
                </span>
                <div class="text p-4 d-block">
                  <div class="meta mb-3"></div>
                  <h3 class="heading mt-3">
                    <router-link to="" href="#">
                      {{ competition.name }}
                    </router-link>
                  </h3>
                  <p>{{ competition.remark }}</p>
                </div>
              </div>
            </div>
            <!-- <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry bg-dark align-self-stretch">
                <a
                  href="#"
                  class="block-20"
                  style="
                    background-image: url('../../public/assets/images/freestyle.jpeg');
                  "
                >
                </a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3"></div>
                  <h3 class="heading mt-3"><a href="#">Freestyle Show</a></h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry bg-dark align-self-stretch">
                <a
                  href="#"
                  class="block-20"
                  style="
                    background-image: url('../../public/assets/images/originality.jpeg');
                  "
                >
                </a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3"></div>
                  <h3 class="heading mt-3"><a href="#">Originality Show</a></h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry bg-dark align-self-stretch">
                <a
                  href="#"
                  class="block-20"
                  style="
                    background-image: url('../../public/assets/images/repmycity.jpeg');
                  "
                >
                </a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3"></div>
                  <h3 class="heading mt-3"><a href="#">I Rep My City</a></h3>
                </div>
              </div>
            </div> -->
          </div>

          <!-- <div class="row d-flex">
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry bg-dark align-self-stretch">
                <a
                  href="#"
                  class="block-20"
                  style="
                    background-image: url('../../public/assets/images/faceoff.jpeg');
                  "
                >
                </a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3"></div>
                  <h3 class="heading mt-3"><a href="#">Faceoff Show</a></h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry bg-dark align-self-stretch">
                <a
                  href="#"
                  class="block-20"
                  style="
                    background-image: url('../../public/assets/images/grandfinale.jpeg');
                  "
                >
                </a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3"></div>
                  <h3 class="heading mt-3"><a href="#">Grand Finals</a></h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry bg-dark align-self-stretch">
                <a
                  href="#"
                  class="block-20"
                  style="
                    background-image: url('../../public/assets/images/repmycity.jpeg');
                  "
                >
                </a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3"></div>
                  <h3 class="heading mt-3"><a href="#">I Rep My City</a></h3>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </section>
      <section class="ftco-section bg-dark">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 mb-0 heading-section text-center ftco-">
              <span class="subheading">Prizes</span> <br />
              <br />
            </div>
          </div>
          <div class="text-center">
            <div>
              <span class="position">FIRST POSITION </span>
              <p>-------</p>
            </div>

            <div>
              <span class="position">SECOND POSITION</span>
              <p>-------</p>
            </div>
            <div>
              <span class="position">THIRD POSITION</span>
              <p>-------</p>
            </div>
          </div>
        </div>
      </section>
      <footer class="ftco-footer ftco-section img">
        <div class="overlay"></div>
        <div class="container">
          <div class="row mb-0">
            <div class="col-md-3">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2 logo">
                  <a href="#">Hackathon</a>
                </h2>
                <p>Season One.</p>
                <ul
                  class="ftco-footer-social list-unstyled float-md-left float-lft mt-5"
                >
                  <li class="ftco-">
                    <a href="#"><span class="icon-twitter"></span></a>
                  </li>
                  <li class="ftco-">
                    <a href="#"><span class="icon-facebook"></span></a>
                  </li>
                  <li class="ftco-">
                    <a href="#"><span class="icon-instagram"></span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <!-- <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Recent Blog</h2>
                            <div class="block-21 mb-4 d-flex">
                                <a class="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></a>
                                <div class="text">
                                    <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control
											about</a></h3>
                                    <div class="meta">
                                        <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                        <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                        <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="block-21 mb-4 d-flex">
                                <a class="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></a>
                                <div class="text">
                                    <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control
											about</a></h3>
                                    <div class="meta">
                                        <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                        <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                        <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
            </div>
            <div class="col-md-2">
              <!-- <div class="ftco-footer-widget mb-4 ml-md-4">
                            <h2 class="ftco-heading-2">Site Links</h2>
                            <ul class="list-unstyled">
                                <li><a href="#" class="py-2 d-block">Home</a></li>
                                <li><a href="#" class="py-2 d-block">About</a></li>
                                <li><a href="#" class="py-2 d-block">Model</a></li>
                                <li><a href="#" class="py-2 d-block">Services</a></li>
                                <li><a href="#" class="py-2 d-block">Blog</a></li>
                            </ul>
                        </div> -->
            </div>
            <div class="col-md-3">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have a Question?</h2>
                <div class="block-23 mb-3">
                  <ul>
                    <li>
                      <a href="#">
                        <span class="icon icon-envelope"></span>
                        <span class="text">hackathon@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
