export const createCardDetail = ((imgUrl, name, status, specie, location, origin) => {
  let div = document.createElement('div');
  let divRow = document.createElement('div');
  let divCol = document.createElement('div');
  let img = document.createElement('img');
  let divCol2 = document.createElement('div');
  let divCardBody = document.createElement('div');
  let smallName = document.createElement('small')
  let h5 = document.createElement('h5');
  let smallP = document.createElement('small')
  let p = document.createElement('p');
  let smallStatus = document.createElement('small')
  let pStatus = document.createElement('p');
  let smallSpecie = document.createElement('small')
  let pSpecie = document.createElement('p');
  let smallLocation = document.createElement('small')
  let pLocation = document.createElement('p');
  let a = document.createElement('a');

  div.classList.add('card', 'bg-dark', 'text-white', 'm-0', 'col-12', 'ps-md-3');
  divRow.classList.add('row', 'g-4', 'align-items-center');
  divCol.classList.add('col-md-6', 'div-img');
  img.classList.add('card-img-top', 'rounded-3');
  divCol2.classList.add('col-md-6');
  divCardBody.classList.add('card-body');
  smallName.classList.add('text-warning', 'p-0')
  h5.classList.add('card-title', 'text-primary', 'fs-4', 'fw-bold', 'mb-2');
  smallP.classList.add('text-white-50', 'm-0')
  p.classList.add('card-text', 'fs-6', 'mb-1');
  smallStatus.classList.add('text-white-50', 'm-0')
  pStatus.classList.add('card-text', 'fs-6', 'mb-1');
  smallSpecie.classList.add('text-white-50', 'm-0')
  pSpecie.classList.add('card-text', 'fs-6', 'mb-1');
  smallLocation.classList.add('text-white-50', 'm-0')
  pLocation.classList.add('card-text', 'fs-6', 'mb-1');

  smallName.textContent = 'Name: ';
  h5.textContent = name;
  smallP.textContent = 'Origin: ';
  p.textContent = origin;
  smallStatus.textContent = 'Status: ';
  pStatus.textContent = status;
  smallSpecie.textContent = 'Specie: ';
  pSpecie.textContent = specie;
  smallLocation.textContent = 'Location: ';
  pLocation.textContent = location;
  a.textContent = 'Details';

  img.setAttribute('src', imgUrl);

  divCardBody.append(smallName, h5, smallP, p, smallStatus, pStatus, smallSpecie, pSpecie, smallLocation, pLocation);
  divCol2.appendChild(divCardBody);
  divCol.appendChild(img);
  divRow.append(divCol, divCol2);
  div.appendChild(divRow);

  return div;
});

/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */