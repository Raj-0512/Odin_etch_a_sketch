const size = 16;

grid = document.getElementById("grid");

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height = (640 / size) + "px";
        cell.style.width = (640 / size) + "px";
        grid.append(cell);


        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} ,
                                               ${Math.floor(Math.random() * 256)}  ,
                                               ${Math.floor(Math.random() * 256)})`;
        });

    }
}

createGrid(size);


const but = document.createElement("button");
but.id = "button";
but.textContent = "Change grid dimensions";
document.body.append(but);

let choice;

but.addEventListener("click", () => {

    choice = prompt("Enter your custom grid dimensions(maximum limit is 100)");
    grid.innerHTML = "";
    createGrid(choice);
})


