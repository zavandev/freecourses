fetch("courses.json")
    .then(response => response.json())
    .then(courses => {
        const coursesList = document.querySelector('#courses-list');
        let html = '';
        for (const course of courses) {
            html += getCard(course);
        }
        coursesList.innerHTML = html;
    });

function getCard(course) {
    return `<div class="col">
                <div class="card shadow-sm">
                <img src="./images/${course.image}" alt="${course.title}" class="bd-placeholder-img card-img-top"
                    width="100%" height="225" role="img">
                <div class="card-body">
                    <h3>${course.title}</h3>
                    <p class="card-text">${course.description}</p>
                    <a href="${course.link}" target="_blank" class="btn btn-sm btn-outline-secondary">View</a>
                </div>
                </div>
            </div>`;
}