class Renderer {
  t;
  loadData(data) {
    this.loadUserApi(data);
    this.loadFriends(data);
    this.loadrPoke(data);
    this.loadMeat(data);
    this.loadQuote(data);
  }
  loadUserApi = (data) => {
    let userContainer = $(".user-container").empty();
    let source = $(".users-templete").html();
    let template = Handlebars.compile(source);
    let userInformation = template(data);
    userContainer.append(userInformation);
  };
  loadFriends = (data) => {
    let friendsContainer = $(".friend-container").empty();
    let source = $(".friends-templete").html();
    let template = Handlebars.compile(source);
    let friendsInformation = template({ data });
    friendsContainer.append(friendsInformation);
  };
  loadrPoke = (data) => {
    let pokeContainer = $(".pokemon-container").empty();
    const source = $("#pokemon-template").html();
    const template = Handlebars.compile(source);
    const poke = template(data);
    pokeContainer.append(poke);
  };
  loadMeat = (data) => {
    let meatContainer = $(".meat-container").empty();
    const source = $("#meat-template").html();
    const template = Handlebars.compile(source);
    const meatText = template(data);
    meatContainer.append(meatText);
  };
  loadQuote = (data) => {
    let quoteContainer = $(".qoute-container").empty();
    const source = $("#kanye-template").html();
    const template = Handlebars.compile(source);
    const quote = template(data);
    quoteContainer.append(quote);
  };
}
