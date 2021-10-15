// Refactoring

// Idée => Je clique sur un bouton et je stock un clown en prison ?


// Code barbare => le but c'est que ça fonctionne

function deleteTheClown(emoji) {
    if (typeof clown != emoji) {
        return "Ceci n'est pas un clown"
    }
    if (clown == true && emoji == clown) {
        delete clown
    } else {
        return "Aucun Clown trouvé"
    }
}

// Refactoring

const deleteTheClownRefactored = emoji => {
    if (typeof clown != emoji) return "Ceci n'est pas un clown"
    return (clown == true && emoji == clown) ? delete clown : "Aucun Clown trouvé";
}

// Trouver l'index d'un élément dans un tableau

const myTable = ["coucou", "hello", "test", "salut", "aurevoir"];
const elementToChange = myTable.find(element => element == "salut")
const index = myTable.indexOf(elementToChange)

myTable[index] = "element changé"
console.log(myTable);

// 

