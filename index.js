const hireWorkers = document.getElementById('hire-workers')
const displayDiv = document.getElementById("worker-container")

hireWorkers.addEventListener("click", fetchWorkers)


function fetchWorkers() {
  fetch("http://localhost:3000/workers")
    .then((response) => response.json())
    .then(iterateWorkers);

}

function iterateWorkers(workers){
    workers.forEach(showWorkers);
}

function showWorkers(worker){
    console.log(worker);
    const wokerDetails = document.createElement('div');
    wokerDetails.setAttribute('class', 'items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700')
    displayDiv.appendChild(wokerDetails)

    const workerContainer = document.createElement('div');
    workerContainer.setAttribute('class', 'items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700')
    wokerDetails.appendChild(workerContainer)

    const workerImage = document.createElement("img")
    workerImage.setAttribute('class', 'w-full rounded-lg sm:rounded-none sm:rounded-l-lg imagestyle')
    workerImage.src = worker.image
    workerContainer.appendChild(workerImage)

    const detail = document.createElement('div')
    detail.className = 'p-5'
    workerContainer.appendChild(detail)

    const headerStyle = document.createElement('h3')
    headerStyle.className = 'text-xl font-bold tracking-tight text-gray-900 dark:text-white'
    detail.append(headerStyle)

    const workerName = document.createElement('p')
    workerName.innerText = worker.name
    headerStyle.appendChild(workerName)

    const workerJob = document.createElement("span")
    workerJob.className = "text-gray-500 dark:text-gray-400"
    workerJob.innerText = worker.job
    headerStyle.appendChild(workerJob)

    const workerBio = document.createElement("p")
    workerBio.className = "mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"
    workerBio.innerText = worker.description
    headerStyle.appendChild(workerBio)

    const contacts = document.createElement("ul")
    contacts.className = "flex space-x-4 sm:mt-0"

    const li1 = document.createElement("li")
    const mailer = document.createElement("a")
    mailer.className = "text-gray-500 hover:text-gray-900 dark:hover:text-white"
    mailer.innerHTML = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" clip-rule="evenodd" /></svg>`
    mailer.href = `${worker.email}`
    li1.appendChild(mailer)
    contacts.appendChild(li1)

    const li2 = document.createElement("li")
    const telephone = document.createElement("a")
    telephone.className = "text-gray-500 hover:text-gray-900 dark:hover:text-white"
    telephone.innerHTML = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" /></svg>`
    telephone.setAttribute("href", `wa.me/${worker.phone}`)
    li2.appendChild(telephone)
    contacts.appendChild(li2)

    detail.appendChild(contacts)

}
