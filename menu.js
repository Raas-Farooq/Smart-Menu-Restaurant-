const item = document.querySelector(".section-center");
const btn_holder = document.querySelector(".list-container");


// const image = document.querySelector(".image");we directly inherit the article card and we don't need to use these elements by accessing it 
// const titl = document.querySelector(".main-title");
// const prc = document.querySelector(".price");
// const read = document.querySelector(".paragraph");

// const breakfast = document.querySelector('.breakfast');
// const lunch_btn = document.querySelector('.lunch');
// const shakes = document.querySelector('.shakes');
// const all_items = document.querySelector('.all');

const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./Images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./Images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./Images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./Images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./Images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./Images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
    id: 10,
    title: "MiKhandiHalwa",
    category: "Halwa",
    price: 18.99,
    img: "./Images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./Images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./Images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./Images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
    // function links_traversal(menu){}  You can also wrap it inside function and later call it in the domContent Loader
    
    
    

  window.addEventListener('DOMContentLoaded', function(){
    // to show all items by default, first we need to call 'smart recipe menu
    smartRecipesMenu(menu);
    smartBtnsList();

    // AllahIsGreat(); // these are separate functions which was created earlier
    // functioner();
  
  })


// Main Menu - All Items


/// **** Main Function To Perform *****

function smartRecipesMenu(singleRecipe){
  const subhanAllah = singleRecipe.map((recipe)=>{
   // returning the article to inner Html.. keep in mind that whether we have article there or not, this article will assign to the item(section-center) in inner Html
   // the other imp thing is that the classes and other id's should exactly the ones according to which we have set our css code.. if the name of classes don't match, the css won't work
   // ${} will get the data which is defined in the same js file.. if you don't use this and declare as src="recipe.img" then it will return this as string value and image won't be showed  
    return `<article class="classical-menu">
            
    <div class="image-container">
        <img src="${recipe.img}" class="image" alt="${recipe.title}">
    </div>
    <div class="article-header">
        <div class="title">
                <h6 class="main-title">
                ${recipe.title}
                </h6>
                <p class="price"> ${recipe.price} </p>
        </div>
        <div class="article-parag">
            <p class="paragraph">
               ${recipe.desc}
            </p>
        </div>
    
    </div>
    
</article>`
}) // you can also add .join("") here like  }).join(" ")
PowerOfJs = subhanAllah.join(" "); // You can also assign it to subanAllah if it is not const value (in case of let) you can do it like subhanAllah = subhanAllah.join("") but it is constant thus, we assign it to new variable  
item.innerHTML = PowerOfJs;
}

// To inherit Buttons dynamically by the use of collecting btns(with reduce) and
// showing them with return ` ` and accessing the single items and performing funcion accordingly

// getting categories name with reduce
function smartBtnsList(){
  const menu_list = menu.reduce(function(values,field)// the first parameter always have accumulator(which return a result value) and 
  // the 2nd is the item to iterate(means separately return each item in provided list like here menu)
  {
    if(!values.includes(field.category)){
     values.push(field.category)
   }
   return values;
  
 },["All"])
 
 // Adding btns on the html document with the help of return, join and innerHtml
 const adding_btns = menu_list.map((btn)=>{
   return `<li><button class="btn btn-light" 
   data-where=${btn}> 
   <a href="#">${btn}</a>
   </button></li>`
 }).join(" ");
 btn_holder.innerHTML = adding_btns;

//   Short Info about the below code:  accessing the btns using querySelectorAll and then traversing it and then adding click event listner
//  getting the exact category defined in html code using keyword dataset and filtering the menu items which are
//  predefined in javascript file which contains all the details(id,title,category,price)
//  now getting the separate categories.. if category other than all then return that category and if it is all then we
//  simply need to return the function which contains all valus


 // It is important to check any of the following function by console log and clear your concepts
 const varities = document.querySelectorAll(".btn-light");
 //accessing each btn
 varities.forEach((road)=>{
  // eventListener when clicked and using (e) as event(you can use any valid name .. e is used to mimic event because it is an click event) 
   road.addEventListener('click', function(e){
    // e or event(parameter_name) and current target which is clicked(like btn) then dataset is keyword and where is id which contains('breakfast','shakes' etc categories) and that is defined in html code by ourselves.. you can use any valid name instead of where but dataset and (-) is keyword 
     const wantTogo = e.currentTarget.dataset.where;
//imp: filtering the main pre-defined menu.. which will help to get the data means total items(like all the lunch items, shakes items etc) related to category as well as all the related info(like title,price,image of that category) because it is the menu(defined above in js file) which contains all the items of each category
     const special_category = menu.filter((single_object) => { 
       if (wantTogo === single_object.category){
        // return is important because it will seperately return the single category(with all items) which is clicked.. further these items will be shown with the help of smartRecipeMenu(special_category) which is defined below in else statement
        // suppose you clicked breakfast then it will return all the breakfast items since it is traversing the 'complete menu items' and wantToGo='breakfast'.. so, it will compare breakfast with each menu>breafast and return it when finds any breakfast category. thus, it will return every breafast category
         return single_object;
       }
     });
// In case of all, just run the smartRecipesMenu which contains all items
// wantToGo is used in if because it is the one which contains btns, more importantly, it is clicked and according to this, whatever btn is clicked, we have to show its all items available
     if (wantTogo === "All"){
       return smartRecipesMenu(menu)
     }
// Below the working of code is like if wantToGo = All then it simply run main menu(all items) but if it is something else(like lunch,shakes etc) then it simply return the category list. Now, special_category list is not random, it has all the items of that category which variable wantToGo represent 
//since the value(shake,halwa etc) of WantTogo compared in the special_category btw wantToGo and Menu(all_items) and it obtained every item of that category(shakes,lunch etc)... because if it wasn't 'all' then whichever the category was it(shakes, breakfast etc) special category contains all of its items by getting from the menu(which is defined above in js) 
//this is where each separate category will be added to menu of that category(shakes,breakfast etc) and it will be added to innerHtml and showed in other page
     else{
       return smartRecipesMenu(special_category);
     }
   })
 })

}






