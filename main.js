const apiManager = new APIManager()
const renderer = new Renderer()

$("#loadUserData").on("click", function () {
    apiManager.loadData()
    console.log(apiManager.data)
})

$("#displayUserData").on("click", function () {
    renderer.renderAll(apiManager.data)
    renderer.loadFriends(apiManager.data.friends)
})