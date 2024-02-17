window.addEventListener("load", solve);

function solve() {

  const snowManInfo = {
    snowmanName: document.getElementById('snowman-name'),
    snowmanHeight: document.getElementById('snowman-height'),
    location: document.getElementById('location'),
    creatorName: document.getElementById('creator-name'),
    specialAttribute: document.getElementById('special-attribute')
  }

  const nextBtn = document.getElementsByClassName('add-btn');
  nextBtn[0].addEventListener('click', nextFormFn);

  const showInfo = document.getElementsByClassName('snowman-preview');
  const showList = document.getElementsByClassName('snow-list')[0];
  const main = document.getElementById("hero");

  function nextFormFn(event) {
    event.preventDefault();

    if (snowManInfo.snowmanName.value === '' ||
      snowManInfo.snowmanHeight.value === '' ||
      snowManInfo.location.value === '' ||
      snowManInfo.creatorName.value === '' ||
      snowManInfo.specialAttribute.value === '') {
      return;
    }

    const snowmanName = snowManInfo.snowmanName.value;
    const snowmanHeight = snowManInfo.snowmanHeight.value;
    const location = snowManInfo.location.value;
    const creatorName = snowManInfo.creatorName.value;
    const specialAttribute = snowManInfo.specialAttribute.value;

    snowManInfo.snowmanName.value = '';
    snowManInfo.snowmanHeight.value = '';
    snowManInfo.location.value = '';
    snowManInfo.creatorName.value = '';
    snowManInfo.specialAttribute.value = '';

    nextBtn[0].disabled = true;

    const result = nextFormPreview(snowmanName, snowmanHeight, location, creatorName, specialAttribute);
    showInfo[0].appendChild(result);
  }

  function createInfo(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    const list = e("li");
    list.className = "snowman-info";
    const article = e("article");

    article.appendChild(e("p", `Name: ${snowmanName}`));
    article.appendChild(e("p", `Height: ${snowmanHeight}`));
    article.appendChild(e("p", `Location: ${location}`));
    article.appendChild(e("p", `Creator: ${creatorName}`));
    article.appendChild(e("p", `Attribure: ${specialAttribute}`));

    list.appendChild(article);

    return list;
  }

  function nextFormPreview(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    const list = createInfo(snowmanName, snowmanHeight, location, creatorName, specialAttribute);

    const createDiv = e("div");
    createDiv.className = "btn-container";

    const editBtn = e("button", "Edit");
    editBtn.className = "edit-btn";
    editBtn.addEventListener('click', () => editBtnClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute));

    const continueBtn = e("button", "Next");
    continueBtn.className = "next-btn";
    continueBtn.addEventListener('click', () => continueBtnClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute));

    createDiv.appendChild(editBtn);
    createDiv.appendChild(continueBtn);

    list.appendChild(createDiv);
    return list;
  }

  function editBtnClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    snowManInfo.snowmanName.value = snowmanName;
    snowManInfo.snowmanHeight.value = snowmanHeight;
    snowManInfo.location.value = location;
    snowManInfo.creatorName.value = creatorName;
    snowManInfo.specialAttribute.value = specialAttribute;

    showInfo[0].textContent = '';

    nextBtn[0].disabled = false;
  }

  function continueBtnClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    const list = e("li");
    list.className = "snowman-content";
    const article = e("article");

    const sendBtn = e('button', "Send");
    sendBtn.className = "send-btn";
    sendBtn.addEventListener('click', () => sendClick());

    article.appendChild(e("p", `Name:\n ${snowmanName}`));
    article.appendChild(e("p", `Height:\n ${snowmanHeight}`));
    article.appendChild(e("p", `Location:\n ${location}`));
    article.appendChild(e("p", `Creator:\n ${creatorName}`));
    article.appendChild(e("p", `Attribure:\n ${specialAttribute}`));
    article.appendChild(sendBtn);

    list.appendChild(article);
    list.style.display = "inline-block";

    showList.appendChild(list);
    showInfo[0].textContent = '';

    return showList;
  }

  function sendClick() {
    const resultImage = document.getElementById("back-img");
    const backBtn = e('button', "Back");
    backBtn.addEventListener('click', backBtnClick);

    main.innerHTML = '';
    resultImage.removeAttribute("hidden");
    document.body.appendChild(backBtn);
  }

  function backBtnClick() {
    location.reload(true);
  }

  function e(type, content) {
    const element = document.createElement(type);

    if (content) {
      element.textContent = content;
    }

    return element;
  }
}