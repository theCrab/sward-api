const downloadBtn = document.getElementsByClassName('download')
const modalContainer = document.getElementById('modal')


for (const r in downloadBtn) {
    if (downloadBtn.length > 0) {
        r.addEventListener('click', (e) => {
            e.preventDefault()
            modalContainer.classList.toggle('is-active')
        }, false)
    }
}