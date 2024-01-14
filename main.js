var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var addBtn = document.getElementById("addBtn");
var tableBody = document.getElementById("tableBody");

var nameRegex = /^[A-Za-z ]{1,40}$/
function isNameValid()
{
   return (nameRegex.test(nameInput.value))
}
var urlRegex = /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{2,3}$/
function isUrlValid()
{
   return (nameRegex.test(urlInput.value))
}
// console.log(nameRegex.test('mohamed kamal')) true
// console.log(urlRegex.test('https://www.gmail.com')) true

nameInput.onkeyup = function()
{
    if(isNameValid() && isUrlValid()){
        addBtn.removeAttribute('disabled');
    }
    else{
        addBtn.disabled = 'true';
    } 
}
urlInput.onkeyup = function()
{
    if(isNameValid() && isUrlValid()){
        addBtn.removeAttribute('disabled');
    }
    else{
        addBtn.disabled = 'true';
    } 
}

var bookMarks=[];

if(localStorage.getItem("bookmarks") != null)
{
    bookMarks = JSON.parse(localStorage.getItem("bookmarks"));
    displayBook(bookMarks);
}

function addBookmark()
{
    var bookMark = {
        name: nameInput.value,
        url: urlInput.value,
    }
    bookMarks.push(bookMark);
    localStorage.setItem("bookmarks", JSON.stringify(bookMarks))
    displayBook(bookMarks);
    clearForm()
}

function clearForm()
{
    nameInput.value='';
    urlInput.value='';
}

function displayBook(arr)
{
    var box = ``;
    for(var i=0; i<arr.length; i++)
    {
        box+=`<tr>
            <td>${[i]}</td>
            <td>${arr[i].name}</td>
            <td><a href="${bookMarks[i].url}"><button class="btn btn-success"><i class="fa-regular fa-eye"></i> Visit</button></a></td>
            <td><button onclick="deleteBook(${i});" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`;
        document.getElementById('tableBody').innerHTML=box;
    }
}

function deleteBook(BookIndex)
{
    bookMarks.splice(BookIndex,1);
    localStorage.setItem("bookmarks", JSON.stringify(bookMarks))
    displayBook(bookMarks);
}