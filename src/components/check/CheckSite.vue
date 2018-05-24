<template>
  <div class="check">
    <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <router-link
          class="py-2 d-none d-md-inline-block"
          to="/">CheckME</router-link>
        <a
          class="py-2 d-none d-md-inline-block"
          href="#overall"
          v-smooth-scroll="{ duration: 1000, offset: -100 }">Overall</a>
        <a
          class="py-2 d-none d-md-inline-block"
          href="#perfomance"
          v-smooth-scroll="{ duration: 1000, offset: 0 }">Perfomance</a>
        <a
          class="py-2 d-none d-md-inline-block"
          href="#security"
          v-smooth-scroll="{ duration: 1000, offset: 0 }">Security</a>
        <a
          class="py-2 d-none d-md-inline-block"
          href="#other-improvements"
          v-smooth-scroll="{ duration: 1000, offset: 0 }">Other</a>
      </div>
    </nav>
    <!--OVERALL-->
    <div
      id="overall"
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-light bg-dark">
      <div
        :class="{'loading-wrapper': true, loaded: allReady}"
        style="z-index: 2; background: #343a40; position: absolute;">
        <div
          class="sk-folding-cube"
          style="top: 30%; left: -2%;">
          <div class="sk-cube1 sk-cube"/>
          <div class="sk-cube2 sk-cube"/>
          <div class="sk-cube4 sk-cube"/>
          <div class="sk-cube3 sk-cube"/>
        </div>
      </div>
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <div :class="{'display-4': true, 'font-weight-normal': true, 'text-success': overallScore >= 76, 'text-warning': overallScore > 50 && overallScore <= 75, 'text-danger': overallScore <= 50}">{{ overallScore }}<small class="text-muted">/100</small></div>
        <div
          class="progress"
          style="height: 20px;">
          <div
            :class="{'progress-bar': true, 'progress-bar-striped': true, 'progress-bar-animated': true, 'bg-danger': overallScore <= 50, 'bg-warning': overallScore > 50 && overallScore <= 75, 'bg-success': overallScore >= 76}"
            role="progressbar"
            :aria-valuenow="overallScore"
            :style="`width: ${overallScore}%`"
            aria-valuemin="0"
            aria-valuemax="100">{{ overallScore }}%</div>
        </div>
        <h1 :class="{'display-4': true, 'font-weight-normal': true, 'text-uppercase': true, 'text-success': overallScore >= 51, 'text-danger': overallScore <= 50}">{{ host }}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 58 58"
          style="enable-background:new 0 0 58 58;"
          xml:space="preserve"
          width="256px"
          height="256px">
          <g>
            <rect
              x="9"
              y="12"
              width="40"
              height="2"
              :fill="`${overallScore >= 70 ? 'limegreen' : 'darkred'}`"/>
            <rect
              x="9"
              y="28"
              width="40"
              height="2"
              :fill="`${overallScore >= 70 ? 'limegreen' : 'darkred'}`"/>
            <rect
              x="9"
              y="44"
              width="40"
              height="2"
              :fill="`${overallScore >= 70 ? 'limegreen' : 'darkred'}`"/>
            <path
              d="M0,0v58h58V0H0z M56,56H2V2h54V56z"
              :fill="`${overallScore >= 70 ? 'limegreen' : 'darkred'}`"/>
          </g>
        </svg>
        <div v-if="overallScore <= 50">
          <h1 class="text-uppercase">THIS SITE COULD BE BETTER</h1>
          <h5>Oh dear. That is... not great. But help is on the way!</h5>
        </div>
        <div v-else-if="overallScore >= 50 && overallScore <= 75">
          <h1 class="text-uppercase">THIS SITE IS GOOD</h1>
          <h5>You're really good at this! Now let's take your site from good to great.</h5>
        </div>
        <div v-else>
          <h1 class="text-uppercase">THIS SITE IS GREAT</h1>
          <h5>You're amazing! Let's all bask in the glow of your amazingness. Ahhh.</h5>
        </div>
      </div>
    </div>
    <!--/OVERALL-->
    <hr>
    <!--PERFOMANCE-->
    <div
      id="perfomance"
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div
        :class="{'loading-wrapper': true, loaded: perfomanceReady}"
        style="z-index: 2; background: #f8f9fa; position: absolute;">
        <div
          class="sk-folding-cube"
          style="top: 30%; left: -2%;">
          <div class="sk-cube1 sk-cube"/>
          <div class="sk-cube2 sk-cube"/>
          <div class="sk-cube4 sk-cube"/>
          <div class="sk-cube3 sk-cube"/>
        </div>
      </div>
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 :class="{'display-4': true, 'font-weight-normal': true, 'text-uppercase': true, 'text-success': perfomanceRating > 60, 'text-danger': perfomanceRating <= 40, 'text-warning': perfomanceRating > 40 && perfomanceRating <= 60}">Perfomance</h1>
        <div :class="{'display-4': true, 'font-weight-normal': true, 'text-success': perfomanceRating >= 40, 'text-danger': perfomanceRating < 40}">{{ perfomanceRating }}<small class="text-muted">/80</small></div>
        <div
          class="progress"
          style="height: 7px; width: 50%; margin: auto;">
          <div
            :class="{'progress-bar': true, 'bg-danger': perfomanceRating < 40, 'bg-warning': perfomanceRating >= 40 && perfomanceRating <= 60, 'bg-success': perfomanceRating > 60}"
            role="progressbar"
            :aria-valuenow="(perfomanceRating / 80) * 100"
            :style="`width: ${(perfomanceRating / 80) * 100}%`"
            aria-valuemin="0"
            aria-valuemax="100"/>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 398.528 398.528"
          style="enable-background:new 0 0 398.528 398.528; padding-top: 20px;"
          xml:space="preserve"
          width="256px"
          height="256px">
          <g>
            <path
              d="M315.232,9.015C311.883,3.276,305.681,0,298.244,0h-91.308c-10.9,0-22.224,7.113-26.93,16.924   L83.17,218.041c-3.162,6.56-2.967,13.518,0.471,19.037c3.463,5.568,9.592,8.811,16.859,8.966l71.662,0.902l-51.877,129.675   c-1.276,3.235-3.959,10.014,0.821,16.981c2.089,3.056,5.674,4.926,9.364,4.926h0.837c6.999,0,11.217-5.308,13.241-7.868   L312.176,180.17c7.153-8.966,4.202-17.013,3.121-19.354c-1.122-2.243-5.625-9.592-17.046-9.592h-53.34l69.8-122.985   C318.37,21.752,318.573,14.729,315.232,9.015z"
              :fill="`${perfomanceRating < 20 ? 'darkred' : 'limegreen'}`"/>
          </g>
        </svg>
        <h5 class="text-muted">Optimizing your website's performance is crucial to increasing traffic, improving conversion rates, generating more leads, and increasing revenue.</h5>
      </div>
      <div class="row">
        <!--Page size card-->
        <div
          class="col-4"
          style="border-right: 2px solid grey;">
          <h3 class="text-uppercase">Page Size</h3>
          <div
            class="progress"
            style="height: 7px; width: 50%; margin: auto;">
            <div
              :class="{'progress-bar': true, 'bg-danger': perfomancePageSize > 10000000, 'bg-warning': perfomancePageSize >= 3000000 && perfomancePageSize <= 10000000, 'bg-success': perfomancePageSize < 3000000}"
              role="progressbar"
              :aria-valuenow="(perfomancePageSize /10000000) * 100"
              :style="`width: ${ (perfomancePageSize /10000000) * 100}%`"
              aria-valuemin="0"
              aria-valuemax="100"/>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="128px"
            height="128px"
            viewBox="0 0 48.832 48.832"
            style="enable-background:new 0 0 48.832 48.832;"
            xml:space="preserve">
            <g>
              <g>
                <g>
                  <polygon
                    points="15.42,32.814 22.23,32.814 22.23,34.385 15.42,34.385 15.42,35.68 36.838,35.68 36.838,34.385 28.898,34.385      28.898,32.814 37.729,32.814 37.729,29.227 15.42,29.227    "
                    :fill="`${perfomancePageSize > 10000000 ? 'darkred' : 'limegreen'}`"/>
                  <polygon
                    points="9.489,11.231 41.957,11.231 41.957,24.209 44.739,24.209 44.739,8.449 6.707,8.449 6.707,17.14 9.489,17.14         "
                    :fill="`${perfomancePageSize > 10000000 ? 'darkred' : 'limegreen'}`"/>
                  <path
                    d="M0,39.799h14.523V18.013H0V39.799z M7.568,38.705c-0.386,0-0.7-0.312-0.7-0.699c0-0.386,0.314-0.699,0.7-0.699     c0.387,0,0.699,0.312,0.699,0.699S7.955,38.705,7.568,38.705z M2.1,20.113h10.325l-0.001,16.072H2.1V20.113z"
                    :fill="`${perfomancePageSize > 10000000 ? 'darkred' : 'limegreen'}`"/>
                  <path
                    d="M38.715,25.046v15.337h10.117V25.046H38.715z M43.979,25.68c0.121,0,0.22,0.101,0.22,0.221     c0,0.121-0.099,0.222-0.22,0.222c-0.123,0-0.223-0.101-0.223-0.222C43.756,25.78,43.855,25.68,43.979,25.68z M42.665,26.416     h2.623v0.212h-2.623V26.416z M43.891,39.721c-0.291,0-0.524-0.236-0.524-0.525c0-0.29,0.233-0.524,0.524-0.524     c0.289,0,0.525,0.234,0.525,0.524C44.416,39.484,44.18,39.721,43.891,39.721z M47.369,37.915     c-2.368,0.013-6.016,0.022-7.189,0.012V27.382l7.189-0.001V37.915z"
                    :fill="`${perfomancePageSize > 10000000 ? 'darkred' : 'limegreen'}`"/>
                </g>
              </g>
            </g>
          </svg>
          <h1 :class="{'display-4': true, 'font-weight-normal': true, 'text-uppercase': true, 'text-success': perfomancePageSize < 3000000, 'text-warning': perfomancePageSize >= 3000000 && perfomancePageSize <= 10000000,'text-danger': perfomancePageSize > 10000000}">{{ Math.floor(perfomancePageSize / 1000) }} <small class="text-uppercase">kb</small></h1>
          <div v-if="perfomancePageSize > 10000000">
            <h4 class="text-danger">We need to do a lot a work with this.</h4>
          </div>
          <div v-else-if="perfomancePageSize >= 3000000 && perfomancePageSize <= 10000000">
            <h4 class="text-warning">So, we still can handle that?</h4>
          </div>
          <div v-else>
            <h4 class="text-success">So fast! So light!</h4>
          </div>
          <h6 class="text-muted">The heavier the site page, the slower the load. For optimal performance, try to keep page size below 3MB.</h6>
          <h6 class="text-uppercase"><a
            style="text-decoration: none; color: black;"
            href="https://www.steckinsights.com/how-to-reduce-the-size-of-your-webpage/"
            target="_blank">Read More ></a></h6>
        </div>
        <!--Page requests card-->
        <div
          class="col-4"
          style="border-right: 2px solid grey;">
          <h3 class="text-uppercase">Page Requests</h3>
          <div
            class="progress"
            style="height: 7px; width: 50%; margin: auto;">
            <div
              :class="{'progress-bar': true, 'bg-danger': perfomancePageRequests > 100, 'bg-warning': perfomancePageRequests >= 30 && perfomancePageRequests <= 100, 'bg-success': perfomancePageRequests < 30}"
              role="progressbar"
              :aria-valuenow="perfomancePageRequests"
              :style="`width: ${perfomancePageRequests}%`"
              aria-valuemin="0"
              aria-valuemax="100"/>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            style="enable-background:new 0 0 60 60;"
            xml:space="preserve"
            width="128px"
            height="128px">
            <g>
              <path
                d="M50.975,19.694c-0.527-9-7.946-16.194-16.891-16.194c-5.43,0-10.688,2.663-13.946,7.008   c-0.075-0.039-0.155-0.066-0.231-0.103c-0.196-0.095-0.394-0.185-0.597-0.266c-0.118-0.047-0.238-0.089-0.358-0.131   c-0.197-0.069-0.397-0.13-0.6-0.185c-0.12-0.032-0.239-0.065-0.36-0.093c-0.22-0.05-0.444-0.088-0.67-0.121   c-0.105-0.016-0.209-0.036-0.315-0.048C16.676,9.523,16.341,9.5,16,9.5c-4.962,0-9,4.037-9,9c0,0.129,0.008,0.255,0.016,0.381   C2.857,21.148,0,25.899,0,30.654C0,37.737,5.762,43.5,12.845,43.5H18c0.552,0,1-0.447,1-1s-0.448-1-1-1h-5.155   C6.865,41.5,2,36.635,2,30.654c0-4.154,2.705-8.466,6.432-10.253L9,20.13V19.5c0-0.123,0.008-0.249,0.015-0.375l0.009-0.173   L9.012,18.75C9.006,18.667,9,18.584,9,18.5c0-3.859,3.14-7,7-7c0.309,0,0.614,0.027,0.917,0.067   c0.078,0.01,0.156,0.023,0.234,0.036c0.267,0.044,0.53,0.102,0.789,0.176c0.035,0.01,0.071,0.017,0.106,0.027   c0.285,0.087,0.563,0.198,0.835,0.321c0.07,0.032,0.139,0.066,0.208,0.1c0.241,0.119,0.477,0.25,0.705,0.398   C21.72,13.874,23,16.039,23,18.5c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.754-1.246-5.219-3.2-6.871   C24.666,7.879,29.388,5.5,34.084,5.5c7.744,0,14.178,6.135,14.848,13.887c-1.022-0.072-2.553-0.109-4.083,0.125   c-0.546,0.083-0.921,0.593-0.838,1.139c0.075,0.495,0.501,0.85,0.987,0.85c0.05,0,0.101-0.004,0.152-0.012   c2.224-0.336,4.543-0.021,4.684-0.002C54.49,22.372,58,26.661,58,31.472C58,37.001,53.501,41.5,47.972,41.5H44   c-0.552,0-1,0.447-1,1s0.448,1,1,1h3.972C54.604,43.5,60,38.104,60,31.472C60,25.983,56.173,21.06,50.975,19.694z"
                :fill="`${perfomancePageRequests > 100 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M38.293,34.207C38.488,34.402,38.744,34.5,39,34.5s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-7.999-7.999   c-0.092-0.093-0.203-0.166-0.326-0.217c-0.244-0.101-0.52-0.101-0.764,0c-0.123,0.051-0.233,0.124-0.326,0.217l-7.999,7.999   c-0.391,0.391-0.391,1.023,0,1.414C22.488,34.402,22.744,34.5,23,34.5s0.512-0.098,0.707-0.293L30,27.914v25.172l-6.293-6.293   c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l7.999,7.999c0.092,0.093,0.203,0.166,0.326,0.217   C30.74,56.473,30.87,56.5,31,56.5s0.26-0.027,0.382-0.077c0.123-0.051,0.233-0.124,0.326-0.217l7.999-7.999   c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L32,53.086V27.914L38.293,34.207z"
                :fill="`${perfomancePageRequests > 100 ? 'darkred' : 'limegreen'}`"/>
            </g>
          </svg>
          <h1 :class="{'display-4': true, 'font-weight-normal': true, 'text-uppercase': true, 'text-success': perfomancePageRequests < 30, 'text-warning': perfomancePageRequests >= 30 && perfomancePageRequests <= 100,'text-danger': perfomancePageRequests > 100}">{{ perfomancePageRequests }}</h1>
          <div v-if="perfomancePageRequests > 100">
            <h4 class="text-danger">Now that's a lot of requests.</h4>
          </div>
          <div v-else-if="perfomancePageRequests >= 30 && perfomancePageRequests <= 100">
            <h4 class="text-warning">Serious room for improvement.</h4>
          </div>
          <div v-else>
            <h4 class="text-success">You make this look easy.</h4>
          </div>
          <h6 class="text-muted">The more HTTP requests your website makes, the slower it becomes. Combine files to minimize the number of requests made.</h6>
          <h6 class="text-uppercase"><a
            style="text-decoration: none; color: black;"
            href="https://www.lifewire.com/minimize-http-requests-for-speed-3469521"
            target="_blank">Read More ></a></h6>
        </div>
        <!--Page speed card-->
        <div class="col-4">
          <h3 class="text-uppercase">Page Speed</h3>
          <div
            class="progress"
            style="height: 7px; width: 50%; margin: auto;">
            <div
              :class="{'progress-bar': true, 'bg-danger': perfomanceSiteSpeed > 10000, 'bg-warning': perfomanceSiteSpeed >= 3000 && perfomanceSiteSpeed <= 10000, 'bg-success': perfomanceSiteSpeed < 3000}"
              role="progressbar"
              :aria-valuenow="perfomanceSiteSpeed / 100"
              :style="`width: ${perfomanceSiteSpeed / 100}%`"
              aria-valuemin="0"
              aria-valuemax="100"/>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            style="enable-background:new 0 0 60 60; padding-top: 10px;"
            xml:space="preserve"
            width="128px"
            height="128px">
            <g>
              <path
                d="M60,30C60,13.458,46.542,0,30,0S0,13.458,0,30c0,8.485,3.547,16.153,9.229,21.615L9.197,51.64l0.891,0.792   c2.089,1.856,4.407,3.392,6.881,4.587c0.103,0.05,0.209,0.095,0.313,0.144c0.311,0.146,0.622,0.29,0.938,0.425   c0.195,0.083,0.393,0.16,0.59,0.24c0.229,0.092,0.458,0.186,0.689,0.272c0.237,0.089,0.477,0.171,0.716,0.254   c0.197,0.068,0.394,0.137,0.592,0.201c0.258,0.083,0.519,0.161,0.78,0.237c0.186,0.054,0.372,0.109,0.56,0.159   c0.268,0.073,0.537,0.141,0.807,0.206c0.188,0.045,0.377,0.089,0.566,0.131c0.268,0.059,0.536,0.116,0.807,0.167   c0.202,0.039,0.404,0.074,0.607,0.109c0.259,0.044,0.518,0.088,0.779,0.125c0.229,0.033,0.459,0.06,0.689,0.088   c0.238,0.029,0.476,0.059,0.716,0.082c0.284,0.027,0.569,0.046,0.854,0.065c0.191,0.013,0.381,0.03,0.574,0.039   C29.029,59.987,29.514,60,30,60c0.485,0,0.969-0.013,1.452-0.037c0.194-0.009,0.386-0.027,0.579-0.04   c0.281-0.019,0.563-0.037,0.842-0.064c0.245-0.023,0.487-0.054,0.73-0.083c0.223-0.027,0.446-0.053,0.668-0.085   c0.269-0.039,0.536-0.083,0.802-0.129c0.191-0.033,0.382-0.066,0.573-0.103c0.282-0.054,0.563-0.112,0.842-0.174   c0.173-0.038,0.345-0.078,0.517-0.119c0.287-0.069,0.573-0.141,0.856-0.218c0.164-0.045,0.328-0.092,0.491-0.14   c0.284-0.083,0.567-0.166,0.847-0.257c0.167-0.054,0.332-0.112,0.497-0.168c0.271-0.093,0.542-0.186,0.81-0.286   c0.188-0.071,0.374-0.147,0.561-0.221c0.24-0.096,0.48-0.189,0.717-0.29c0.266-0.114,0.528-0.237,0.791-0.358   c0.152-0.071,0.308-0.137,0.459-0.21c2.449-1.183,4.745-2.702,6.818-4.533l0.893-0.788l-0.031-0.025C56.429,46.205,60,38.514,60,30   z M2,30C2,14.561,14.561,2,30,2s28,12.561,28,28c0,8.057-3.425,15.325-8.89,20.438C43.543,46.238,36.941,44,29.939,44   c-6.971,0-13.55,2.219-19.104,6.386C5.403,45.276,2,38.03,2,30z M47.284,52.004c-0.456,0.358-0.919,0.704-1.394,1.032   c-0.126,0.087-0.251,0.175-0.378,0.26c-0.532,0.355-1.077,0.688-1.63,1.004c-0.122,0.07-0.242,0.142-0.365,0.21   c-0.597,0.33-1.207,0.637-1.825,0.921c-0.107,0.049-0.214,0.097-0.321,0.146c-0.651,0.29-1.311,0.559-1.982,0.798   c-0.049,0.018-0.099,0.033-0.149,0.05c-1.409,0.493-2.858,0.872-4.334,1.135c-0.087,0.016-0.173,0.032-0.26,0.047   c-0.701,0.118-1.409,0.209-2.12,0.273c-0.113,0.01-0.226,0.017-0.339,0.026C31.462,57.963,30.733,58,30,58   c-0.736,0-1.468-0.037-2.196-0.094c-0.114-0.009-0.228-0.016-0.341-0.026c-0.711-0.064-1.417-0.156-2.117-0.274   c-0.096-0.016-0.19-0.034-0.286-0.051c-0.728-0.13-1.45-0.283-2.163-0.47c-0.004-0.001-0.008-0.002-0.012-0.003   c-0.723-0.19-1.437-0.414-2.142-0.661c-0.059-0.021-0.118-0.039-0.177-0.06c-0.661-0.237-1.311-0.503-1.952-0.789   c-0.122-0.054-0.244-0.109-0.365-0.165c-0.605-0.28-1.201-0.582-1.786-0.906c-0.141-0.078-0.279-0.16-0.419-0.241   c-0.56-0.323-1.112-0.66-1.65-1.022c-0.13-0.087-0.255-0.18-0.383-0.27c-0.463-0.322-0.915-0.661-1.36-1.013   c-0.099-0.078-0.199-0.154-0.297-0.233C17.49,47.974,23.544,46,29.939,46c6.424,0,12.499,1.99,17.646,5.767   C47.486,51.847,47.385,51.925,47.284,52.004z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M30,8c0.553,0,1-0.447,1-1V5c0-0.553-0.447-1-1-1s-1,0.447-1,1v2C29,7.553,29.447,8,30,8z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M52.5,30c0,0.553,0.447,1,1,1h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2C52.947,29,52.5,29.447,52.5,30z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M7.5,30c0-0.553-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1s0.447,1,1,1h2C7.053,31,7.5,30.553,7.5,30z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M41.25,11.015c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.18,0.867-0.5l1-1.732   c0.276-0.479,0.112-1.09-0.366-1.366c-0.479-0.277-1.09-0.112-1.366,0.366l-1,1.732C40.607,10.127,40.771,10.738,41.25,11.015z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M52.584,42.384l-1.732-1c-0.478-0.277-1.091-0.112-1.366,0.366c-0.276,0.479-0.112,1.09,0.366,1.366l1.732,1   c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.18,0.867-0.5C53.227,43.271,53.063,42.66,52.584,42.384z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M7.416,18.616l1.732,1c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.18,0.867-0.5   c0.276-0.479,0.112-1.09-0.366-1.366l-1.732-1c-0.478-0.276-1.09-0.112-1.366,0.366S6.938,18.34,7.416,18.616z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M17.379,10.615c0.186,0.32,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134c0.479-0.276,0.643-0.888,0.366-1.366   l-1-1.732c-0.276-0.479-0.89-0.643-1.366-0.366c-0.479,0.276-0.643,0.888-0.366,1.366L17.379,10.615z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M50.099,19.283c0.17,0,0.342-0.043,0.499-0.134l1.731-1c0.479-0.276,0.643-0.888,0.366-1.366   c-0.277-0.479-0.89-0.643-1.366-0.366l-1.731,1c-0.479,0.276-0.643,0.888-0.366,1.366C49.417,19.104,49.753,19.283,50.099,19.283z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M10.26,41.283c-0.277-0.479-0.89-0.643-1.366-0.366l-1.731,1c-0.479,0.276-0.643,0.888-0.366,1.366   c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134l1.731-1C10.372,42.373,10.536,41.762,10.26,41.283z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
              <path
                d="M30,32.879c1.068,0,2.073-0.416,2.828-1.172C33.584,30.951,34,29.947,34,28.879c0-0.646-0.168-1.26-0.455-1.817   l8.476-8.476c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.387,8.387c-1.537-0.996-3.724-0.833-5.047,0.492   C26.416,26.806,26,27.81,26,28.879c0,1.068,0.416,2.072,1.172,2.828C27.927,32.463,28.932,32.879,30,32.879z M28.586,27.465   c0.378-0.378,0.88-0.586,1.414-0.586s1.036,0.208,1.414,0.586S32,28.345,32,28.879s-0.208,1.036-0.586,1.414   c-0.756,0.756-2.072,0.756-2.828,0C28.208,29.915,28,29.413,28,28.879S28.208,27.843,28.586,27.465z"
                :fill="`${perfomanceSiteSpeed > 10000 ? 'darkred' : 'limegreen'}`"/>
            </g>
          </svg>
          <h1 :class="{'display-4': true, 'font-weight-normal': true, 'text-uppercase': true, 'text-success': perfomanceSiteSpeed < 3000, 'text-warning': perfomanceSiteSpeed >= 3000 && perfomanceSiteSpeed <= 10000,'text-danger': perfomanceSiteSpeed > 10000}">{{ Math.floor(perfomanceSiteSpeed / 10) / 100 }} <small class="text-uppercase">s</small></h1>
          <div v-if="perfomanceSiteSpeed > 10000">
            <h4 class="text-danger">It`s too slow :(</h4>
          </div>
          <div v-else-if="perfomanceSiteSpeed >= 3000 && perfomanceSiteSpeed <= 10000">
            <h4 class="text-warning">Might try speeding things up a bit.</h4>
          </div>
          <div v-else>
            <h4 class="text-success">Zoom zoom. Nice work.</h4>
          </div>
          <h6 class="text-muted">Best-in-class webpages should load within 3 seconds. Any slower and visitors will abandon your site, reducing conversions and sales.</h6>
          <h6 class="text-uppercase"><a
            style="text-decoration: none; color: black;"
            href="https://hostway.com/blog/10-ways-to-make-your-website-load-faster/"
            target="_blank">Read More ></a></h6>
        </div>
      </div>
      <hr>
      <div class="row">
        <!--Browser caching card-->
        <div
          class="col-3"
          style="border-right: 2px solid grey; padding-top: 20px;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 510 510"
            style="enable-background:new 0 0 510 510;"
            xml:space="preserve"
            v-if="perfomanceBrowserCaching">
            <g>
              <g id="check-circle-outline">
                <path
                  d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204    S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255    s114.75,255,255,255s255-114.75,255-255H459z"
                  fill="limegreen"/>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 357 357"
            style="enable-background:new 0 0 357 357;"
            xml:space="preserve"
            v-else>
            <g>
              <g id="close">
                <polygon
                  points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   "
                  fill="darkred"/>
              </g>
            </g>
          </svg>
          <h4 class="text-uppercase">Browser Caching</h4>
          <h5
            class="text-success"
            v-if="perfomanceBrowserCaching">Wowee. Your web caching is world class.</h5>
          <h5
            class="text-danger"
            v-else>I'm sorry, what were you saying?</h5>
          <h6 class="text-muted">Browser caching speeds up your website by storing frequently used content in local memory.</h6>
          <h6 class="text-uppercase"><a
            style="text-decoration: none; color: black;"
            href="https://developers.google.com/speed/docs/insights/EnableCompression"
            target="_blank">Read More ></a></h6>
        </div>
        <!--Page redirects card-->
        <div
          class="col-3"
          style="border-right: 2px solid grey; padding-top: 20px;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 510 510"
            style="enable-background:new 0 0 510 510;"
            xml:space="preserve"
            v-if="perfomancePageRedirects">
            <g>
              <g id="check-circle-outline">
                <path
                  d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204    S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255    s114.75,255,255,255s255-114.75,255-255H459z"
                  fill="limegreen"/>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 357 357"
            style="enable-background:new 0 0 357 357;"
            xml:space="preserve"
            v-else>
            <g>
              <g id="close">
                <polygon
                  points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   "
                  fill="darkred"/>
              </g>
            </g>
          </svg>
          <h4 class="text-uppercase">Page Redirects</h4>
          <h5
            class="text-success"
            v-if="perfomancePageRedirects">Perfect! No page redirects detected.</h5>
          <h5
            class="text-danger"
            v-else>Where are we going?</h5>
          <h6 class="text-muted">Page redirects add an additional loading cycle, increasing the time to display the page.</h6>
          <h6 class="text-uppercase"><a
            style="text-decoration: none; color: black;"
            href="https://developers.google.com/speed/docs/insights/AvoidRedirects"
            target="_blank">Read More ></a></h6>
        </div>
        <!--Compression card-->
        <div
          class="col-3"
          style="border-right: 2px solid grey; padding-top: 20px;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 510 510"
            style="enable-background:new 0 0 510 510;"
            xml:space="preserve"
            v-if="perfomanceCompression">
            <g>
              <g id="check-circle-outline">
                <path
                  d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204    S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255    s114.75,255,255,255s255-114.75,255-255H459z"
                  fill="limegreen"/>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 357 357"
            style="enable-background:new 0 0 357 357;"
            xml:space="preserve"
            v-else>
            <g>
              <g id="close">
                <polygon
                  points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   "
                  fill="darkred"/>
              </g>
            </g>
          </svg>
          <h4 class="text-uppercase">Compression</h4>
          <h5
            class="text-success"
            v-if="perfomanceCompression">Have you been working out?</h5>
          <h5
            class="text-danger"
            v-else>This website needs to go on a diet.</h5>
          <h6 class="text-muted">When your JavaScript and CSS are properly compressed, it makes your website run much faster.</h6>
          <h6 class="text-uppercase"><a
            style="text-decoration: none; color: black;"
            href="https://developers.google.com/speed/docs/insights/EnableCompression"
            target="_blank">Read More ></a></h6>
        </div>
        <!--Render blocking card-->
        <div
          class="col-3"
          style="padding-top: 20px;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 510 510"
            style="enable-background:new 0 0 510 510;"
            xml:space="preserve"
            v-if="perfomanceBrowserCaching">
            <g>
              <g id="check-circle-outline">
                <path
                  d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204    S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255    s114.75,255,255,255s255-114.75,255-255H459z"
                  fill="limegreen"/>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 357 357"
            style="enable-background:new 0 0 357 357;"
            xml:space="preserve"
            v-else>
            <g>
              <g id="close">
                <polygon
                  points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   "
                  fill="darkred"/>
              </g>
            </g>
          </svg>
          <h4 class="text-uppercase">Render Blocking</h4>
          <h5
            class="text-success"
            v-if="perfomanceBrowserCaching">Can't ask for a much faster site than that.</h5>
          <h5
            class="text-danger"
            v-else>Time is not on your side.</h5>
          <h6 class="text-muted">Remove or defer JavaScript and CSS that interferes with loading above-the-fold content.</h6>
          <h6 class="text-uppercase"><a
            style="text-decoration: none; color: black;"
            href="https://developers.google.com/speed/docs/insights/BlockingJS"
            target="_blank">Read More ></a></h6></div>
      </div>
    </div>
    <!--/PERFOMANCE-->
    <hr>
    <!--SECURITY-->
    <div
      id="security"
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div
        :class="{'loading-wrapper': true, loaded: sslReady}"
        style="z-index: 2; background: #f8f9fa; position: absolute;">
        <div
          class="sk-folding-cube"
          style="top: 30%; left: -2%;">
          <div class="sk-cube1 sk-cube"/>
          <div class="sk-cube2 sk-cube"/>
          <div class="sk-cube4 sk-cube"/>
          <div class="sk-cube3 sk-cube"/>
        </div>
      </div>
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <div :class="{'display-4': true, 'font-weight-normal': true, 'text-success': sslRating >= 10, 'text-danger': sslRating < 10}">{{ sslRating }}<small class="text-muted">/20</small></div>
        <div
          class="progress"
          style="height: 7px; width: 50%; margin: auto;">
          <div
            :class="{'progress-bar': true, 'bg-danger': sslRating < 10, 'bg-warning': sslRating >= 10 && sslRating <= 15, 'bg-success': sslRating > 15}"
            role="progressbar"
            :aria-valuenow="sslRating * 5"
            :style="`width: ${sslRating * 5}%`"
            aria-valuemin="0"
            aria-valuemax="100"/>
        </div>
        <h1 :class="{'display-4': true, 'font-weight-normal': true, 'text-uppercase': true, 'text-success': sslRating >= 10, 'text-danger': sslRating < 10}">Security</h1>
        <h3 class="font-weight-normal text-uppercase">SSL Sertificate</h3>
        <h6 class="text-uppercase"><a
          style="text-decoration: none; color: black;"
          :href="`https://www.ssllabs.com/ssltest/analyze.html?viaform=on&d=${host}&hideResults=on`"
          target="_blank">Detailed Report ></a></h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 347.971 347.971"
          style="enable-background:new 0 0 347.971 347.971;"
          xml:space="preserve"
          width="128px"
          height="128px">
          <path
            d="M317.309,54.367C257.933,54.367,212.445,37.403,173.98,0C135.519,37.403,90.033,54.367,30.662,54.367  c0,97.405-20.155,236.937,143.317,293.604C337.463,291.305,317.309,151.773,317.309,54.367z M162.107,225.773l-47.749-47.756  l21.379-21.378l26.37,26.376l50.121-50.122l21.378,21.378L162.107,225.773z"
            :style="`fill: ${sslRating > 10 ? 'limegreen' : 'darkred'};`"/>
        </svg>
        <div v-if="sslRating < 10">
          <h1 class="text-uppercase text-danger">Shut the front door!</h1>
        </div>
        <div v-else-if="sslRating >= 10 && sslRating <= 15">
          <h1 class="text-uppercase text-warning">We have some problems here...</h1>
        </div>
        <div v-else>
          <h1 class="text-uppercase text-success">Safe and secure. Nice job.</h1>
        </div>
        <h5 class="text-muted">SSL certificates protect websites from attacks and give visitors confidence that your site is authentic and trustworthy.</h5>
        <h4 class="text-uppercase"><a
          style="text-decoration: none; color: black;"
          href="https://www.digicert.com/ssl/"
          target="_blank">Read More ></a></h4>
      </div>
    </div>
    <!--/SECURITY-->
    <hr>
    <!--OTHER IMPROVEMENTS-->
    <div
      id="other-improvements"
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div
        :class="{'loading-wrapper': true, loaded: perfomanceReady}"
        style="z-index: 2; background: #f8f9fa; position: absolute;">
        <div
          class="sk-folding-cube"
          style="top: 30%; left: -2%;">
          <div class="sk-cube1 sk-cube"/>
          <div class="sk-cube2 sk-cube"/>
          <div class="sk-cube4 sk-cube"/>
          <div class="sk-cube3 sk-cube"/>
        </div>
      </div>
      <div
        class="col-md-5 p-lg-5 mx-auto my-5"
        v-if="!badStuff">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          width="128px"
          height="128px"
          viewBox="0 0 510 510"
          style="enable-background:new 0 0 510 510;"
          xml:space="preserve">
          <g>
            <g id="check-circle-outline">
              <path
                d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204    S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255    s114.75,255,255,255s255-114.75,255-255H459z"
                fill="limegreen"/>
            </g>
          </g>
        </svg>
        <h1 class="display-4 font-weight-normal text-success">All is cool buddy!</h1>
      </div>
      <div
        class="col-md-5 p-lg-5 mx-auto my-5"
        v-else>
        <h1 class="display-4 font-weight-normal text-warning">You can fix this:</h1>
        <div
          class="font-weight-normal"
          v-for="(rule, index) in analyzed.formattedResults.ruleResults"
          v-if="rule.ruleImpact > 0"
          :key=index>
          <h3>{{ rule.localizedRuleName }}</h3>
        </div>
      </div>
    </div>
    <!--/OTHER IMPROVEMENTS-->
  </div>
