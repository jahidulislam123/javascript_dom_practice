function myFunction(){
    document.getElementById("demo").innerHTML = 
    "Cookies associated with this document :" + document.cookie;
}


function changeText(){
        let my_paragraph=document.getElementById("my_paragraph");


        // change the text content of the <p></p> element
        my_paragraph.textContent="New text "
        
}

function addNewDiv(){
    let newElement =document.createElement("div");

//set the element id and class attribute 

newElement.id="new-div";
newElement.className="my-class";

newElement.textContent="this is a new div element";

// append the new element to the container div
document.getElementById("container").appendChild(newElement);

}

function changeText2(){
    let heading = document.getElementById("my-heading");


    heading.textContent="Hello world";
    heading.style.color="blue";

    //add a new class to the heading 
    // heading.classList.add("red")
}

function dafd(){
    let button1 = document.getElementById("my-button2");
    button1.addEventListener("click",function(){
    alert("Button Clicked ");
    console.log("yes it clicked ");
});

}

