function appendFunc() {
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const myH3 = document.getElementById("myH3");

    if (name === '' && year === '') {
        myH3.textContent = "https://localhost:8080/";
    } else if (name !== '' && year !== '') {
        myH3.textContent = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
    } else if (name !== '') {
        myH3.textContent = `https://localhost:8080/?name=${encodeURIComponent(name)}`;
    } else if (year !== '') {
        myH3.textContent = `https://localhost:8080/?year=${encodeURIComponent(year)}`;
    }

    // Prevent form submission to another page
    return false;
}
