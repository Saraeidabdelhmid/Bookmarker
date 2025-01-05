var siteNameInput = document.getElementById('siteName');
var siteURLInput = document.getElementById('siteURL');
var bookmarksList = document.getElementById('bookmarksList'); // الجدول حيث يتم عرض المواقع
var invalidForm = document.getElementById('invalidForm');


var webList = [];


if (localStorage.getItem('webList')) {
    webList = JSON.parse(localStorage.getItem('webList'));
    display(webList);
}

function addWeb() {
   
   if(  siteNameInput.classList.contains('is-valid') &&
   siteURLInput.classList.contains('is-valid') ){

    for (var i = 0; i < webList.length; i++) {
        if (webList[i].SiteName.toLowerCase() === siteNameInput.value.toLowerCase()) {
            alert('A bookmark with this name already exists!');
            return;

            
        }
    }

    var webSite = {
        SiteName: siteNameInput.value,
        SiteURL: siteURLInput.value
    };

  
    webList.push(webSite);
    localStorage.setItem('webList', JSON.stringify(webList));

    console.log(webList);

    display(webList);
    claerForm(); 
}

else{
    invalidForm.classList.remove('d-none');}
}

function claerForm() {
    siteNameInput.value = '';
    siteURLInput.value = '';
}

function display(arr) {
    var cartona = '';

    for (var i = 0; i < arr.length; i++) {
        cartona += `
            <tr>
                <td>${i + 1}</td>
                <td>${arr[i].SiteName}</td>
                <td><a href="${arr[i].SiteURL}" target="_blank" class="btn bg-success1 "><span><i class="fa-solid fa-eye pe-2"></i></span>Visit</a></td>
                <td><button onclick="deleteRow(${i})" class="btn btn-danger bg-danger ">  <span><i class="fa-solid fa-trash-can"></i></span> Delete</button></td>
            </tr>
        `;
    }

    bookmarksList.innerHTML = cartona;
}

function deleteRow(index) {
    webList.splice(index, 1);
    localStorage.setItem('webList', JSON.stringify(webList));
    display(webList);
}







function validateName(element){

    var regex={
        siteName:/^[A-Z]\w{3,12}\s?\w{0,10}$/ ,// productName= id for input
        siteURL : /^(https:\/\/www\.\w+\.\w{2,})/

    }
    console.log(regex[element.id])
  
  
  if(regex[element.id].test(element.value)){
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    element.nextElementSibling.classList.add('d-none');
  }
  else{
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    element.nextElementSibling.classList.remove('d-none');
  }
  }
  