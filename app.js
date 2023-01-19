console.log("Let's get this party started!");

const input = document.querySelector('#searchTerm');
const gifArea = document.querySelector('#gifArea');

// Uses input value to search for gif url, 
// Then creates new image with url source and appends to div
async function search(term) {
    console.log(term);
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { 
        params: { 
            api_key: 'rvlJisTO0w0gMGC42gaM62GAeC3Y4H4N', 
            q: term
        }
    });
    console.log('After GET')
    console.log(`Response: ${res.data}`)

    const img = document.createElement('img');
    img.src = res.data.data[0].images.original.url;
    console.log(img.src)
    gifArea.append(img);
};

// Submit button saves value and initiates search function
$('#searchForm').on('submit', function(e) {
    e.preventDefault();
    let term = input.value;
    search(term);
    input.value = '';
});

// Remove gifs by setting div contents to empty string
$('#remove').on('click', function(e) {
    e.preventDefault();
    gifArea.innerHTML = '';
});