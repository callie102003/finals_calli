function validateForm() {
    var satisfaction = document.getElementById('satisfaction').value;
    var features = document.getElementById('features').value;
    var recommendation = document.getElementById('recommendation').value;
    var dogOwner = document.getElementById('dog-owner').value;
    var dogTraining = document.getElementById('dog-training').value;
    var dogBreed = document.getElementById('dog-breed').value;
    var dogFriendly = document.getElementById('dog-friendly').value;
    var dogSatisfaction = document.getElementById('dog-satisfaction').value;
    var dogImprovement = document.getElementById('dog-improvement').value;

    if (satisfaction === '' || features === '' || recommendation === '' ||
        dogOwner === '' || dogTraining === '' || dogBreed === '' ||
        dogFriendly === '' || dogSatisfaction === '' || dogImprovement === '') {
        alert('Please fill out all fields before submitting the form.');
        return false;
    }

    return true;
}

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validateForm()) {

        var formData = new FormData(this);

        var formObject = {};
        formData.forEach(function(value, key){
            formObject[key] = value;
        });

        console.log(formObject);

        var thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your feedback!';
        document.getElementById('survey-form').appendChild(thankYouMessage);

        document.getElementById('survey-form').reset();
    }
});
