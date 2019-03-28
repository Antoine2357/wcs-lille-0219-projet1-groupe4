document.body.onload = () => {

    const collaborators = document.getElementById('photocoll');
    for(let i = 0 ; i<collaborator.length ; i++) {
        console.log(collaborator[i]);

        const newP = document.createElement("h3");
        newP.innerHTML = `${collaborator[i].firstName} ${collaborator[i].lastName}`;
        

        const newImg = document.createElement('img');
        newImg.classList.add("rounded-circle");
        newImg.src = collaborator[i].imgUrl;
        newImg.alt = collaborator[i].imgAlt;

        const newDiv = document.createElement('div');
        newDiv.classList.add("sepia", "p-3", "col-md-6", "col-lg-4", "col-xl-4", "border", "border-dark");
        newDiv.append(newP);
        newDiv.append(newImg);

        collaborators.append(newDiv);
    }



    const numeric = document.getElementById('numeriCard');
    for(let i = 0 ; i<numericLille.length ; i++) {
        console.log(numericLille[i]);

        const newImg = document.createElement('img');
        newImg.classList.add("card-img-top", "mt-2");
        newImg.src = numericLille[i].imgUrl;
        newImg.alt = numericLille[i].imgAlt;

        const newP = document.createElement("p");
        newP.classList.add("card-body", "card-text", "text-justify");
        newP.innerHTML = `${numericLille[i].text}`;

        const newDiv = document.createElement('div');
        newDiv.classList.add("card", "col-md-6", "col-lg-4", "col-xl-4");
        newDiv.append(newImg);
        newDiv.append(newP);

        numeric.append(newDiv);
    }
}