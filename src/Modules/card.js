const URL = './views/details.html?id=';

export const createCard = ((imgUrl, name, origin, id) => {
  let div = document.createElement('div');
  let img = document.createElement('img');
  let divCardBody = document.createElement('div');
  let smallName = document.createElement('small')
  let h5 = document.createElement('h5');
  let smallP = document.createElement('small')
  let p = document.createElement('p');
  let a = document.createElement('a');

  div.classList.add('card', 'text-white', 'bg-dark', 'm-4','mx-md-2', 'col-10', 'col-md-3', 'col-lg-2');
  img.classList.add('card-img-top');
  divCardBody.classList.add('card-body');
  smallName.classList.add('text-warning', 'p-0');
  h5.classList.add('card-title', 'text-primary', 'fs-5', 'fw-bold', 'mb-3');
  smallP.classList.add('text-white-50', 'm-0')
  p.classList.add('card-text', 'fs-6');
  a.classList.add('btn', 'btn-outline-warning', 'rounded-0', 'rounded-bottom-3');

  smallName.textContent = 'Name: ';
  h5.textContent = name;
  smallP.textContent = 'Origin: ';
  p.textContent = origin;
  a.textContent = 'Details';

  img.setAttribute('src', imgUrl);
  a.setAttribute('href', `${URL}${id}`);
  a.setAttribute('target', '_blank');

  divCardBody.append(smallName, h5, smallP, p);
  div.append(img, divCardBody, a);
  return div;
});

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */