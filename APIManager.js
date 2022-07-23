//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }
  loadData(){
    this.loadUserApi()
    this.loadKanyeQuote
    this.loadPoke
    this.loadIpsumApi
  }
  loadUserApi = () => {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7",
      success: (storeUserData = (data) => {
        this.data.user = {
          // what is user => if array !! why we shoudlnt define it
          firstName: data.results[0].name.first,
          lastName: data.results[0].name.last,
          city: data.results[0].location.city,
          state: data.results[0].location.state,
          image: data.results[0].picture.large,
        };
        this.data.friends = [];
        for (let i = 0; i < 6; i++) {
          this.data.friends.push({
            firstName: data.results[i].name.first,
            lastName: data.results[i].name.last,
          });
        }
      }),

      error: function (xhr, text, error) {
        alert(" ooops, getting data FAILED");
      },
    });
  };
  loadKanyeQuote = () => {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest",
      success: (data) => {
        this.data.quote = {
          quote: data.quote,
          //author: "Kanye"
        };
      },
      error: function (xhr, text, error) {
        alert(" ooops, getting data FAILED");
      },
    });
  };
  loadPoke = () => {
    let id = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
    $.ajax({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/${id}",
      success: (data) => {
        let poke = {
          name: data.name,
          image: data.sprites.back_default,
        };
      },
      error: function (xhr, text, error) {
        alert(" ooops, Load Poke FAILED");
      },
    });
  };
  loadIpsumApi = () => {
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      success: (data) => {
        this.data.about = data[0];
      },
      error: function (xhr, text, error) {
        alert(" ooops, load meat text FAILED");
      },
    });
  };
  getData() {
    return this.data;
  }
}
