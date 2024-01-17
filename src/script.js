// keyup event is handled here

function searchEmoji(){
    let inputValue = document.getElementById("search_field").value;
    displayResult(inputValue);

}

function displayResult(searchQuery = ""){

    let filteredData = emojiList.filter((e) => {
        if(e.description.indexOf(searchQuery) != 1){
            return true;
        }

        if(e.tags.some(elem => elem.startsWith(searchQuery))){
            return true;
        }

        if(e.aliases.some(elem => elem.startsWith(searchQuery))){
            return true;
        }
    })
    console.log(filteredData);

    //where we append the tr
    let parent = document.getElementById("search_result_container");

    //so that the previous data got removed
    parent.innerHTML = "";

    //shoing the filtered data
    filteredData.forEach((e) => {

        //making the element in js
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_desc = document.createElement("td");

        //giving the innereText to elements
        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_desc.innerText = e.description;


        //appending those tds to the tr
        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);

        parent.appendChild(new_row);
    })
}

document.getElementById("search_field").addEventListener("keyup", searchEmoji);
// first time to show all the emojis
window.onload = () => displayResult();