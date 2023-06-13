// Theoretical Question :
/*

  We use try---catch to find an error in our code,
  and to rewrite it which way we want.
  Also, if we have error in our code, with using try---catch,
  code only jump error section, but other parts after the error will work
  properly.
  Try---catch don't let error to brake our code.

*/


const rootDiv = document.querySelector(".root");


books.forEach((book)=>{
  try {

    const properties = ['author', 'name', 'price'];
    const emptyProperties = [];

    properties.forEach((property)=>{
      
      if(!book[property]){
        emptyProperties.push(property);
      }
    });

    if(emptyProperties.length === 0){

      const ulItem = document.createElement('ul');
      const liItem = document.createElement('li');

      ulItem.appendChild(liItem);

      liItem.textContent = `Author : ${book.author}, Name : ${book.name}, Price : ${book.price}`;

      rootDiv.appendChild(ulItem)
    }

    else{
      throw new Error(`Missing properties (${emptyProperties.join(', ')}) in book object: ${JSON.stringify(book)}`)
    }

  } catch (error) {
    console.log(error);
  }
})





