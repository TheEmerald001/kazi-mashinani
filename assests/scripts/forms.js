const enlist = document.getElementById("enlist-work")

enlist.addEventListener("click", prepareOnboard)

function prepareOnboard(){
    let showForm =document.getElementById("descptive-text")
    document.getElementById("top=listings").innerHTML = ""

    showForm.innerHTML = `
    <div class="loginform">
    <div class="title">Welcome</div>
    <div class="subtitle">Create An Account with us to start receiving jobs</div>
    <div class="input-container ic1">
      <input id="firstname" class="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="firstname" class="placeholder">Your Name</label>
    </div>
    <div class="input-container ic2">
      <input id="job" class="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="job" class="placeholder">Your jobs</label>
    </div>
    <div class="input-container ic2">
      <input id="email" class="input" type="email" placeholder=" " />
      <div class="cut cut-short"></div>
      <label for="email" class="placeholder">Email</label>
    </div><div class="input-container ic2">
      <input id="password" class="input" type="password" placeholder=" " />
      <div class="cut cut-short"></div>
      <label for="password" class="placeholder">Password</label>
    </div>
    <div class="input-container ic2">
      <input id="telephone" class="input" type="tel" placeholder=" " />
      <div class="cut"></div>
      <label for="telephone" class="placeholder">254722000000</label>
    </div>
    <div class="input-container ic2">
      <input id="image" class="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="image" class="placeholder">imageUrl</label>
    </div>
    <button id="create-account" type="text" class="submit">Create Account</button>
  </div>
    `
    document.getElementById('create-account').addEventListener('click', (e)=>{
        e.preventDefault();
        handleSubmitForm();
    });
}

// Gather data and send request to store
function handleSubmitForm(){
    console.log('yesm')

    let userData = {
        name: document.getElementById('firstname').value,
        job: document.getElementById('job').value,
        email: document.getElementById('email').value,      
        password: document.getElementById('password').value,        
        phone: document.getElementById('telephone').value,
        image: document.getElementById('image').value,
    };
    console.log('yesm2')
    createUser(userData);
}

// creates/POST a worker in the database
function createUser(userData){
    console.log('hmm')
    fetch("https://test-backend-production-30ff.up.railway.app/workers", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
}