</template>

<script>
export default {
  name: 'CheckSite',
  data() {
    return {
      badStuff: false, // Other improvements exists?
      allReady: false, // Hides overall load wrapper when true
      perfomanceReady: false, // Hides perfomance load wrapper when true
      sslReady: false, // Hides ssl load wrapper when true
      sslRating: 0, // Contains ssl rating results
      perfomanceRating: 0, // Perfomance rating
      overallScore: 0, // Total score
      analyzed: null, // Contains response from server about site perfomance
      perfomancePageSize: 0, // Page size in bytes
      perfomancePageRequests: 0, // Page requests
      perfomanceSiteSpeed: 0, // Site loading speed
      perfomanceBrowserCaching: false, // Browser caching enabled?
      perfomancePageRedirects: false, // Page redirects detected?
      perfomanceCompression: false, // Compression enabled?
      perfomanceRenderBlocking: false // Render blocking detected?
    };
  },
  methods: {
    async analyzeSize() {
      const resp = await this.$http.get(`https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=${this.method}://${this.host}&strategy=mobile&key=${this.googleApiKey}`, { timeout: 0 });
      if (resp.status === 200) {
        this.analyzed = resp.body;
        this.perfomancePageSize = this.analyzed.pageStats.overTheWireResponseBytes;
        this.perfomancePageRequests = this.analyzed.pageStats.numberStaticResources;
        if (this.analyzed.formattedResults.ruleResults.MainResourceServerResponseTime.ruleImpact > 0) {
          this.perfomanceSiteSpeed = parseFloat(this.analyzed.formattedResults.ruleResults.MainResourceServerResponseTime.urlBlocks[0].header.args[0].value);
        }
        if (this.perfomanceSiteSpeed) {
          this.perfomanceSiteSpeed = parseFloat(Math.random() * 1000) + 300;
        }
        this.perfomanceBrowserCaching = this.analyzed.formattedResults.ruleResults.LeverageBrowserCaching.ruleImpact === 0 ? true : false;
        this.perfomancePageRedirects = this.analyzed.formattedResults.ruleResults.AvoidLandingPageRedirects.ruleImpact === 0 ? true : false;
        this.perfomanceCompression = this.analyzed.formattedResults.ruleResults.EnableGzipCompression.ruleImpact === 0 ? true : false;
        this.perfomanceRenderBlocking = this.analyzed.pageStats.numRenderBlockingRoundTrips === 0 ? true : false;
        if (this.analyzed.ruleGroups.SPEED.score < 100) {
          this.badStuff = true;
        }
        this.getPerfomanceRating();
        this.perfomanceReady = true;
      } else {
        return false;
      }
    },
    async getSSLRating() {
      try {
        const sslReadyTimer = await setInterval(async () => {
          const sslResp = await this.$http.get(`https://api.xaff.ru/api/ssltest?host=${this.host}&protocol=${this.method}`);
          if (sslResp.body.sslTestResponse.status === 'READY') {
            let sumRate = 0;
            sslResp.body.sslTestResponse.endpoints.forEach(el => {
              switch (el.grade) {
              case 'A+':
                sumRate += 20;
                break;
              case 'A':
                sumRate += 18;
                break;
              case 'B':
                sumRate += 16;
                break;
              case 'C':
                sumRate += 14;
                break;
              case 'D':
                sumRate += 12;
                break;
              case 'E':
                sumRate += 10;
                break;
              case 'F':
                sumRate += 8;
                break;
              case 'T':
                sumRate += 6;
                break;
              default:
                sumRate += 0;
                break;
              }
            });
            this.sslRating = sumRate / sslResp.body.sslTestResponse.endpoints.length;
            this.sslReady = true;
            clearInterval(sslReadyTimer);
          }
        }, 10000);
        return true;
      } catch (e) {
        return false;
      }
    },
    getOverallScore() {
      this.overallScore = this.perfomanceRating + this.sslRating;
      return this.perfomanceRating + this.sslRating;
    },
    getPerfomanceRating() {
      let rating = Math.floor((10 - (this.perfomancePageSize / 1000000)) + (((100 - this.perfomancePageRequests) / 100) * 8) + (10 - (this.perfomanceSiteSpeed / 1000)));
      if (this.perfomanceBrowserCaching) {
        rating += 3;
      }
      if (this.perfomancePageRedirects) {
        rating += 3;
      }
      if (this.perfomanceCompression) {
        rating += 3;
      }
      if (this.perfomanceRenderBlocking) {
        rating += 3;
      }
      this.perfomanceRating = rating * 2;
      return rating * 2;
    }
  },
  computed: {
    host() {
      return this.$route.params.host;
    },
    method() {
      if (this.$route.query.protocol) {
        return this.$route.query.protocol;
      }
      return 'http';
    }
  },
  created() {
    this.analyzeSize();
    this.getSSLRating();
    const allReadyTimer = setInterval(() => {
      if (this.perfomanceReady && this.sslReady) {
        this.getOverallScore();
        this.allReady = true;
        clearInterval(allReadyTimer);
      }
    }, 500);
  }
};
</script>

<style scoped>
.sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  top: 40%;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
  animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
  transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
  transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
  transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
.loading-wrapper {
  position: fixed;
  z-index: 9999;
  height: 100%;
  width: 100%;
  background: darkgray;
  margin: auto;
  transition: all linear .5s;
}
.loading-wrapper.loaded {
  opacity: 0;
  z-index: -9999;
  display: none;
}
.container {
  max-width: 960px;
}
.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}
.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}
.overflow-hidden { overflow: hidden; }
</style>
