const categoryList = document.querySelector("ul#categories");
const categoryChildList = Array.from(categoryList.children);

function getCatInfo () {
    console.log(`Number of categories: ${categoryList.children.length}`);
    categoryChildList.forEach((element) => {
        let catTitle = element.firstElementChild.textContent;
        let childElCount = element.lastElementChild.childElementCount;
        console.log(`Category: ${catTitle}\nElements: ${childElCount}`);
      });
}

getCatInfo(categoryList);