// Below are seperate functions(for breakfast,lunch etc) to call and 
// but it is not efficient way because it takes more code and more time
// So, the efficient way is defined above but still these functions work perfectly


// // BreakFast

// function morningRecipes(all_recipes){
//   let Mashallah = all_recipes.map((recipe) => {
//     if (recipe.category == 'breakfast'){
//       return `<article class="classical-menu">
                
//       <div class="image-container">
//           <img src="${recipe.img}" class="image" alt="first-item">
//       </div>
//       <div class="article-header">
//           <div class="title">
//                   <h6 class="main-title">
//                   ${recipe.title}
//                   </h6>
//                   <p class="price"> ${recipe.price} </p>
//           </div>
//           <div class="article-parag">
//               <p class="paragraph">
//                  ${recipe.desc}
//               </p>
//           </div>
      
//       </div>
      
//   </article>`
//     }
//   })
//   Mashallah = Mashallah.join(" ");
//   item.innerHTML = Mashallah;
// }
 
// // Lunch 

// function lunchItems(all_menu){
//   let lunch_list = all_menu.map((single)=>{
//     if(single.category == 'lunch'){
//       return `<article class="classical-menu">
                
//       <div class="image-container">
//           <img src="${single.img}" class="image" alt="first-item">
//       </div>
//       <div class="article-header">
//           <div class="title">
//                   <h6 class="main-title">
//                   ${single.title}
//                   </h6>
//                   <p class="price"> ${single.price} </p>
//           </div>
//           <div class="article-parag">
//               <p class="paragraph">
//                  ${single.desc}
//               </p>
//           </div>
      
//       </div>
      
//   </article>`
//     }
//   })
//   lunch_list = lunch_list.join(" ");
//   item.innerHTML = lunch_list;
// }

// // Shakes 

// function forgiveUs(products){
//   let shakes_chaska = products.map((shake)=>{
//     if (shake.category == 'shakes'){
//       return `<article class="classical-menu">
            
//       <div class="image-container">
//           <img src="${shake.img}" class="image" alt="${shake.title}">
//       </div>
//       <div class="article-header">
//           <div class="title">
//                   <h6 class="main-title">
//                   ${shake.title}
//                   </h6>
//                   <p class="price"> ${shake.price} </p>
//           </div>
//           <div class="article-parag">
//               <p class="paragraph">
//                  ${shake.desc}
//               </p>
//           </div>
      
//       </div>
      
//   </article>`
//     }
//   })
//   shakes_chaska = shakes_chaska.join(" ");
//   item.innerHTML = shakes_chaska;
// }


// // Main function( return all items )



// function AllahIsGreat(){
//   all_items.addEventListener('click',function(){
//     smartRecipesMenu(menu);
//   })
// }

// // Breakfast, Lunch, Shakes 'Event Listener Function'
// // all functions are nested inside 'functioner' function


// function functioner(){
// // shakes event Listener function
//   function my_shakes(){
//     shakes.addEventListener('click',function(){
//       forgiveUs(menu);
//     })
    
//   }
//   my_shakes()

//   // Breakfast event listener funciton
//   function super_breakfast(){
//     breakfast.addEventListener('click', function(){
//       morningRecipes(menu);
//   })
//   }

//   super_breakfast()

//   //lunch event listener function
//   function my_lunch_list(){
//     lunch_btn.addEventListener('click', function(){
//       lunchItems(menu);
//     })
//   }
//   my_lunch_list()
  
// }


 








// window.addEventListener('DOMContentLoaded',function(){
//     let i = 0;
//     while(i < 9){
      
//       i++;
//     }
    
    
// })

// function update(i){
//     prc.textContent=menu[i].price;
//     titl.textContent=menu[i].title;
//     read.textContent=menu[i].desc;
//     image.src=menu[i].img;
  
// }