function appendFunc() {
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const url = document.getElementById("url");

    if (name === '' && year === '') {
        url.textContent = "https://localhost:8080/";
    } else if (name !== '' && year !== '') {
        url.textContent = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
    } else if (name !== '') {
        url.textContent = `https://localhost:8080/?name=${encodeURIComponent(name)}`;
    } else if (year !== '') {
        url.textContent = `https://localhost:8080/?year=${encodeURIComponent(year)}`;
    }

    // Prevent form submission to another page
    return false;
}
