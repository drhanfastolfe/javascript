const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) 
{
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let inserty = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() 
{
    let newStory = storyText;
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);
    
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== '') 
    {
        newStory = newStory.replace('Bob', customName.value);
    }

    if (document.getElementById('uk').checked) 
    {
        const temperature = Math.round(((94 - 32) * 5) / 9);
        const weight = Math.round(300 / 14);

        newStory = newStory.replace('94 fahrenheit', temperature + ' centigrades');
        newStory = newStory.replace('300 pounds', weight + ' stones');
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}