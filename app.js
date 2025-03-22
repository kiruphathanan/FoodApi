const button=document.getElementById("button");
const jokecontenet=document.getElementById("FOODS");
const joke=document.getElementById("FOOD");
button.onclick =()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then(function(response){
        button.textContent="Aprm";
        joke.textContent="";
        jokecontenet.textContent=response.data.meals[0].strMeal;
        setTimeout(function(){
            joke.textContent=response.data.meals[0].strCategory;
        },20);
    })
    .catch(function(error){
        console.log(error);
    });
};