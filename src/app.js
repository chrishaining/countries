import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [
        {name: ""
        // flag: null
      }
      ]
    },
    // mounted() {
    //   this.
    // },

    methods: {
      fetchCountries: function() {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.countries = data.message)
        .catch(console.error);

      }

    }
  })



})
