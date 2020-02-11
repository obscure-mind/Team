/* eslint-disable linebreak-style */
$(document).ready(() => {
  const $addTodo = $('#todo-button');
  const $todoInput = $('#todo-input');
  const $out = $('#out')
  let mainArray = [];


  


  const fixText = text => {
    return text.trim() 
  }

  const render = (mainArray) => {
    $out.html(mainArray)
    // $(`#out`).html(mainArray);
  };

  mainArray.forEach((item) => {
    let str = '1';
    str += `<tr class="middle-pag">
     <td id="${item.id}">
      <input type="checkbox" 
        class="check-todo" ${item.checked ? 'checked' : ''} />
     </td>
  <td id="${item.id}"class="middle-pag__text">
  <span class="text-todo"> 
  ${item.text}
   </span> </td>
  <td id="${item.id}" > <button class="delete-td btn btn-outline-danger"> X 
  </button></td>
  </tr>`;
  $out.html(str)
  console.log(str, "STR")
return str;
});


  const addListTask = () => {
    const text = fixText($todoInput.val());
    const newTodo = {
      checked: false,
      id: Date.now(),
      text: text.trim(),
    };
    if (text === '') return;
    mainArray.unshift(newTodo);
    $todoInput.val('');
    console.log(mainArray, "AR")
  };

  $addTodo.on('click', () => {
    addListTask();
    render()
    console.log(mainArray, "AR")
  })











})