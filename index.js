const ibada = [{
    image: 'https://static.wixstatic.com/media/bc97b991bed9d26c481b52c93e1e1ff0.jpg/v1/fill/w_370,h_300,fp_0.54_0.51,q_80,usm_0.66_1.00_0.01,enc_auto/bc97b991bed9d26c481b52c93e1e1ff0.jpg',
    title: 'JUMATANO',
    Description: 'Ibada hii ni bada kwa ajili ya ',
    time: '(1600hrs - 1800hrs)'
  },
  {
    image: 'https://static.wixstatic.com/media/bf2f08cf146747ad81361924a6d711c9.png/v1/fill/w_370,h_300,fp_0.49_0.42,q_85,usm_0.66_1.00_0.01,enc_auto/bf2f08cf146747ad81361924a6d711c9.png',
    title: 'IJUMAA',
    Description: 'Ibada hii ni bada kwa ajili ya maombi ',
    time: '(1600hrs - 1800hrs)'
  }, {
    image: 'https://static.wixstatic.com/media/5bb82d4a799849efa1a5cacda245f8fd.jpg/v1/fill/w_370,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/5bb82d4a799849efa1a5cacda245f8fd.jpg',
    title: 'JUMAPILI',
    Description: 'Ni siku ya ibada Kuu.',
    time: '(1600hrs - 1800hrs)',
  },
]

const ibadaUl = document.querySelector('.list-ibada');

ibada.forEach((ibada, index) => {
  const ibadali = document.createElement('li');
  ibadali.classList.add('ibadaLi');
  ibadaUl.appendChild(ibadali);

  const img = document.createElement('img');
  img.classList.add('img-size')
  img.src = ibada.image
  ibadali.appendChild(img);
  const title = document.createElement('h3');
  title.innerHTML = ibada.title
  ibadali.appendChild(title);
  const desc = document.createElement('p');
  desc.innerHTML = ibada.Description
  ibadali.appendChild(desc);
  const time = document.createElement('p');
  time.innerHTML = ibada.time
  ibadali.appendChild(time);
})