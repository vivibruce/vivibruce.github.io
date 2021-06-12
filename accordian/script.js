const accordianList = document.querySelector('.accordian-list');

const accordionData = [
  {
    heading: "Will my license be automatically renewed?",
    content:
      "Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.",
  },
  {
    heading: "Can I upgrade my license?",
    content:
      "Quos quam ipsam consequatur consequatur et distinctio. Facere vel ut dolorem. Quam quo neque quos voluptates cupiditate sit quae.",
  },
  {
    heading: "Do you provide email support if I need help?",
    content:
      "Vel et quam reprehenderit velit. Possimus accusamus eos esse vero quo modi voluptas hic. Quia illo quisquam vel quis qui. Autem labore aut incidunt. Eius non voluptatem et laboriosam in.",
  },
];

const run = ()=>{
  const accordianListHtml = accordionData.map(data=>{
    return ` <li class="accordian-item">

      <span>${data.heading}</span>
      <button class="btn"><i class="fa fa-solid fa-angle-down"></i></button>

    <div class="content">
     ${data.content}
    </div>
  </li>`
  }).join('');
  accordianList.innerHTML = accordianListHtml;
}
run();

const hideContent = ()=>{
  const btns = document.querySelectorAll('.accordian-item .btn');
  const toggleClasses = (e)=>{
      e.target.parentElement.parentElement.classList.toggle('show');
  }
  btns.forEach(btn=>{
    btn.addEventListener('click',toggleClasses)
  })
}

hideContent();
