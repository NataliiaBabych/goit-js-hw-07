const allCategories = document.querySelectorAll('.item');

console.log('allCategories', allCategories);

const categotiesCounter = allCategories.length;

console.log(`В списке ${categotiesCounter} категории`);

const iterateEachCategory = (allCategories) => {
    allCategories.forEach((category) => {
        console.log('Категория', category.firstElementChild.textContent);
        console.log('Количество', category.lastElementChild.children.length);
    });
};    
console.log(iterateEachCategory(allCategories));

