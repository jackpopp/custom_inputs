CLASS_PREFIX = 'cs';
sel = document.querySelector('.js-select');

// templates
values = sel.options;
options = [];

main = document.createElement('div');
main.className = CLASS_PREFIX+"-select";

optionsList = document.createElement('div');
optionsList.className = CLASS_PREFIX+'-options';

current = {
    id: 0,
    text: values[0].text
};

for (i = 0; i < values.length; i++)
{
    value = values[i].value;
    index = i;
    text = values[i].text;

    if (values[i].selected)
    {
        current = values[i];
    }

    domString = '<div class="'+CLASS_PREFIX+'-option" data-value="'+value+'" data-id="'+index+'">'+text+'</div>';

    div = document.createElement('div');
    div.innerHTML = domString;
    optionsList.appendChild(div.firstChild);
}

function setCurrent(id, text)
{
    current = {
        id: id,
        text: text
    }
}

function renderCurrentOption(text)
{
    items = document.querySelectorAll('.'+CLASS_PREFIX+'-current');
    for (var i = items.length - 1; i >= 0; i--) {
        items[0].parentNode.removeChild(items[0]);
    };

    domString = '<div class="'+CLASS_PREFIX+'-current">'+text+'</div>';
    div = document.createElement('div');
    div.innerHTML = domString;
    div = div.firstChild;
    parent = optionsList.parentNode;
    parent.insertBefore(div, optionsList);
}

parent = sel.parentNode;
parent.insertBefore(main, sel);
main.appendChild(optionsList);
sel.style.display = "none";

renderCurrentOption(current.text);

// find the selected one and set at the current in the display
// if none selected choose the top one


// create main container
// add class to the select options
// set the current select above the select options
// hide the options by default, click event to show em.
// focus and blur to show/hide etc


// add click event
domOptions = document.querySelectorAll('.'+CLASS_PREFIX+'-option');

for(i = 0; i < domOptions.length; i++)
{
    domOptions[i].addEventListener('click', function(event)
    {
        optionClicked(event.target);
    });
}

function optionClicked(element)
{
    setCurrent(element.dataset.id, element.textContent)
    renderCurrentOption(element.textContent)
    sel.value = element.dataset.value
    // value set
    sel.options[sel.selectedIndex].value
}

selectConainer = document.querySelector('.cs-select');

selectConainer.addEventListener('click', function(event)
{
    toggleClass(selectConainer, 'open');
});

function toggleClass(element, className)
{
    classNames = element.className;

    if ( classNames.indexOf('open') > 0)
    {
        classNames = classNames.replace(className, '').trim();
    }
    else
    {
        classNames =classNames+' open';
    }

    element.className = classNames;
}

// lose focus toggle class
document.addEventListener('click', function(event){
    selectConainer = document.querySelector('.cs-select');
    selectConainer.className.replace('open', '');
})

// tab to
// highlight
// focus
// blur
// up/down