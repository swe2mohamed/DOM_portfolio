// Dom Manipulation

// GetElementById
// Selects the element with the ID 'about' and logs it to the console
const about = document.getElementById('about');
console.log('getElementById', about);
// Output: <section id="about" class="py-5">...</section>

// GetElementByClassName
// Selects all elements with the class name 'mb-4' and logs them to the console
const listClassItem = document.getElementsByClassName('mb-4');
console.log('getElementsByClassName', listClassItem);
// Output: HTMLCollection(8) [div.mb-4, div.mb-4, div.mb-4, div.mb-4, div.mb-4, div.mb-4, div.mb-4, div.mb-4]

// GetElementByTagName
// Selects all <section> elements and logs them to the console
const listTagItem = document.getElementsByTagName('section');
console.log('getElementsByTagName', listTagItem);
// Output: HTMLCollection(5) [section#about, section#work-experience, section#skills, section#projects, section#contact]

// QuerySelector
// Selects the first element that matches the CSS selector '.container' and logs it to the console
const firstContainer = document.querySelector('.container');
console.log('querySelector', firstContainer);
// Output: <div class="container">...</div>

// QuerySelectorAll
// Selects all elements that match the CSS selector '.container' and logs them to the console
const allContainer = document.querySelectorAll('.container');
console.log('querySelectorAll', allContainer);
// Output: NodeList(4) [div.container, div.container, div.container, div.container]
