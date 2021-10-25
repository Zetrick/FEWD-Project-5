function search()
{
    //Search bar element
    let search_bar_text = document.getElementById('search').value.toUpperCase();
    console.log(search_bar_text);

    //Photo gallery div
    let photo_gallery = document.getElementById('gallery');

    //Iterate through each <a> element in the gallery
    //If the element's 'title' attribute does not contain the text entered in the search bar
    //Hide the element by setting display to 'none'
    //Otherwise, reset the display to show the element again
    for(let i = 0; i < photo_gallery.childElementCount; ++i)
    {
        let current_item = photo_gallery.children.item(i);
        let item_title = current_item.getAttribute('title').toUpperCase();
        if(!item_title.includes(search_bar_text))
        {
            current_item.style.display = "none";
        }
        else
        {
            current_item.style.display = "";
        }
    }
}